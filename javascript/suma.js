function sumar(e) { //Creamos la funcion sumar y le pasamos el evento

    let numero1 = parseInt(document.getElementById("numero1").value); //Obtenemos el valor del primer numero del formulario
    let numero2 = parseInt(document.getElementById("numero2").value); //Obtenemos el valor del segundo numero del formulario
    document.writeln("<h1>OPERARACIONES</h1>");
    document.writeln("<br><br>El valor del primer numero es:" + numero1); //Mostramos el valor del primer numero

    document.writeln("<br><br>El valor del segundo numero es:" +  numero2); //Mostramos el valor del segundo numero
    let suma = numero1 + numero2; //Realizamos la suma de los dos numeros
    document.writeln("<br><br>El valor de la suma: " + numero1 + " + " + numero2 + " = " + suma); //Mostramos el resultado de la suma

    //Raiz cuadrada
    let raiz = parseFloat(Math.sqrt(suma)); //Calculamos la raiz cuadrada del resultado de la suma
    document.writeln("<br><br>La raiz cuadrada de " + suma + " es: " + raiz); //Mostramos el resultado de la raiz cuadrada

    //SELECCIONES OPERACIONES 
    if operacion =="+"{
        let suma = numero1 + numero2;
    } else if operacion =="-"{
        let resta = numero1 - numero2;
    }


}
