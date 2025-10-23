import {Todo} from '../../models/todo.model.js';
import { createHtml } from './create-todo-html.js';

/**
 * 
 * @param {String} elementoId del componete donde se van a renderizar los todos html 
 * @param {Todo} todos arreglo de todos a renderizar 
 */
export const renderTodos = (elementoId, todos =[]) =>{
  
    if(!element)
        element = document.querySelector(elementoId);
    if(!elementoId) throw new Error(`Elemento ${ elementoId} No se encontro`);

    const element = document.querySelector(elementoId);
    todos.forEach( todo => {
       element.append( createHtml( todo ));

    });
   
}