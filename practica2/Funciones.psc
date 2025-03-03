//definicion de la funcion para Sumar
funcion Sumar =sumar( num1,num2 )
	Definir resultado Como Numero;
    resultado <- num1 + num2;

FinFuncion
//definicion de la funcion para Sumar
funcion Restar =restar( num1,num2 )
	Definir resultado Como Numero;
    resultado <- num1 - num2;
FinFuncion
algoritmo Funciones
	definir num1,num2, opciones como numeros;
	escribir"por favor ingrese una opcion";
	escribir"1-sumar  o 2-Resta";
	leer opciones;
	Escribir"Ingrese el primer numero" ;
	leer num1;
	Escribir"Ingrese el segundo numero";
	leer num2;
	
	si opciones=1 Entonces
		Escribir"Su suma es :",Sumar(num1,num2);
	FinSi
	
	si opciones=2 Entonces
		Escribir"Su resta es:",restar(num1,num2);
	FinSi
	
	
	
Finalgoritmo
