var era = function() {

    var primes = []

    var LIMIT = document.getElementById("numb").value

    if(isNaN(LIMIT)){
      document.getElementById('primos').innerHTML = "Ingresa un número válido por favor."
        return
    }
    var arr = Array()
    var upperLimit = Math.sqrt(LIMIT)
  
    for (var i = 0; i < LIMIT; i++) { 
      arr.push(true)
    }
  
    for (var i = 2; i <= upperLimit; i++) { 
      if (arr[i]) { 
        for (j = i * i; j < LIMIT; j += i) { 
          arr[j] = false
        }
      }
  
    }
  
    for (var i = 2; i < LIMIT; i++) { 
      if (arr[i]) { 
        primes.push(i)
      }
    }
    document.getElementById('titulo').innerHTML = "Los números primos del 2 al " + LIMIT + " son: "
    document.getElementById('primos').innerHTML = primes + "."
  }