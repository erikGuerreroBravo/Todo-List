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
    throw new Error('Function not implemented.');
}

const loadStorage = ( ) =>{
    throw new Error('Function not implemented.');
}

const deleteTodo = ( todoId ) =>{
    throw new Error('Function not implemented.');
}

const toggleTodo = ( todoId ) =>{
    throw new Error('Function not implemented.');
}

export default{
   initStore,
}