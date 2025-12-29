const textArea=document.getElementById("textArea");
const charsCount=document.getElementById("chars");
const charsWoSpaces=document.getElementById("charsWoSpaces");
const wordCount=document.getElementById("wordCountResult");
const sentCount=document.getElementById("sentCountResult");
const upperCaseBtn=document.getElementById("Uppercase");
const lowerCaseBtn=document.getElementById("Lowercase");
const sentenceCaseBtn=document.getElementById("Sentencecase");
const titleCaseBtn=document.getElementById("Titlecase");
const toggleCaseBtn=document.getElementById("Togglecase");
const removeSpacesBtn=document.getElementById("Removespaces");
const clearTextBtn=document.getElementById("Cleartext");
const resultant=document.getElementById("resultant");

textArea.addEventListener("input",()=>{
    updateCounts(textArea.value);

})

upperCaseBtn.addEventListener("click",()=>{
    resultant.textContent=toUpperCaseSafe(textArea.value);    
})

lowerCaseBtn.addEventListener("click",()=>{
    resultant.textContent=toLowerCaseSafe(textArea.value);    
})

sentenceCaseBtn.addEventListener("click",()=>{
    let text=textArea.value;
    let arrayOfChar=text.split("");
    let resultArray=Array(arrayOfChar.length);
    let charFlag=false;
    for(let i=0; i<arrayOfChar.length; i++){
        if((/[a-zA-Z]/.test(arrayOfChar[i]))&&(!charFlag)){
            resultArray[i]=arrayOfChar[i].toUpperCase();
            charFlag=true;
        }else{
            resultArray[i]=arrayOfChar[i];
            if(/[?.!]/.test(resultArray[i])){
                charFlag=false;
            }
        }
    }
    let stringResult=resultArray.join("");
    resultant.textContent=stringResult;
    
    
})

titleCaseBtn.addEventListener("click",()=>{
    let text=textArea.value;
    let arrayOfChar=text.split("");
    let resultArray=Array(arrayOfChar.length);
    let charFlag=false;
    for(let i=0; i<arrayOfChar.length; i++){
        if (!charFlag && /[a-zA-Z]/.test(arrayOfChar[i])){// Capitalize only the first letter after whitespace while preserving formatting
            resultArray[i]=arrayOfChar[i].toUpperCase();
            charFlag=true;
        }else{
            resultArray[i]=arrayOfChar[i];
        }
        if(/\s/.test(arrayOfChar[i])) charFlag=false;
        // if((/[a-zA-Z]/.test(arrayOfChar[i]))&&(!charFlag)){
        //     resultArray[i]=arrayOfChar[i].toUpperCase();
        //     charFlag=true;
        // }else{
        //     resultArray[i]=arrayOfChar[i];
        //     if(/[?.!\s]/.test(resultArray[i])){
        //         charFlag=false;
        //     }
        // }
    }
    let stringResult=resultArray.join("");
    resultant.textContent=stringResult;
    
    
})

toggleCaseBtn.addEventListener("click",()=>{
    let text=textArea.value;
    let arrayOfChar=text.split("");
    let resultArray=Array(arrayOfChar.length);
    for(let i=0; i<arrayOfChar.length; i++){
        if(/[a-zA-Z]/.test(arrayOfChar[i])){
            if(/[a-z]/.test(arrayOfChar[i])){
                resultArray[i]=arrayOfChar[i].toUpperCase();
            }
            else{
                resultArray[i]=arrayOfChar[i].toLowerCase();
            }
        }else{
            resultArray[i]=arrayOfChar[i];
        }
    }
    let stringResult=resultArray.join("");
    resultant.textContent=stringResult;
    
    
})

removeSpacesBtn.addEventListener("click",()=>{
    removeExtraSpaces(textArea.value);
    
})

clearTextBtn.addEventListener("click",()=>{
    textArea.value="";
    charsCount.textContent="";
    charsWoSpaces.textContent="";
    wordCount.textContent="";
    sentCount.textContent="";    
    resultant.textContent="";
})

function countSentences(text){
    if (/[?.!]/.test(text)){
        let array1=text.split(/[!.?]+/);
        let sentences=array1.filter(sentence=>sentence.trim().length > 0);
        return sentences.length;
    }
    else{
        return 0;
    }

}
// Centralize count updates to avoid duplicated logic across events
function updateCounts(text){
    charsCountValue=text.length;
    let allCharsArray=text.split("");
    let nonSpaceCharsArray=allCharsArray.filter(char1=>char1!=" ");
    let nonSpaceCharsCount=nonSpaceCharsArray.length;
    charsCount.textContent=`characters: ${charsCountValue}`;
    charsWoSpaces.textContent=`characters (no spaces): ${nonSpaceCharsCount}`;
    //Split on whitespace to avoid counting multiple spaces as words
    let words=text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
    wordCount.textContent=`Words: ${words}`;
    let sentences= countSentences(text);
    sentCount.textContent=`Sentences: ${sentences}`;
    resultant.textContent="";
}
//Prevents crashes when input is empty or non-string
function toUpperCaseSafe(text){
    if(typeof text !=="string") return ""; 
    let arrayOfChar=text.split("");
    let resultArray=Array(arrayOfChar.length);
    for(let i=0; i<arrayOfChar.length; i++){
        if(/[a-zA-Z]/.test(arrayOfChar[i])){
            resultArray[i]=arrayOfChar[i].toUpperCase();
        }else{
            resultArray[i]=arrayOfChar[i];
        }
    }
    let stringResult=resultArray.join("");
    return stringResult;
}

//Prevents crashes when input is empty or non-string
function toLowerCaseSafe(text){
    if(typeof text !== "string") return "";
    let arrayOfChar=text.split("");
    let resultArray=Array(arrayOfChar.length);
    for(let i=0; i<arrayOfChar.length; i++){
        if(/[a-zA-Z]/.test(arrayOfChar[i])){
            resultArray[i]=arrayOfChar[i].toLowerCase();
        }else{
            resultArray[i]=arrayOfChar[i];
        }
    }
    let stringResult=resultArray.join("");
    return stringResult;
}

function removeExtraSpaces(text){
    let arrayOfChar=text.split("");
    let resultArray=Array(arrayOfChar.length);
    let spaceFlag=false;
    for(let i=0; i<arrayOfChar.length; i++){
        if(/[\s]/.test(arrayOfChar[i])){
            if(spaceFlag){
                arrayOfChar.splice(i,1);
                i-=1;
            }
            else{
                resultArray[i]=arrayOfChar[i];
            }
            spaceFlag=true;
          
        }else{
            spaceFlag=false;
            resultArray[i]=arrayOfChar[i];
        }
    }
    let stringResult=resultArray.join("");
    resultant.textContent=stringResult;
    
    
}