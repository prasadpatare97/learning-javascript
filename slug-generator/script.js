const inputBox=document.getElementById("inputField");
const submitBtn=document.getElementById("submitBtn");
const outputText=document.getElementById("result");

submitBtn.addEventListener("click",()=>{
    let text=(String(inputBox.value)).trim();
    let lowerCaseText=normalizeCases(text);
    let cleanedText=removeJunk(lowerCaseText);
    let normalizedSpacesString=normalizeSpaces(cleanedText);
    let finalText=dashJoin(normalizedSpacesString.trim());
    outputText.textContent=finalText;
  

})

// inputBox.addEventListener("input",()=>{
//     let text=(String(inputBox.value)).trim();
//     let lowerCaseText=normalizeCases(text);
//     let cleanedText=removeJunk(lowerCaseText);
//     let normalizedSpacesString=normalizeSpaces(cleanedText);
//     let finalText=dashJoin(normalizedSpacesString.trim());
//     outputText.textContent=finalText;
// })

function normalizeCases(text){
    let arrayOfChars=text.split("");
    for (let i=0; i<arrayOfChars.length; i++){
        if(/[a-zA-Z]/.test(arrayOfChars[i])){
            arrayOfChars[i]=arrayOfChars[i].toLowerCase();
        }
    }
    let normalizedString=arrayOfChars.join("");
    return normalizedString;
}

function removeJunk(text){
    let arrayOfChars=text.split("");
    let cleanedArrayOfChars=arrayOfChars.filter(char=>/[a-z\s0-9_-]/.test(char));
    let cleanedText=cleanedArrayOfChars.join("");
    return cleanedText;
}

function normalizeSpaces(text){
    let arrayOfChars=text.split("");
    let wasLastCharASpace=false;
    for (let i=0; i<arrayOfChars.length; i++){
        if (/[_-\s]/.test(arrayOfChars[i])){
            if(wasLastCharASpace){
                arrayOfChars.splice(i,1);
                i-=1;
            }else{
                arrayOfChars[i]=" ";
                wasLastCharASpace=true;
            }
        }else{
            wasLastCharASpace=false;
        }
    }
    let normalizedString=arrayOfChars.join("");
    return normalizedString;

}

function dashJoin(text){
    let dashText=text.replace(/ /g, "-");
    return dashText;
}