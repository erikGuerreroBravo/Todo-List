import  html from './app.html?raw';
/**
 * 
 * @param {String} elementId 
 */
export const App =( elementId ) => {

//cuando se llame la funcion app( ) se llama esta funcion anonima autoejecutable
(()=> {
    const app = document.createElement('div');
    app.innerHTML= html;
    document.querySelector(elementId).append(app);

})();

}