window.onload = function losujCytat() {
    var x = document.getElementById("cytaty").childElementCount; 
    var liczba = Math.ceil(Math.random()*x)
    for (i=0; i<x; i++) {
document.getElementsByTagName("q")[i].classList.remove("show")     
    }
      var odp = document.getElementsByTagName("q")[liczba-1];
        odp.classList.add("show")
       }

 
      function refresh() {
         var x = document.getElementById("cytaty").childElementCount; 
         var liczba = Math.ceil(Math.random()*x)
         for (i=0; i<x; i++) {
     document.getElementsByTagName("q")[i].classList.remove("show")     
         }
           var odp = document.getElementsByTagName("q")[liczba-1];
             odp.classList.add("show")
     }

function drawLots (kryt) { 
   var kryt=kryt.getAttribute("id")
        console.log(kryt)
        var x = document.getElementById("cytaty").childElementCount; 
        const table = []
           for (i=0; i<x; i++) { 
       var elem = document.getElementsByTagName("q")[i]
            var elem2 = elem.classList.contains(kryt)
               if (elem2 == true) {table.push(elem.textContent)}    }
            var liczba = Math.ceil(Math.random()*(table.length)-1)
            var odp = table[liczba];
            var newElem = document.createElement("q")
       document.getElementById("cytaty").appendChild(newElem)
        newElem.innerHTML = odp
        var x = document.getElementById("cytaty").childElementCount; 
        for (i=0; i<x; i++) {
    document.getElementsByTagName("q")[i].classList.remove("show")     
        }
               newElem.classList.add("show")
            }


