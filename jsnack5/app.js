const dispari = [];

let find = false;

for (i = 0; i < 8; i++){

    user = parseInt(prompt('Inserisci 6 volte un numero diverso'));

    if (user %2 === 0){

    } else if (find = true){
        dispari.push(user);
    }
    
}

let answer = document.querySelector('.view');
answer.innerHTML = `I numeri dispari sono: ${dispari}.`;