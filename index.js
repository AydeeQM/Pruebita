//Ejercicio 1
var assert = require('assert');

function multiplica(arr, num)
{
  var total= arr.reduce(function(producto, siguiente){
  return producto * siguiente;
  });
    if(!isNaN(num)){               
      return total * num;  
    }
  return total;
}
//document.write(multiplica());

//Pruebas Unitarias
//Ejercicio 1

    describe('Ejercicio 1', function(){
        it('Prueba de [2, 3] y 10', function(){
            assert.equal(60, multiplica([2,3], 10));
        });
        it('Prueba de [2, 3] y "hola"', function(){
            assert.equal(6, multiplica([2,3], "hola"));
        });
        it('Prueba de [2, 3] y "hola"', function(){
            assert.equal(6, multiplica([2,3]));
        });
    });