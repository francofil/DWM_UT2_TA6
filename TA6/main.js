function leapYear(año){//1, 4
    if( (año%4==0) || (año%100==0 && año%400==0)){
        return true;
    }
    return false;
}
console.log(leapYear(1996));
