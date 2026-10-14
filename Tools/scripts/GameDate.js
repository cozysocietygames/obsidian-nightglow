class DateUtils {
    dateSorter (x) {
        let y = 0;
        if (x.year)  y += x.year * 10000;
        if (x.month) y += x.month * 100;
        if (x.day)   y += x.day;
        
        return y;
    }
    getStoryDate (dv, date) {
        let d = date ? date : dv.current();
        let wantedDate = {
                year: d.story_year,
                ...(d.story_month && {month: d.story_month}),
                ...(d.story_month && d.story_day && {day: d.story_day}),
            };

        return this.formatDate(dv, wantedDate);
    }
    formatDate (dv, wantedDate) {
        const months = dv.page("Calendar").months;
        let year, month, day;
        let text = "";
        if(wantedDate.year) { 
            year = wantedDate.year;
            let ya = year < 0 ? "BCa." : "SCa."
            let yeartxt = (year + " " + ya);
            text += yeartxt;
            if(wantedDate.month) {
                month = wantedDate.month;
                let monthtxt = ", " + months[month-1];
                text += monthtxt;
                if(wantedDate.day) {
                    day = wantedDate.day;
                    let daytxt = " " + String(day).padStart(2, '0');
                    text += daytxt;
                }
            }
            return text;
        }else{
            return "Unspecified Date";
        } 
    }
}

