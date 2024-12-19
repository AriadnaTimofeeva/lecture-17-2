/* Задание 2:
Реализуйте метод bind() самостоятельно, который привязывает функцию к контексту.​
Пояснение: Метод bind() позволяет привязать функцию к определенному контексту.​
const person = { name: 'Alice' };​
function greet(greeting) {​
  console.log(`${greeting}, ${this.name}`);​
}​
const boundGreet = greet.myBind(person, 'Hello');​
boundGreet(); // Hello, Alice
*/


Function.prototype.myBind = function(context, ...args) {
    const func = this;

    return function(...innerArgs) {
        return func.apply(context, [...args, ...innerArgs]);
    };
};

const person = { name: 'Alice' };

function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}
const boundGreet = greet.myBind(person, 'Hello');
boundGreet(); 
