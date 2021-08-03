var operator
listener();

function displayOutput2(eventValue){
    console.log(eventValue)
}

function listener(){
    window.onclick = e =>{
        
        var selectedKey = e.target.innerText;
        if(e.target.tagName == "DIV"){
            if(e.target.id != "display-1" && e.target.id !="display-2"){
                displayUpdate(selectedKey);
            }
        }
        operatorCheck(selectedKey)

        if(selectedKey == '='){
            switch(operator){
                case '+':
                    Addition();
                    break;
                case '-':
                    Subtraction();
                    break;
                case 'x':
                    Multiplication();
                    break;
                case '/':
                    Division();
                    break;
                case '%':
                    Percentile();
                    break;
                case "Del":
                    ClearLastEntry();
                    break;
                case "Clear":
                    Clear();
            }
        }
    }
}

function operatorCheck(pressedKey){
    if(pressedKey == '+'){
        value = parseFloat(currentInput.innerText);
        operator ='+';
        previusInput.innerText = currentInput.innerText;
        currentInput.innerText = '0';
        console.log(value);
    }
    else if(pressedKey == '-'){
        value = parseFloat(currentInput.innerText);
        operator ='-';
        previusInput.innerText = currentInput.innerText;
        currentInput.innerText = '0';
        console.log(value);
    }
    else if(pressedKey == 'x'){
        value = parseFloat(currentInput.innerText);
        operator ='x';
        previusInput.innerText = currentInput.innerText;
        currentInput.innerText = '0';
        console.log(value);
    }
    else if(pressedKey == '/'){
        value = parseFloat(currentInput.innerText);
        operator ='/';
        previusInput.innerText = currentInput.innerText;
        currentInput.innerText = '0';
        console.log(value);
    }
    else if(pressedKey == '%'){
        value = parseFloat(currentInput.innerText);
        operator ='%';
        previusInput.innerText = currentInput.innerText;
        currentInput.innerText = '0';
        console.log(value);
    } 
    else if (pressedKey == "Clear") {
        previusInput.innerText = "0";
        currentInput.innerText = "0";
    }  
    else if(pressedKey == 'Del'){
        currentInput.innerText = currentInput.innerText.slice(0, -3);
        if (currentInput.innerText == "") {
            
            currentInput.innerText = "0";    
        }
    }
}

function Addition(){
    var value2 = parseFloat(currentInput.innerText);
        result = value+value2;

        currentInput.innerText = result;
        previusInput.innerText =  `${value} + ${value2} =` ;
}
function Subtraction(){
    var value2 = parseFloat(currentInput.innerText);
        result = value-value2;

        currentInput.innerText = result;
        previusInput.innerText =  `${value} - ${value2} =` ;
}
function Multiplication(){
    var value2 = parseFloat(currentInput.innerText);
        result = value*value2;

        currentInput.innerText = result;
        previusInput.innerText =  `${value} * ${value2} =` ;
}
function Division(){
    var value2 = parseFloat(currentInput.innerText);
        result = value/value2;

        currentInput.innerText = result;
        previusInput.innerText =  `${value} / ${value2} =` ;
}
function Percentile(){
    var value2 = parseFloat(currentInput.innerText);
        result = value*value2/100;

        currentInput.innerText = result;
        previusInput.innerText =  `${value} % ${value2} =` ;
}
function Clear(){
    var value = parseFloat(currentInput.innerText);
        result  = '0';

        currentInput.innertext = result;
        previusInput.innerText = '0';
}

function ClearLastEntry(){
    currentInput.innerText = currentInput.innerText.slice(0, -3);
            if (currentInput.innerText == "") {
                
                currentInput.innerText = "0";    
            }
}
function displayUpdate(pressedKey){

    if(currentInput.innerText == '0'){
        currentInput.innerText = '';
        
    
    }
    currentInput.innerText = currentInput.innerText + pressedKey;
}