const digPow = (n, p) => {  
  
    let aort = [2, 3, 4, 5, 6, 7, 8, 9];
    let base = Math.sqrt(n);
    let newNumb =  Math.floor(base);
    let crud =  n - (Math.pow(newNumb, 2));
   
    function checkNum(e){
      //return e === crud;
      if (crud % e === 0){
        return e;
      } 
    }
    let newCalc = aort.find(checkNum);
  
    function negativeNum(f) {
      if (f - p === 1){
        return p
      }
      else if (newCalc === p)
      {
        return crud - ((p+1)* newCalc)
    }
    else if (f !== aort.pop())
    {
      return -1
    }
}
return negativeNum(newCalc);
}

module.exports = digPow;