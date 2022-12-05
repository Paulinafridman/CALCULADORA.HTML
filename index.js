//console.log("script conectado exitosamente");

/* Manejo de DOM */
//Se agarran los diferentes elementos que se tienen en el html (caja de texto y boton)
//Se agarra con JS y los vamos a controlar, dandole funcionalidad


//se accede al documento, al html por ID
const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado =document.getElementById("resultado")

//console.log(txtOp1, txtOp2, txtOperador, btnCalcular)



//AHora que tengo mis objetos html en el js
//1ro crear la funcion que se ejecute cada vez que se aprete el boton calcular
//2do hay que crear el evento en el boton del HTML

//3er Escuchador de evento:
btnCalcular.addEventListener('click', calcular)

//1ro:
function calcular(){
    //console.log("apretaste el boton calcular")
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
        
        let resultado;

        switch(operacion){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2        
                break
        }
        pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado
        //console.log("calculo posible")
    }else{

        pResultado.style = "color:red"
        pResultado.innerText = "Calculo imposible"
    }
}