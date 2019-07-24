            // variable types
// var, 
//let, const // these 2 have BLOCK_LEVEL SCOPE brought in ES6

//let  can be reassigned/changed
//const CANNOT be reassigned/changed 

/* data types 
primitive types = directly assigned memory
string, numbers, boolean, null, undefined
*/

/*
const name = 'john';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // this will be set as undefined as default as it hasnt been given a value
*/

            /* strings
//concatenation
console.log('my name is '  + name + ' and I am ' + age)
//template string/literals from ES6
// uses back ticks `
console.log(`My name is ${name} and i am ${age}`);
const hello = `My name is ${name} and i am ${age}`
console.log(hello);

const s = 'tag 1, tag2, tag3';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(', '));
*/

            // Arrays - always 0 index based
 /*
 const numbers = new Array(1,2,3,4,5);
 console.log(numbers);
 const fruit = new Array('apples','oranges','bananas');
 console.log(fruit[1]);
 fruit[3] = 'grapes';
 console.log(fruit);

 fruit.push('mangoes'); // adds to the end of tha array
 console.log(fruit);
 fruit.unshift('pineapple'); // adds to the start of tha array
 console.log(fruit);
 fruit.pop() // removes tha last item
 console.log(fruit);
 
 console.log(fruit.indexOf('apples')); // gets ths index of a specific value in the array
 */

            // object literals

const person = {
firstName: 'john',
lastName: 'Doe',
age:30,
hobbies:['music', 'dancing', 'movies'],
address:{
        street:'50 main street',
        city: 'Boston',
        state:'MA'
    }
}

//console.log(person.address.city);

// destructuring -- making OBJECT KEY into variables - is part of ES6
const {firstname, lastName, address:{city}} = person;
//console.log(city);
person.email = 'bob@bob.com'; // add a new key/value into the object

const todos = [
    {
        id:1,
        text:'take out trash',
        isCompleted: true
    }
    ,
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentist App',
        isCompleted: false
    }
]

//console.log(todos[1].text);

//turn into json
//const todoJSON = JSON.stringify(todos)
//console.log(todoJSON);


            // for loop

for(let i = 0 ; i < 10; i++){
    //console.log(i);
}

            // while loop
let i = 0 
while(i< 10){
    //console.log(i);
    i++;
}

            // array looping
for(let i = 0 ; i < todos.length; i++){
    //console.log(`For Loop ${todos[i].text}`);
}

            // an example of a 'for of' loop
for(let todo of todos){
        //console.log(todo.text)
    }

            // High order array methods - best way to do any array itteration eg  foreach, map, filter

todos.forEach(function(todo){
    //console.log(todo)
});

const todoText = todos.map(function(todo){
    return todo.text;
});
//console.log(todoText);

const todoFiltered = todos.filter(function(todo){
    return todo.isCompleted === true;
});
//console.log(todoFiltered);

// chained functions
const todoChained = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
//console.log(todoChained);


                // conditionals                
const x = '20';

if(x === 10)
{
    console.log('x is 10');
} else if(x > 10)
{
    //console.log('x is > 10');
}
else
{
    //console.log('x is < 10');
}

                //ternary operator
const y = 15;

const color = y > 10 ? 'red': 'blue';

switch(color)
{
    case 'red':
        //console.log('is red')
        break;
        case 'blue':
        //console.log('is blue')
        break;
        default:
        //console.log('dont know')
        break;
}

                // functions
function addNums(num1 = 1 , num2 = 1 ) // is using default values if none are passed into it
{
    return num1 + num2 ;
}                
//console.log(addNums(5,5));

                //Arrow Functions versions of above function     
const addNums2 = (num1 = 1 , num2 = 1 )  => num1 + num2; // if returning you dont need the {}
//console.log(addNums2(5,6));

const addNums3 = num1 => num1 + 5 ; // if only 1 value passed in you dont even need the ()           
//console.log(addNums3(5));

                //OOP
// constructor function  
/*              
function Person (firstName, lastName, DOB){
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOB = new Date(DOB);
    // this.getBirthYear = function (){
    //    return this.DOB.getFullYear();
    // }
    // this.getFullName = function (){

    //     return `firstname = ${this.firstName}, lastName = ${this.lastName}`;
    // }

}  
             // prototypes
Person.prototype.getBirthYear = function (){
    return this.DOB.getFullYear();
}

Person.prototype.getFullName = function (){

    return `firstname = ${this.firstName}, lastName = ${this.lastName}`;
}
*/
            // Class version of the Person Object above - included in ES6
/*
class Person {
    constructor (firstName, lastName, DOB){
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = new Date(DOB);
    }
        getBirthYear(){
            return this.DOB.getFullYear();
        }

        getFullName(){
            return `firstname = ${this.firstName}, lastName = ${this.lastName}`;
        }
    
}


//instantiate the object
const person1 = new Person('bob','score', '4-5-72');
const person2 = new Person('Jodie','score', '5-28-75');
//console.log(person2.DOB);
console.log(person2.getFullName());

*/

   

   

