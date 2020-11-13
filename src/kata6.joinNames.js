const joinNames = namesObj => {

   let low = namesObj.map(e => e.name);
   
   let final = low.pop();
   
   return low.join() + " & " + final;
    /*return roll.toString();*/ // prints the value as a string
};

module.exports = joinNames;
