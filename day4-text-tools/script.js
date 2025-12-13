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
    let chars=0;
    let string1=textArea.value;
    chars=string1.length;
    let stringArr1=string1.split("");
    let stringArr2=stringArr1.filter(char1=>char1!=" ");
    let chars2=stringArr2.length;
    charsCount.textContent=`characters: ${chars}`;
    charsWoSpaces.textContent=`characters (no spaces): ${chars2}`;
    // let string2=string1.replace(/\s+/g, " ");
    // let stringArr3=string2.split(" ");
    // let stringArr4=stringArr3.filter(element=>!((element=="")||(element==" ")||(element==".")||(element==",")||(element=="!")||(element=="-")||(element=="?")||(element=="/")));
    // let words=stringArr4.length;
    let words2=string1.trim().length === 0 ? 0 : string1.trim().split(/\s+/).length;
    wordCount.textContent=`Words: ${words2}`;
    let sentences= countSentences(string1);
    sentCount.textContent=`Sentences: ${sentences}`;

})

upperCaseBtn.addEventListener("click",()=>{
    let string1=textArea.value;
    let arrayOfChar=string1.split("");
    let resultArray=Array(arrayOfChar.length);
    for(let i=0; i<arrayOfChar.length; i++){
        if(/[a-zA-Z]/.test(arrayOfChar[i])){
            resultArray[i]=arrayOfChar[i].toUpperCase();
        }else{
            resultArray[i]=arrayOfChar[i];
        }
    }
    let stringResult=resultArray.join("");
    resultant.textContent=stringResult;
    
    
})

lowerCaseBtn.addEventListener("click",()=>{
    let string1=textArea.value;
    let arrayOfChar=string1.split("");
    let resultArray=Array(arrayOfChar.length);
    for(let i=0; i<arrayOfChar.length; i++){
        if(/[a-zA-Z]/.test(arrayOfChar[i])){
            resultArray[i]=arrayOfChar[i].toLowerCase();
        }else{
            resultArray[i]=arrayOfChar[i];
        }
    }
    let stringResult=resultArray.join("");
    resultant.textContent=stringResult;
    
    
})
//sentence counter
sentenceCaseBtn.addEventListener("click",()=>{
    let string1=textArea.value;
    let arrayOfChar=string1.split("");
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
    let string1=textArea.value;
    let arrayOfChar=string1.split("");
    let resultArray=Array(arrayOfChar.length);
    let charFlag=false;
    for(let i=0; i<arrayOfChar.length; i++){
        if((/[a-zA-Z]/.test(arrayOfChar[i]))&&(!charFlag)){
            resultArray[i]=arrayOfChar[i].toUpperCase();
            charFlag=true;
        }else{
            resultArray[i]=arrayOfChar[i];
            if(/[?.!\s]/.test(resultArray[i])){
                charFlag=false;
            }
        }
    }
    let stringResult=resultArray.join("");
    resultant.textContent=stringResult;
    
    
})

toggleCaseBtn.addEventListener("click",()=>{
    let string1=textArea.value;
    let arrayOfChar=string1.split("");
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
    let string1=textArea.value;
    let arrayOfChar=string1.split("");
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
