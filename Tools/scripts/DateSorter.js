let DateSorter = (x) => {

    let y = 0;
    if(x.l.year){
        y += x.l.year * 10000
    }
    if(x.l.month){
        y += x.l.month * 100
    }
    if(x.l.day){
        y += x.l.day
    }
    
    return y;
};