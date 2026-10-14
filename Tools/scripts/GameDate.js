class DateUtils {
    dateSorter (x) {
        let y = 0;
        if (x.year)  y += x.year * 10000;
        if (x.month) y += x.month * 100;
        if (x.day)   y += x.day;
        
        return y;
    }
    displayStoryDate (dv, date) {
        let d = date ? date : dv.current();
        let wantedDate;
        if (!date) {
            wantedDate = {
                year: d.story_year,
                month: d.story_month,
                day: d.story_day,
            }
        }

        this.formatDate(dv, wantedDate);
    }
    formatDate (dv, d) {
        
    }
}

