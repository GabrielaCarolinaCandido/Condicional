function media (){

var val1 = document.getElementById('valor1').value;
var val2 = document.getElementById('valor2').value;
var result = (parseInt(val1) + parseInt(val2))/2;
 
if(result >= 6)
alert('Sua média foi:' + result + 'Voce foi aprovado')
else
alert('Sua média foi:' + result + ' Voce foi reprovado')

}

function comparacao(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;

    if(result=10)
    
    alert('parabens voce é um genio')
    if(val1==val2)
    alert ('os valores são iguais')
    else
    if(val1>val2)
    alert('valor 1 é maior que valor 2')
    else
    alert('valor 2 é maior que valor 1' )
}