let personName :string = '';

personName = prompt('What is your Name?') || '';

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, would you like to learn some python today?`)
}
else{
    alert(`you have to fill your name !`)
}