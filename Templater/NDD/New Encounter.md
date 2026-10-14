<%*
const charFolder = "_Narrative Design Document/Characters/";
const encFolder = "_Narrative Design Document/Plotlines/Timeline/Meetings";

// Read a note's frontmatter straight from the file, so it doesn't depend on Obsidian's cache
const readFm = async f => {
	if (!f) return {};
	const raw = await app.vault.read(f);
	const block = raw.replace(/^﻿/, "").match(/^---\r?\n([\s\S]*?)\r?\n---/);
	return {
		...(block ? (tp.obsidian.parseYaml(block[1]) ?? {}) : {}),
		...(app.metadataCache.getFileCache(f)?.frontmatter ?? {}),
	};
};

// The note Templater says it's running in
const ranIn = tp.config.target_file ?? app.workspace.getActiveFile();
let target = ranIn;
let fm = await readFm(target);

// If that note has no date (e.g. Templater made a fresh note), use the most recently opened scene instead
if (fm.year == null) {
	for (const p of app.workspace.getLastOpenFiles()) {
		const f = app.vault.getAbstractFileByPath(p);
		if (!f || f.extension !== "md" || f === ranIn) continue;
		const g = await readFm(f);
		if (g.type === "scene" && g.year != null) { target = f; fm = g; break; }
	}
}

// Shows what the template read. Delete this line once dates come through.
new Notice(`Templater ran in: ${ranIn?.path}\nDate taken from: ${target?.path}\nDate: ${fm.year ?? "?"}-${fm.month ?? "?"}-${fm.day ?? "?"}`, 10000);

// Pick participants
const chars = app.vault.getMarkdownFiles()
	.filter(f => f.path.startsWith(charFolder))
	.sort((a, b) => a.basename.localeCompare(b.basename));
const picked = target.path.startsWith(charFolder) ? [target] : [];
const DONE = "✓ Done";

while (true) {
	const left = chars.filter(c => !picked.includes(c));
	const choice = await tp.system.suggester(
		[DONE, ...left.map(c => c.basename)], [DONE, ...left], false,
		`Participants: ${picked.map(p => p.basename).join(", ") || "none yet"}`);
	if (!choice || choice === DONE) break;
	picked.push(choice);
}

if (picked.length < 2) { new Notice("An encounter needs at least two participants."); return; }

// Date: taken from the scene. Only asks if the scene has no year.
const num = v => (v === undefined || v === null || String(v).trim() === "") ? null : Number(v);
let year = num(fm.year), month = num(fm.month), day = num(fm.day);
if (year === null) {
	const ask = async label => num(await tp.system.prompt(`${label} (this note has no date)`, ""));
	year = await ask("Year");
	month = await ask("Month");
	day = await ask("Day");
}
if (year === null) { new Notice("No year given, so no encounter was created."); return; }
if ([year, month, day].some(v => v !== null && Number.isNaN(v))) { new Notice("Date must be numbers."); return; }

const where = String(fm.where ?? "").replace(/^\[\[|\]\]$/g, "");

// Build and create the note
const names = picked.map(p => p.basename);
const date = [year, month, day].filter(v => v !== null);
const content = [
	"---",
	"type: encounter",
	`participants: [${names.map(n => `"[[${n}]]"`).join(", ")}]`,
	`year: ${year}`,
	...(month !== null ? [`month: ${month}`] : []),
	...(day !== null ? [`day: ${day}`] : []),
	...(where ? [`where: "[[${where}]]"`] : []),
	...(fm.type === "scene" ? [`scene: "[[${target.basename}]]"`] : []),
	"---",
	"",
].join("\n");

const file = await tp.file.create_new(content, `${date.join("-")} ${names.join(" & ")}`, false, encFolder);
tR += `[[${file.basename}]]`;
%>
