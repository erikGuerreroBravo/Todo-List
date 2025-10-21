import { Todo } from "../models/todo.model";

const Filters ={
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state ={
    todos: [
        new Todo('Aprender JavaScript'),
        new Todo('Aprender Vue.js'),
        new Todo('Aprender Vite'),
        new Todo('Aprender Angular'),
        new Todo('Aprender React'),
        new Todo('Aprender Svelte'),
    ],
    filter: Filters.All,
   
}

const initStore = () =>{
    console.log(state);
    console.log('Init Store ');
}

/**
 * 
 * @param {String} description  de lo que se va a crear el todo
 */
const addTodo = ( description ) =>{
    if(!description)throw new Error('Description Required.');
    state.todos.push( new Todo(description) );
}

const loadStorage = ( ) =>{
    throw new Error('Function not implemented.');
}
/**
 * 
 * @param {*String} todoId  el identificador del todo que se va a eliminar
 */
const deleteTodo = ( todoId ) =>{
    state.todos = state.todos.filter( todo =>todo.id !== todoId ); 
}
/**
 * 
 * @param {String} todoId : es el identificador que se recibe para cambiar el estado 
 */
const toggleTodo = ( todoId ) =>{
    state.todos= state.todos.map(todo => {
       if(todo.id === todoId){
            todo.done = !todo.done;
       
        }
        return todo;
    });
}

const deleteCompleted = ( ) =>{
    state.todos= state.todos.filter( todo => todo.done );
}

/**
 * 
 * @param {Filters } newFilter  el nuevo filtro que se va a aplicar
 */
const setFilter = (newFilter = Filters.All) =>{
    state.todos = newFilter;
}

const getCurrentFilter = () =>{
    return state.filter;
}

/**
 * 
 * @param {String} filter el filtro que se va a aplicar, puede ser: all, completed, pending 
 */
const getTodos = (filter = Filters.All) =>{
    switch(filter){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done );
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${ filter } is not valid`);
    }
}


export default{
   addTodo,
   initStore,
   deleteTodo,
   getCurrentFilter,
   deleteCompleted,
   loadStorage,
   setFilter,
   toggleTodo,
   getTodos,
}