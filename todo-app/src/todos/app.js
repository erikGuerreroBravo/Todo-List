import  html from './app.html?raw';
import todoStore from '../store/todo.store.js';
import { renderTodos } from './use-cases/render-todos.js';


const ElementIDs= {
    TodoList: '.todo-list',
    
}
/**
 * 
 * @param {String} elementId 
 */
export const App =( elementId ) => {

const displayTodos = ()=>{
    const todos = todoStore.getTodos( todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
}

//cuando se llame la funcion app( ) se llama esta funcion anonima autoejecutable
(()=> {
    const app = document.createElement('div');
    app.innerHTML= html;
    document.querySelector(elementId).append(app);
    displayTodos();
})();

}