const reachDestination = (distance, speed) => {

     let time = function sum(d, s) {
        let calculate = d / s;
        if (d % s === 0) {
            return Math.round(calculate);
        } else {
            return calculate.toFixed(1);
        }

    }
    return "I should be there in " + time(distance, speed) + " hours.";
};

module.exports = reachDestination;
