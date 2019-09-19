// alert('hello world')
const dog = {
    name: 'Howl',
    color: 'Smoky',
    weight: 25
};

if(dog.name === 'Howl'){
    console.log('Hey there, ' + dog.name + '!');
} else {
    console.log('No dog by that name');
}

console.log(dog.name);
// 

function findDog(obj, name){
    if(obj.name === name){
        console.log('you found, ' + obj.name + ' and their color is ' + obj.color + '.');
    } else {
        console.log('you lost your dog, ' + name + '.');
    }
}

console.log(findDog(dog, 'Howl'));
dog.name = 'Oliver';
console.log(findDog(dog, 'Oliver'));
console.log(findDog(dog, 'Steve'));

for(let i = 1; i <= 10; i++){
    console.log(i);
}

function showAlert(){
    alert('you clicked a thing');
}

// function logHello(){
//     console.log('Hello');
// }

const logHello = () => {
    console.log('Hello');
};


