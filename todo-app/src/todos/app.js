import  html from './app.html?raw';
import todoStore from '../store/todo.store.js';
import { renderTodos } from './use-cases/render-todos.js';


const ElementIDs= {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
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

//cargamos funcion de input
const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);

newDescriptionInput.addEventListener('keyup', ( event )=>{
    if(event.keyCode !== 13) return;
    if(event.target.value.trim().length ==0) return;
    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';
   
});

}