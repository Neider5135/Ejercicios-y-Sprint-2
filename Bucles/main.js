/*
//1
let num1 = parseInt(prompt("Ingrese un número para obtener su tabla de multiplicación en la consola"))
let r= 1
while (r<11) {
    res = num1 * r
    console.log(res)
    r+=1
}
*/
/*
//2
let num2 = parseInt(prompt("Ingrese un número"))
let acom=[]
while (parseInt(num2) != 0) {
    if(!(isNaN (num2))){
        acom.push (num2)
    }
    console.log(acom)
    console.table (acom)
    num2 = parseInt(prompt("Ingrese un número"))
}
alert ("Los números ingresados fueron " + acom)
*/
/*
//3
let inten = 1
let nIncog = 60
let nInten = parseInt(prompt("El número misterioso está entre el 1 y el 100, ¿podrás adivinarlo?"))

while (nIncog != nInten) {
    inten ++
    if (isNaN(nInten) || nInten > 100 || nInten < 1) {
        alert ("Acabas de desperdiciar un intento")
    }else if (nInten < nIncog) {
        alert ("El número misterioso es mayor")
    } else {
        alert ("El número misterioso es menor")
    }
    nInten = parseInt(prompt("Ingresa un número entre el 1 y el 100"))
}
alert ("Ganaste!! el número misterioso era " + nIncog + " y el número de intentos fue " + inten)
*/
/*
//4
let div = 0;
let nIng = parseInt(prompt("Ingresa tu número para saber si es primo"));

if (isNaN(nIng) || nIng <= 0) {
  alert("Ingresaste un carácter inválido");
} else {
  for (let i = 1; i <= nIng; i++) {
    if (nIng % i == 0) {
      div++;
    }
  }
  if (div != 2) {
    alert(nIng + " No es primo");
  } else {
    alert(nIng + " Es primo");
  }
}
*/
/*
//5
let divi = 0;
let divisores = []
let nIngr = parseInt(prompt("Ingresa tu número para descubrir todos sus divisores"));

if (isNaN(nIngr) || nIngr <= 0) {
  alert("Ingresaste un carácter inválido");
} else {
  for (let i = 1; i <= nIngr; i++) {
    if (nIngr % i == 0) {
      divi++;
      divisores.push (i)
    }
  }
  if (divi == 1) {
    alert("El único divisor de " + nIngr + " es: " + divisores);
  } else {
    alert(divisores + " son los divisores de " + nIngr);
  }
}
*/
/*
//6
let arrayP = [15, "j", 58, 25, "Jaja XD", "No te pases de lanza", 8, 0, "Vaca", 10]

for (let i = 0; i < arrayP.length; i++) {
    console.log (arrayP[i])    
}
*/
/*
//7
let arrayP2 = [15, 2, 58, 25, 5, 6, 8, 0, 9, 10]

for (let i = 0; i < arrayP2.length; i++) {
    console.log ((arrayP2[i]) * 2)    
}
*/
/*
//8
let familia = [
    persona1 = {
      nombre: "Juanito",
      apellido: "Perez",
      edad: 50,
      papelFamiliar: "Padre",
    },
    persona2 = {
      nombre: "Juanita",
      apellido: "De Perez",
      edad: 47,
      papelFamiliar: "Madre",
    },
    persona3 = {
      nombre: "Juanito. Jr",
      apellido: "Perez",
      edad: 21,
      papelFamiliar: "Hijo menor"
    },
    persona4 = {
      nombre: "Juanita",
      apellido: "Perez",
      edad: 23,
      papelFamiliar: "Hija del medio"
    },
    persona5 = {
      nombre: "Juancho",
      apellido: "Perez",
      edad: 25,
      papelFamiliar: "Hijo mayor"
    },
  ]
  for (let i = 0; i < familia.length; i++) {
    alert ("Mi nombre es " + familia[i].nombre + " " + familia[i].apellido + " tengo " + familia[i].edad + " años y en la familia soy " + familia[i].papelFamiliar)
  }
*/
/*
//9
let arrayP3 = [15, 2, 58, 25, 5, 6, 8, 0, 9, 10]

for (let i = 0; i < arrayP3.length; i++) {
    if ((arrayP3[i]) % 2 == 0) {
        console.log (arrayP3[i])  
    }  
}
*/
/*
//10
let entrada = parseInt(prompt("Ingrese su número, los pares e impares se procesan a parte, para finalizar el proceso, ingresa el número 0"))
let pares = []
let impares = []
while (entrada != 0) {
  if (entrada % 2 == 0){
    pares.push (entrada)
    if (pares.length == 2){
      alert (pares[0] + pares[1])
      pares = []
    }
  }else if (entrada % 2 != 0){
    impares.push (entrada)
    if (impares.length == 2){
      alert (impares[0] + impares[1])
      impares = []
    }
  }else if (isNaN(entrada)){
    alert ("Se ingresaron valores inválidos")
  }
  entrada = parseInt(prompt("Ingrese su número, los pares e impares se procesan a parte, para finalizar el proceso, ingresa el número 0"))
}
*/
/*
//11
let arrayP4 = [15, 2, 58, 25, 5, 6, 8, 0, 9, 102]

let masGr = 0

for (let i = 0; i < arrayP4.length; i++) {
    if ((arrayP4[i]) > masGr) {
        masGr = arrayP4 [i]
    }  
}
alert ("El número más grande de la lista es: " + masGr)
*/
/*
//12
let arrayP4 = [15, 2, 58, 25, 5, 6, 8, 3, 9, 1]

let masPe = 0

for (let i = 0; i < arrayP4.length; i++) {
    if ((arrayP4[i]) < masPe || i == 0) {
        masPe = arrayP4 [i]
    }  
}
alert ("El número más pequeño de la lista es: " + masPe)
*/
/*
//13
do {
    jugador1 = parseInt(prompt("Turno del jugador 1. Piedra: 1, Papel: 2, Tijeras: 3"))
    jugador2 = parseInt(prompt("Turno del jugador 2. Piedra: 1, Papel: 2, Tijeras: 3"))
    if (isNaN(jugador1) || isNaN(jugador2) ||  jugador1 < 1 || jugador1 > 3 || jugador2 < 1 || jugador2 > 3){
        alert ("Se ingresó valor inválido")
    } else if ((jugador1 == 1 && jugador2 == 2) || (jugador1 == 2 && jugador2 == 3) || (jugador1 == 3 && jugador2 == 1)){
        alert ("Gana jugador 2")
    } else if (jugador1 == jugador2) {
        alert ("Empate!!")
    } else {
        alert ("Gana jugador 1")
    }
}
while (jugador1 == jugador2)
*/
/*
//14
let salida = []
j1 = 3
k1 = 1
for (let i = 0; i < 3; i++) {
  salida = []
  for (let j = 1; j < j1; j++) {
    salida.push (" ")
  }
  
  for (let k = 0; k < k1; k++) {
    salida.push ("*")
  }
  j1--
  k1+=2
  console.log (salida.toString())
}
*/
/*
//15
let salida = []
j1 = 0
k1 = 5
for (let i = 0; i < 3; i++) {
  salida = []
  for (let j = 0; j < j1; j++) {
    salida.push (" ")
  }
  
  for (let k = 0; k < k1; k++) {
    salida.push ("*")
  }
  j1++
  k1-=2
  console.log (salida.toString())
}
*/
/*
//16
let arrayP5 = [15, 2, 58, 25, 5, 6, 8, 3, 9, 1]

let ordenArray = []

let n = 0

while (ordenArray.length != arrayP5.length) {
  for (let i = 0; i < arrayP5.length; i++) {
    if ((arrayP5[i]) == n){
      ordenArray.push (arrayP5[i])
    }
  }
  n++
}

alert ("La lista desordenada va así: " + arrayP5)

alert ("La lista ordenada va así: " + ordenArray)
*/
