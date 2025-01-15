function creaCard(linea, orario) {
    let riga = document.getElementById("riga");
    let div = document.createElement("div");
    div.classList.add("card");

    let divBody = document.createElement("div");
    divBody.classList.add("card-body");

    let divLinea = document.createElement("div");
    divLinea.classList.add("linea");
    divLinea.innerHTML = "Linea: " + linea;

    let p1 = document.createElement("p");
    p1.innerHTML = "Orario: " + orario;
    p1.classList.add("card-text");

    divBody.appendChild(divLinea); 
    divBody.appendChild(p1);  
    div.appendChild(divBody);
    riga.appendChild(div);
}

function cerca() {
    let numeroFermata = document.getElementById("input").value;

    let URL = "https://gpa.madbob.org/query.php?stop=" + numeroFermata;

    fetch(URL)
        .then(x => x.json())
        .then(y => {
            document.getElementById("riga").innerHTML = "";
            y.forEach(item => {
                creaCard(item.line, item.hour);
            });
        })
        .catch(error => {
            alert("Errore nel recupero dei dati. Riprova.");
        });
}
