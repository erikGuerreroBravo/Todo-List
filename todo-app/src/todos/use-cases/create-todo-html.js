import { Todo } from '../../models/todo.model.js';

/**
 * 
 * @param {Todo} todo : recibe una clase del tipo todo
 */
export const createHtml = (todo) => {

    if(!todo) throw new Error('Todo is required');

    const html= `<h1>${ todo.description} </h1>`;
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    return liElement;
}