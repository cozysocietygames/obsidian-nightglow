class DateUtils {
    dateSorter (x) {
        let y = 0;
        if (x.year)  y += x.year * 10000;
        if (x.month) y += x.month * 100;
        if (x.day)   y += x.day;
        
        return y;
    }
    displayDate (dv, date) {

        let currentPage = dv.current();
        if (!date) {
            let date = dv.current();
            date = {
                year: d.story_year,
                month: d.story_month,
                day: d.story_day,
            }
        }
        dv.paragraph();
        // let date = d ? : ;
        // if(date){

        // }
        
    }
    formatDate (dv, d) {
        dv.paragraph("formatDate~");
    }
}

