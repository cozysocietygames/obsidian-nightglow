<%*
const charFolder = "Characters/";
const encFolder = "Encounters";
const target = tp.config.target_file;
const fm = app.metadataCache.getFileCache(target)?.frontmatter ?? {};

// Pick participants
const chars = app.vault.getMarkdownFiles()
	.filter(f => f.path.startsWith(charFolder))
	.sort((a, b) => a.basename.localeCompare(b.basename));
const picked = target.path.startsWith(charFolder) ? [target] : [];
const DONE = "✓ Done";

while (true) {
	const left = chars.filter(c => !picked.includes(c));
	const choice = await tp.system.suggester(
		[DONE, ...left.map(c => c.basename)], [DONE, ...left], false, `Participants: ${picked.map(p => p.basename).join(", ") || "none yet"}`); 
	if (!choice || choice === DONE) break;
	picked.push(choice);
}

if (picked.length < 2) { new Notice("An encounter needs at least two participants."); return; }

// Date and place, defaulting to the current note's values
const ask = async (label, def) => await tp.system.prompt(label, String(def ?? ""));
const year = Number(await ask("Year", fm.year));
const month = Number(await ask("Month", fm.month));
const day = Number(await ask("Day", fm.day));

if ([year, month, day].some(Number.isNaN)) { new Notice("Date must be numbers."); return; }
const where = (await ask("Where (optional)", fm.where) ?? "").replace(/^\[\[|\]\]$/g, "");

// Build and create the note
const names = picked.map(p => p.basename);
const content = [
	"---",
	"type: encounter",
	`participants: [${names.map(n => `"[[${n}]]"`).join(", ")}]`,
	`year: ${year}`,
	`month: ${month}`,
	`day: ${day}`,
	...(where ? [`where: "[[${where}]]"`] : []),
	"---",
	"",
].join("\n");
const file = await tp.file.create_new( content, `${year}-${month}-${day} ${names.join(" & ")}`, false, encFolder);
tR += `[[${file.basename}]]`;

%>