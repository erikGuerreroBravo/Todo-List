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

export default{
   initStore,
}