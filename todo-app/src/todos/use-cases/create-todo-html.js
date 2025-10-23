import { Todo } from '../../models/todo.model.js';

/**
 * 
 * @param {Todo} todo : recibe una clase del tipo todo
 */
export const createHtml = (todo) => {

    if(!todo) throw new Error('Todo is required');
    // desestructuramos el objeto todo
    //const { done,description,id} = todo;
    
    const html= `
                <div class="view">
                    <input class="toggle" type="checkbox" checked ${todo.done ? 'checked' : ' ' }> 
                    <label>Probar JavaScript</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Crear Elemento">
            `;

    
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', todo.id);

    if( todo.done ) {
        liElement.classList.add('completed');
    }
    else{

    }
    return liElement;
}