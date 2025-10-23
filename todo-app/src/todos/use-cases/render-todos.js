import {Todo} from '../../models/todo.model.js';
import { createHtml } from './create-todo-html.js';

let element;
/**
 * 
 * @param {String} elementoId del componete donde se van a renderizar los todos html 
 * @param {Todo} todos arreglo de todos a renderizar 
 */
export const renderTodos = (elementoId, todos =[]) =>{
  
    
    if(!element)
        element = document.querySelector(elementoId);
    if(!element) throw new Error(`Elemento ${ elementoId} No se encontro`);

    element.innerHTML = '';// limpiamos el html antes de renderizar
    todos.forEach( todo => {
       element.append( createHtml( todo ));

    });
   
}