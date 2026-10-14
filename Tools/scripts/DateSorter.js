let DateSorter = (x) => {
    let y = 0;
    if (x.year)  y += x.year * 10000;
    if (x.month) y += x.month * 100;
    if (x.day)   y += x.day;
    return y;
};