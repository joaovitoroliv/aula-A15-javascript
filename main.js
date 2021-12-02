///////////////// Classes e Callback functions ///
// Porque usar classes? Para tarefas pequenas, variaveis globais funcionam bem. Mas para um website maior, é um bom método para organizar o código.
// Um Código bem trabalhado, é um código bem organizado.

// Como decidir quais classes e métodos que vou criar?
// - Uma estratégia geral: Component-based approach. Ou seja, cada, cada elemento html irá ter UM 'elemento container', pode conter referencias a componentes filhos.
// - Abordagem utilizada no React.js

// Container Element:
// - One pattern:
// <div id="present-container"></div>
// const element = document.querySelector('#present-container');
// Renderizo o presente
// const present = new Present(element);

// - Ou então, posso fazer:
// <div id="present-container"></div>
// const element = document.querySelector('#present-container');
// const present = new Present();
// Renderizo explicitamente com método renderTo 
// present.renderTo(element);

// Em Web temos total liberdade para organizar nosso código e por isso temos total controle do código. A consequência disso é um grande numero de decisoes que temos que tomar. Para isso, usamos os WEB FRAMEWORKS para nos ajudas a tomar essas decisões.

// Métodos e Atributos privados:
class ClassWithPrivateMethod{
    #privatemethod(){
        return 'hello world';
    }

    getPrivateMessage(){
        return this.#privatemethod();
    }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// expected output 'hello world'  

// Formas de declarar uma função:
function myFunction(params){

}

const myFunction = function (params){

};

const myFunction = (params) => {

};

// Chamar função
myFunction(params);

// Callbacks: Uma outra forma de se comunicar entre as classes.
// - Callback é uma função que é passada como parametro para outra função, geralmente em resposta a algo.