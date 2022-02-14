let numbers = [];


while (numbers.length <=4){
    let userNumber = parseInt ( prompt ('Inserisci un numero 5 volte'));
  
    if (userNumber !== isNaN);
    numbers.push(userNumber);

    let answer = document.querySelector('.numbers');
    answer.innerHTML = `Hai inserito: ${numbers}.`;
}

let total = 0;
for(i = 0; i < 5; i++){
    total += numbers[i];
}

let totalOne = document.querySelector('.numbers');
totalOne.innerHTML = `La somma è ${total}.`;