function resultado() {
    var p1, p2, p3, p4, p5, p6, musical;

    // 1a pregunta
    if (document.getElementById('p14').checked==true) {p1=1}
    else {p1=0}
    // 2a pregunta
    if (document.getElementById('p23').checked==true) {p2=1}
    else {p2=0}
    // 3a pregunta
    if (document.getElementById('p33').checked==true) {p3=1}
    else {p3=0}
    // 4a pregunta
    if (document.getElementById('p42').checked==true) {p4=1}
    else {p4=0}
    // 5a pregunta
    if (document.getElementById('p53').checked==true) {p5=1}
    else {p5=0}
    // 6a pregunta
    if (document.getElementById('p62').checked==true) {p6=1}
    else {p6=0}
      // 7a pregunta
      if (document.getElementById('p74').checked==true) {p7=1}
      else {p7=0}
        // 8a pregunta
    if (document.getElementById('p81').checked==true) {p8=1}
    else {p8=0}
      // 9a pregunta
      if (document.getElementById('p93').checked==true) {p9=1}
      else {p9=0}
        // 10a pregunta
    if (document.getElementById('p103').checked==true) {p10=1}
    else {p10=0}

    musical=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
   if( (musical == 1) || (musical==2)) {alert("No sabes mucho de musica pero aventurate a checar nuestras categorias!! Resultado: " + musical);}
   else if( (musical == 3) || (musical==4)) {alert("Estas un poco relacionado con la musica, te invitamos a ver nuestras categorias para que te relaciones mas!! resultado: "  + musical);} 
   else if ((musical == 5) || (musical==6)) {alert("Ni mucho ni poco pero si quieres saber mas checa nuestras categorias para que sigas disfrutando!! resultado: "  + musical);}
   else if ((musical == 7) || (musical==8)) {alert("Te gusta la musica, no pierdas ese gusto y sigue escuchando mas musica en nuestra pagina!! resultado: "  + musical);}
   else if ((musical == 9) || (musical==10)) {alert("La musica para ti es vida, esta pagina va a seguir alimentando ese amor, disfruta navegando nuestra pagina!! resultado: "  + musical);}

   
}
