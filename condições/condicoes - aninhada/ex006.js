// ORÁTICA O3 - exercício de horários por exeplo se são as 8 será bom dia, 15 boa tarde, 20 boa noite ;)

var agora = new Date(); 
var hora = agora.getHours(); 

hora = 20

if (hora <= 12) {
    console.log('Bom dia!'); 
}
else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!'); 
}
else {
    console.log('Boa noite!');
}