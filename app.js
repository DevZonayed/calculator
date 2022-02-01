/**
 * This function for get element form html document
 * @param {*} val 
 * @returns 
 */
function s(val){
    let element = document.querySelectorAll(val);
    if(element.length == 1){
        return element[0];
    }else{
        let node = [];
        element.forEach( (get) => {
            node.push(get);
        })
        return node;
    }
}

//--------------------------------------//

let display1 = s('.display .initial');
let display2 = s('.display .main');

let numbers = [];
let maindisplay = [];

function back(){
    numbers.pop();
    maindisplay.pop();
    display1.innerHTML = numbers.join('');
    display2.innerHTML = maindisplay.join('');
}
function btnval(getNumber){
    numbers.push(getNumber);
    maindisplay.push(getNumber);
    display1.innerHTML = numbers.join('');
    display2.innerHTML = maindisplay.join('');
    if( getNumber == '/' || getNumber == '+' || getNumber == '*' || getNumber == '-' ){
        maindisplay = [];
        display2.innerHTML = 0;
    }
}

function allclere(){
    numbers = [];
    maindisplay = [];
    display1.innerHTML = 0;
    display2.innerHTML = 0;
}

function equal(){
    let result = eval(numbers.join(''));
    numbers = [];
    maindisplay = [];
    display1.innerHTML = 'History has been Cleared';
    if(result){
        display2.innerHTML = result;
    }else{
        display2.innerHTML = '<small>Enter number fast</small>';
    }
}