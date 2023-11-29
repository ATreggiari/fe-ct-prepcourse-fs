function continueStatement(num) {
 
       var AumentoDeDos = [];   
       for (var x = 0; x < 10; x++) {
          if (x===5){
             continue;
          }          
          if (x === 0) {
             AumentoDeDos[x] = num + 2;
          } else { if( x !== 6) {
             AumentoDeDos[x] = AumentoDeDos[x - 1] + 2;
          } else{ AumentoDeDos[x]= AumentoDeDos[x-2]+2}
       }
       }
    
       return AumentoDeDos;
    }