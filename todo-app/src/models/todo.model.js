import {v4 as uuid } from 'uuid';

export class Todo {

    /**
     * 
     * @param {String} description 
     */
    constructor( description ) {
        
        this.id = uuid();//genera un id unico
        this.description = description;
        this.done = false;
        this.createdAt = new Date();

    }
}