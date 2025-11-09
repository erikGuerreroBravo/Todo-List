import  html from './app.html?raw';
import todoStore from '../store/todo.store.js';
import { renderTodos } from './use-cases/render-todos.js';
import { Filters } from '../store/todo.store.js';

const ElementIDs= {
    ClearCompleted:'.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',
}
/**
 * 
 * @param {String} elementId 
 */
export const App =( elementId ) => {

const displayTodos = ()=>{
    const todos = todoStore.getTodos( todoStore.getCurrentFilter());
    console.log({todos});
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
const todoList = document.querySelector(ElementIDs.TodoList);
///cargamos la referencia del boton eliminar completados
const clearCompletedButton = document.querySelector(ElementIDs.ClearCompleted);
const filtersUL = document.querySelectorAll(ElementIDs.TodoFilters);


filtersUL.forEach( element => {

    element.addEventListener('click', ( element )=>{
      //elimanos la palabra selected de todos los filtros
      filtersUL.forEach( el => el.classList.remove('selected'));
      element.target.classList.add('selected');
        switch( element.target.text ){
            case 'Todos':
                todoStore.setFilter(Filters.All);
                break;
            case 'Pendientes':
                todoStore.setFilter(Filters.Pending);
                
                break;
            case 'Completados':
                todoStore.setFilter(Filters.Completed);
                
                break;
        }
        displayTodos();
       
    });

});

clearCompletedButton.addEventListener('click', ()=>{
    todoStore.deleteCompleted();
    displayTodos();
});

newDescriptionInput.addEventListener('keyup', ( event )=>{
    if(event.keyCode !== 13) return;
    if(event.target.value.trim().length ==0) return;
    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';
   
});

/** se agrega el evento al componente todoList */
todoList.addEventListener('click', ( event )=>{
    const element = event.target.closest('[ data-id]');
    //console.log(element.getAttribute('data-id'));
    todoStore.toggleTodo( element.getAttribute('data-id') );
    displayTodos();
});

todoList.addEventListener('click', ( event )=>{
    const isDestroyElement = event.target.className==='destroy';
    const element= event.target.closest('[ data-id]');
     if(!element || !isDestroyElement) return;
    todoStore.deleteTodo( element.getAttribute('data-id') );
    displayTodos();
});

}