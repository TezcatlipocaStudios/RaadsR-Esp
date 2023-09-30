function VerResultados(){
    const normativas = [1, 6, 11, 18, 23, 26, 33, 37, 43, 47, 48, 53, 58, 62, 68, 72, 77];
    const relevanciasocial = [1, 3, 5, 6, 8, 11, 12, 14, 17, 18, 20, 21, 22, 23, 25, 26, 28, 31, 37, 38, 39, 43, 44, 45, 47, 48, 53, 54, 55, 60, 61, 64, 68, 69, 72, 76, 77, 79, 80];
    const lenguaje = [2, 7, 15, 27, 35, 58, 66];
    const sensorialmotor = [4, 10, 16, 19, 29, 33, 34, 36, 42, 46, 49, 51, 57, 59, 62, 65, 67, 71, 73, 74];
    const intereseslimitados = [9, 13, 24, 30, 32, 40, 41, 50, 52, 56, 63, 70, 75, 78];
    let scorerelevanciasocial = 0;
    let scorelenguaje = 0;
    let scoresensorialmotor = 0;
    let scoreintereseslimitados = 0;
    let scoretotal = 0;
    let checka;
    let checkb;
    let start;
    for(let i = 1; i<=80; i++){
        checka = document.getElementById(String(i)+"a");
        checkb = document.getElementById(String(i)+"b");
        if(normativas.includes(i)){
            start = 3;
            if(checka.checked){
                start -=2 ;
            }
            if(checkb.checked){
                start--;
            }
        } else {
            start = 0;
            if(checka.checked){
                start += 2;
            }
            if(checkb.checked){
                start++;
            }
        }
        if(relevanciasocial.includes(i)){
            scorerelevanciasocial+=start;
        } else if(lenguaje.includes(i)) {
            scorelenguaje+=start;
        } else if(sensorialmotor.includes(i)) {
            scoresensorialmotor+=start;
        } else {
            scoreintereseslimitados+=start;
        }
        scoretotal+=start;
    }
    localStorage.setItem("total", scoretotal);
    localStorage.setItem("relevanciasocial", scorerelevanciasocial);
    localStorage.setItem("lenguaje", scorelenguaje);
    localStorage.setItem("sensorialmotor", scoresensorialmotor);
    localStorage.setItem("intereseslimitados", scoreintereseslimitados);
    window.open("Assets/results.html", "_blank");
}
document.getElementById("VerResultados").addEventListener("click", VerResultados);