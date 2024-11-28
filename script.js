let apa = document.getElementById("Apar");
let roupas = document.getElementById("roupas").style;
let Novidades = document.getElementById("Novida").style;
let clickCa = document.getElementById("Camisa");
let fora = document.getElementById("Fora");
let clickNovi = document.getElementById("Novidade");
let Desati = document.getElementById("Obj");
let click = false;
let Camisa = false;
let Nov = false;
let desativar = false;



Desati.addEventListener("mouseover", function() {
    desativar = true;
    VerNovidades()
})

fora.addEventListener("mouseover", function() {
    Camisa = false;
    Nov = false;
    click = false;
    VerNovidades()
})
clickNovi.addEventListener("click", function() {
    click = true;
    desativar = false;
    Nov = true;
    Camisa = false;
    VerNovidades()
})
clickCa.addEventListener("click", function(){  
    click = true;
    desativar = false;
    Nov = false;
    Camisa = true;
    VerNovidades()
})
function VerNovidades() {
    if (Nov) {
        apa.style.opacity = "1";
        Novidades.display = "grid";
        roupas.display = "none";
    } else if (Camisa) {
        apa.style.opacity = "1";
        roupas.display = "grid";
        Novidades.display = "none";
    } else {
        roupas.display = "none";
        apa.style.opacity = "0";
    }
    if (desativar) {
        roupas.display = "none";
        apa.style.opacity = "0"; 
        Novidades.display = "none";
    } else {

    }
}
VerNovidades();