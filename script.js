
function creaCard(linea, orario){
    let riga = document.getElementById("riga");
    let div = document.createElement("div");   
    let p1 = document.createElement("p");   
    let p2 = document.createElement("p");
    p1.innerHTML = linea;
    p2.innerHTML = orario;
    p1.classList.add("text-bg-primary");
    div.appendChild(p1);
    div.appendChild(p2);
    riga.appendChild(div);
}


function cerca(){
    let numeroFermata =  document.getElementById("input").value;

    let URL = "https://gpa.madbob.org/query.php?stop=" + numeroFermata;

    fetch(URL)
    .then(x => x.json())
    .then(y =>{
        creaCard(y[0].line, y[0].hour);
        creaCard(y[1].line, y[1].hour);
        creaCard(y[2].line, y[2].hour);
    });
    
}

