let pantalla = document.querySelector('#pantalla');

function getData(ref) {
    let value = ref.value;
    pantalla.value +=value;
    
}

function borrar() {
    pantalla.value='';
    
}

function resultado() {
    try{
        pantalla.value = eval(pantalla.value);

    }catch(error){
        pantalla.value = 'Error';
        setTimeout(() => {
            borrar()
        },500);

    }
    
}