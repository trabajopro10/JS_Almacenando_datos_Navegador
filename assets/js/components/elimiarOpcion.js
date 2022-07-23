
// Importa la variable classCheck que guarda si la tarea si se ha completado o  no 
// para permitir borrar o no la opción de la lista de cursos 
import { classCheck } from './checkcomplete.js';

// Se crea el elemento i que muestra el ícono del sexto de basura y es 
// llamada en la función principal  
const checkEliminar = () => {
    const consi = document.createElement("i");
    // Se agregan todas las clases que permiten ver el bote de basura 
    consi.classList.add('fas','fa-trash-alt','trashIcon','icon');
    /*Para trabajar con el bote de basura, se captura el evento click*/
    consi.addEventListener("click", eliminarTask);
    return consi;
}

// Que debe hace para eliminar el elemento de la lista de cursos 
const eliminarTask = (event) =>{
    /* Vemos el elemento padre de eliminarTask */
    //console.log(event.target.parentElement.childNodes.NodeList);

    // Ahora necesitamos eliminar la opción 
    const constParen = event.target.parentElement;
    // Estamos elminando el li que lo contiene 
    if ( classCheck ){
    //    console.log("Se puede borrar la opción");
        constParen.remove();
    }else alert('La tarea está ejecutada, no se puede eliminar ... ');
};
// Exportar el módulo checkEliminar 
export default checkEliminar;
