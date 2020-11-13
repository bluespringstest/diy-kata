const humanCatDogYears = number => {
    let humanYears = [number];
    let catYears = function years(n) {
        if (n < 2) {
            return 15;
        }
        else if (n > 2){
        return ((n - 2) * 4) + 24;
    }
    else return 24
    }

    let dogYears = function years(n) {
        if (n < 2) {
            return 15;
        }
        else if (n > 2){
        return ((n - 2) * 5) + 24;
    }
    else return 24
    }
    
    let allYears = [...humanYears, catYears(number), dogYears(number)];
    return allYears;
};

module.exports = humanCatDogYears;
