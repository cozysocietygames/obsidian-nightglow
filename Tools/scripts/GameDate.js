class GameDate {
  catastrophe_epoch_format(dv, year, month, day) {
    const months = dv.page("Calendar").months;
    let ya;
    if(year < 0){
        ya = "B.Ca."
    }else{
        ya = "Ca."
    }

    let yeartxt = "???", monthtxt = "", daytxt = "";
    
    if (year) {
        yeartxt = (Math.abs(year) + " " + ya + ", ");    
        if (month) {
            monthtxt = months[month - 1] + " ";        
            if (day) {
                daytxt = String(day).padStart(2, '0');
            }
        }
    }

    return `${yeartxt + monthtxt + daytxt} `;
  }
}
