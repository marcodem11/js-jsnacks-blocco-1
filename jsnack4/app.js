
let guests = [
    'marco',
    'giovanni',
    'giorgia',
    'italo'
]
console.log(guests);

let guest = prompt('Salve, nome prego');
console.log(guest);

let find = false;
console.log(find);


for (let i = 0; i < guests.length; i++){

    if(guest === guests[i]){
        find = true;
    }
}


if(find === true){
    alert('Sei tra gli invitati! Benvenuto');
}

if(find = false){
    alert('Non puoi entrare,il nome non compare sulla lista')
}