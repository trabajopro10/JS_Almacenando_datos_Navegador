//( () => {
// Importamos los módulos 
import checkComplete from "./components/checkcomplete.js";
import checkEliminar from "./components/elimiarOpcion.js";

// Crear una constante con el valor del data-form-btn
const consbtn = document.querySelector("[data-form-btn]");

//Crear una función con el concepto de anónima 
 const createTask = (evento) => {
    evento.preventDefault();
    // Constante para el input 
    const consinput = document.querySelector("[data-form-input]");
    // Guardamos el valor del input para tenerlo en memoria 
    const consvalue = consinput.value
    console.log(consvalue);
    if (consvalue.length!=0){
    // Obtenemos la data del html que va a recibir los items nuevos 
    // de la lista que contiene <ul></ul>
    const conslist = document.querySelector("[data-list]");
    // Necesitamos tener una constante con el tipo de hijo que tienen 
    // los <ul> que son los <li>
    // Se crea un elemento li 
    const constask = document.createElement('li');
    constask.classList.add('card');
    // Limpiamos el campo input 
    consinput.value = "";
    // Crear el div el contenedor 
    const taskContent = document.createElement('div');
    // El div contiene el i checkComplete se coloca como parámetro del 
    // taskContent que es el div 
    taskContent.appendChild(checkComplete());
    // Creamos el span donde irá el texto en cada recuadro 
    const titleTask = document.createElement('span');
    // Colocamos la clase task al titleTask que es quien crea el span 
    titleTask.classList.add('task');
    // Se coloca en el innerText del span que está siendo creado por 
    // titleTask el valor del input 
    titleTask.innerText=consvalue;
    // ya tenemos el span que tiene el texto de la opción dentro de titleTask 
    // y debe ser agregado como un hijo del taskContent que es el div 
    taskContent.appendChild(titleTask);
    // Obtener el html que vamos a utilizar para agregar elementos a la lista de cursos 
   
    // Constask es el li y recibe en parámetro el tastkContent que es el div
    constask.appendChild(taskContent); 
    // Agregamos un elemento a la varibal conslist que viene siendo un hijo 
    // de la lista child()
    conslist.appendChild(constask);
    // Se grega al constask el bote de basura que nos facilita eliminar una 
    // opción de la lista 
    constask.appendChild(checkEliminar());
    
   // console.log(conscontent);
    }else alert("No hay datos para registrar");
 }

// Creamos un evento listener para acceder al click en el botón 
// Llamamos desde la captura del evento la función  createTask
consbtn.addEventListener('click', createTask);

//Immediately invoked function expression IIFE
// Estas funciones arrow que se declaran y se ejecutan automáticamente 

//})();


