Algoritmo CrearUsuario
	Definir nombreCompleto, correo, password como cadenas;
	definir arrobaValidator,Inicial,error como entero;
	// Inicializamos la variable
	error<-0;
	arrobavalidator <- 1;  
	Escribir "Porfavor ingrese su nombre completo:";
	Leer nombreCompleto;
	
	si Longitud(nombrecompleto) < 3 Entonces Entonces;
		escribir "el nombre debe tener almenos 3 caracteres";
		error<-1;
	FinSi
	
	
	Escribir "Porfavor ingrese su correo";
	Leer correo;
	
	
	Para Inicial<-1 hasta Longitud(correo) Hacer
		
		si subcadena(correo,Inicial,Inicial)="@" Entonces 
			arrobaValidator<-1;
		FinSi
		
	FinPara
	
	si arrobaValidator = 0 Entonces
		escribir"porfavor ingrese un correo valido";
		
		error<-1;
	finsi 
	
	
	
	Escribir "Porfavor ingrese su contraseña";
	Leer password;
	
	Si Longitud(password) < 8 Entonces
		Escribir "La contraseña debe ser mayor a 8 caracteres";
		error<-1;
		
	fin  si	
	
	si error<-1 Entonces
		escribir"porfavor ingrese un contraseña valida";
		leer password;
		error<-1;
		
	FinSi
	si error<-1 Entonces
		
		escribir"debe cumplir con todos las validaciones paa poder registrarse";
		error<-1;
	FinSi
	
	si error = 0 Entonces
		
		escribir"Registro  exitoso";
		Escribir "los datos del usuario son:";
		Escribir "Nombre completo es ", nombreCompleto;
		Escribir "su correo es ", correo;
		Escribir "su constraseña es ", password;	
	FinSi

	//salida de datos
	
FinAlgoritmo

	

