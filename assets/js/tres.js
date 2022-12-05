const ingresar = () =>{
    console.log('viendo el codigo');
    const numero1= document.querySelector('#numero1').value;
    const numero2= document.querySelector('#numero2').value
    const numero3= document.querySelector('#numero3').value;

    const password = (numero1)+ (numero2)+ (numero3);   
    console.log('viendo el codigo');
    const respuesta = document.querySelector('#respuesta');

    console.log(respuesta);
    console.log('imp password ingresada');
    console.log(password);

    if(password==911){
        respuesta.innerHTML=' Password 1 correcto '
    }
    else if(password==714){
        respuesta.innerHTML=' Password 2 correcto '
    }
    else{
        respuesta.innerHTML='Password incorrecto'
    }

}