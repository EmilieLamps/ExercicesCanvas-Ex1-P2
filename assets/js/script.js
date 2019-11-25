var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// Cône
ctx.beginPath(); // // Début du tracé
 ctx.moveTo(200,275); // Point de départ (Gauche, Haut)
 ctx.lineTo(160,155); // ligne de gauche du triangle
 ctx.lineTo(240,155); // ligne de droite du triangle
 ctx.fillStyle = "#AA6522"; // Définition de la couleur de remplissage
 ctx.fill();
 ctx.closePath();

// Haut
ctx.beginPath();
ctx.lineWidth="2";
ctx.fillStyle="#8A0908"
ctx.moveTo(160,155);
ctx.bezierCurveTo(200,70,230,100,239,155);
// mesure (point de départ, hauteur, )
ctx.fill();
