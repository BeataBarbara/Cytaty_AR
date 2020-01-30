window.onload = function losujCytat(polecenie,liczba) {
    var x = document.getElementById("cytaty").childElementCount; 
    var liczba = Math.ceil(Math.random()*x)
      var odp = document.getElementById('cytat_' + liczba);
        odp.classList.remove("hide")
       };
     function refresh() {
      location.reload()
     }

function love () {
    var x = document.getElementById("cytaty").childElementCount; 
    for (i=1; i<=x; i++) {
        elem = document.getElementById("cytat_", i)
        if (elem.getAttribute("class", "hide")) {
            alert("abbbb")
        } else {
            alert("abrfggvkfjs")
        }
    } }


