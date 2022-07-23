// completada o no completada
var classCheck = true;
// Se crea el elemento i en una función que tiene un ícono de check, 
// verficación, y es llamada en la función principal
const checkComplete = () => {
    const consi = document.createElement("i");
    consi.classList.add('far','fa-check-square','icon');
    // Para validar completTask se captura el evento click
    consi.addEventListener('click',completTask);
    return consi;
}

// validar ícono de tarea completada checkComplete 
// utilizamos una función arrow 
const completTask = (event) => {
    console.log("Complete Task ");
    const iconoelement = event.target;
    iconoelement.classList.toggle('fas');
    iconoelement.classList.toggle('completeIcon');
    iconoelement.classList.toggle('far');
    // Se verifica si la clase de chequeo de tarea completada 
    // está o no está si esta completada la opción no se podra 
    // eliminar, se debe dejar como no completada para poder ser borrada 
    classCheck = iconoelement.classList.contains('far');
};

// se exporta el módulo 
export default checkComplete;
// Se exporta la variable global que dice si la tarea se ha realizado o no
var classCheck; export { classCheck };