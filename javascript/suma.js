function calcular(e) { //Funcion para realizar las operaciones
    
    let numero1 = parseInt(document.getElementById("numero1").value); //Obtenemos el valor del primer numero del formulario
    let numero2 = parseInt(document.getElementById("numero2").value); //Obtenemos el valor del segundo numero del formulario
    let operacion = document.getElementById("operacion").value; //Obtenemos el valor de la operacion del formulario

    //mostramos los valores obtenidos
    document.writeln("<h1>OPERACIONES</h1>");
    document.writeln("<br><br>El valor del primer numero es: " + numero1);
    document.writeln("<br><br>El valor del segundo numero es: " + numero2); 
    
    if (operacion == "+"){ //cindicion para saber que operacion se va a realizar
        let suma = numero1 + numero2; //Realizamos la operacion
        document.writeln("<br><br>El valor de la suma: " + numero1 + " + " + numero2 + " = " + suma); //Mostramos el resultado
    }else if (operacion == "-"){
        let resta = numero1 - numero2; 
        document.writeln("<br><br>El valor de la resta: " + numero1 + " - " + numero2 + " = " + resta); 
    }else if (operacion == "*"){
        let multiplicacion = numero1 * numero2;
        document.writeln("<br><br>El valor de la multiplicacion: " + numero1 + " * " + numero2 + " = " + multiplicacion); 
    }else if (operacion == "/"){
        let division = numero1 / numero2;
        document.writeln("<br><br>El valor de la division: " + numero1 + " / " + numero2 + " = " + division);
    }else{
        document.writeln("<br><br>Operacion no valida"); //Si no es ninguna de las operaciones anteriore
    }
 
}
