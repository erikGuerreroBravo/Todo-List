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
    throw new Error('Function not implemented.');
}
/**
 * 
 * @param {String} todoId : es el identificador que se recibe para cambiar el estado 
 */
const toggleTodo = ( todoId ) =>{
    throw new Error('Function not implemented.');
}

const deleteCompleted = ( ) =>{
    throw new Error('Function not implemented.');
}

/**
 * 
 * @param {String } newFilter  el nuevo filtro que se va a aplicar
 */
const setFilter = (newFilter = Filters.All) =>{
    throw new Error('Function not implemented.');
}

const getCurrentFilter = () =>{
    throw new Error('Function not implemented.');
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