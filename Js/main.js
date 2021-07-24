/* var nome = "Ranieri";
var idade= 30;
var frase= "japão é BOM"
var n1= 4;
var n2= 9; */
/* alert("Bem vindo: "+ nome +"\n Idade: "+idade); */
/* alert(idade+"idade"); */
/* console.log(nome)/
console.log(idade+42);
console.log(frase.replace("japão","Brasil"))
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
console.log(n1+n2); */
/* var lista = ["maçã","pêra","laranja"]
lista.push("Abacate");
lista.unshift("Tomate");
lista.splice(3,0,"Teste")
console.log(lista);
console.log(lista[1]);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join("|")); */
/* alert(lista[2]) */

/* var frutas = {nome:"Cajá",tipo:"Azedo"}
console.log(frutas);
var dicionarioList=[{nome:"Cajá",tipo:"Azedo"},{nome:"Melão",tipo:"Doce"}]
console.log(dicionarioList); */

/* var idade= prompt("Informe a sua Idade")
/* if(idade>=18){
    alert(idade+"\n Maior de Idade");
    idade=8;
}
else{
    alert(idade+"\n É menor de Idade");
    
} */
/* if(idade>=18){
    alert(idade+"\n Maior de Idade");
   }
else{
    alert(idade+"\n É menor de Idade");
    
} */ 


///laços de repetição
/* var count=0;
/* while(count<7){
    console.log(count);
    count=count+1;
} */

/* for(count=0;count<=5;count++){
    console.log(count)
} */




//Data//
/* var d =new Date();
alert(d)
console.log(d.getDay())
console.log(d.getFullYear()) */


//Funções//
/* function teste (v1,vb2){
    return v1+vb2
}

console.log(teste(10,20)); */

function validar(idade){
    var value;
    if(idade>=18){
        value=true;
    }else{value=false}

    return value;
    
}
var idade=prompt("Qual é sua idade?")
console.log(validar(idade));