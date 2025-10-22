import {Todo} from '../../models/todo.model.js';
import { createHtml } from './create-todo-html.js';

/**
 * 
 * @param {String} elementoId del componete donde se van a renderizar los todos html 
 * @param {Todo} todos arreglo de todos a renderizar 
 */
export const renderTodos = (elementoId, todos =[]) =>{


    const element = document.querySelector(elementoId);
    todos.forEach( todo => {
       element.append( createHtml( todo ));

    });


    console.log(" Test de Renderizado"+ elementoId,todos);
}