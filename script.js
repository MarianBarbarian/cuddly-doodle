

let snacks = ['chips', 'nuts', 'soda','candy'];

let prices = [1.00,0.99,1.99,2.00]

let taxes = [0.02,0.02,0.04,0.04]


// alert menu 
let menu='Menu: \n' ;
for(let i=0; i<snacks.length; i++){
    menu=menu+(i+1)+'. '+snacks[i]+'--> '+prices[i]+' --> tax: '+taxes[i]+'\n';
}

alert(menu);

let selection=prompt("Choose an item: ");
let number=prompt("Quantity: ");
let count,total,t;

switch(selection){
    case '1':
        count=0;
        t=pay();
        alert('You selected a: '+snacks[0] + '--> $'+prices[0] +'--> tax: $'+taxes[0] +'\n Total: ' + t);
        break;
    case '2':
        count=1;
        t=pay();
        alert('You selected a: '+snacks[1] + '--> $'+prices[1] +'--> tax: $'+taxes[1] +'\n Total: ' + t);
        break;
    case '3':
        count=2;
        t=pay();
        alert('You selected a: '+snacks[2] + '--> $'+prices[2] +'--> tax: $'+taxes[2] +'\n Total: ' + t);
        break;
    case '4':
        count=3;
        t=pay();
        alert('You selected a: '+snacks[3] + '--> $'+prices[3] +'--> tax: $'+taxes[3] +'\n Total: ' + t);
        break;
    default:
        alert('Please, select a valid option');
        break;
}

function pay(){    
    total=prices[count]*number+taxes[count];
    return total;
}
