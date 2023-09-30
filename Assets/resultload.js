let total = localStorage.getItem("total");
let relevanciasocial = localStorage.getItem("relevanciasocial");
let lenguaje = localStorage.getItem("lenguaje");
let sensorialmotor = localStorage.getItem("sensorialmotor");
let intereseslimitados = localStorage.getItem("intereseslimitados");
let areadiagnostico = document.getElementById("diagnostico");
let areatotal = document.getElementById("total");
let arealenguaje = document.getElementById("lenguaje");
let arearelevanciasocial = document.getElementById("relevanciasocial");
let areasensorialmotor = document.getElementById("sensorialmotor");
let areaintereseslimitados = document.getElementById("intereseslimitados");

areatotal.innerHTML = total;
arealenguaje.innerHTML = lenguaje;
arearelevanciasocial.innerHTML = relevanciasocial;
areasensorialmotor.innerHTML = sensorialmotor;
areaintereseslimitados.innerHTML = intereseslimitados;

if(total<25){
    areadiagnostico.innerHTML = "No autista";
} else if(total<65){
    areadiagnostico.innerHTML = "Probabilidad de autismo muy baja";
} else if(total<90){
    areadiagnostico.innerHTML = "Probable caso de autismo";
} else if(total<130){
    areadiagnostico.innerHTML = "Evidencia de autismo notable";
} else if(total<160){
    areadiagnostico.innerHTML = "Fuerte evidencia de autismo";
} else {
    areadiagnostico.innerHTML = "Muy fuerte evidencia de autismo";
}