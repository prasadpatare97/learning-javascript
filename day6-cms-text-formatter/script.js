const inputBox= document.getElementById("inputText");
const outputBox= document.getElementById("outputText");
const cleanBtn= document.getElementById("cleanBtn");
const copyBtn= document.getElementById("copyBtn");
const clipConfirm=document.getElementById("clipConfirm");

cleanBtn.addEventListener("click", ()=>{

    let inputTextString=inputBox.value.trim() ;
    let normalizedTextString=normalizeSpaces(inputTextString);
    let quotedString=smartQuotes(normalizedTextString);
    let junkCleanedString=removeJunk(quotedString);
    let finalCleanResult=cleanerForCMS(junkCleanedString.trim());
    outputBox.value=finalCleanResult;
    clipConfirm.textContent="";

})

copyBtn.addEventListener("click", ()=>{
    copyToClipBoard();
})

function normalizeSpaces(text){
    let arrayOfChars=text.split("");
    let wasLastCharASpaceType=false;
    let wasLastCharANewLine=false;
    for(let i=0; i<arrayOfChars.length; i++){
        if(/\s/.test(arrayOfChars[i])){
            if(wasLastCharASpaceType){
                //either last char was a newline or it wasn't
                if(wasLastCharANewLine){
                    //if this char is also a newline then check if the last to last char was a newline
                    if(arrayOfChars[i]=="\n"){
                        if(i-2>=0 && arrayOfChars[i-2]=="\n"){
                            //so if we have two newlines before this, then remove this newline
                            arrayOfChars.splice(i,1);
                            i-=1;
                        }
                    }else{
                        //this char is a tab or a space, that too after a newline. so remove.
                        arrayOfChars.splice(i,1);
                        i-=1;
                    }
                }else{
                    //lastchar was either a tab or a space
                    if(arrayOfChars[i]=="\n"){
                        //then we move on, because the line is getting terminated, and the trailing spaces will be cut through trim() later
                        
                        wasLastCharANewLine=true;
                    }else{
                        //this char is a space or a tab. so we splice this one
                        arrayOfChars.splice(i,1);
                        i-=1;
                    }
                }

                //
            }else{
                //this means lastchar was not a space type, hence this char is a space type;
                //that means we must preserve this char. no splicing
                wasLastCharASpaceType=true;
                if(arrayOfChars[i]=="\n"){wasLastCharANewLine=true;}else{wasLastCharANewLine=false;}
            }

        }else{
            wasLastCharANewLine=false;
            wasLastCharASpaceType=false;
        }

    }

    //         if(arrayOfChars[i]=="\n"){
    //             if(i+1<arrayOfChars.length && arrayOfChars[i+1]=="\n"){
    //                 while(i+2<arrayOfChars.length && arrayOfChars[i+2]=="\n"){
    //                     arrayOfChars.splice(i+2,1);    
    //                 }
    //             }
    //             wasLastCharASpaceType=true;
    //         }else{
                
    //           if(wasLastCharASpaceType){
    //             arrayOfChars.splice(i,1);
    //             i-=1;
    //           }else{
    //             arrayOfChars[i]=" ";
    //             wasLastCharASpaceType=true;
    //           }
    //         }
    //     }else{
    //         wasLastCharASpaceType=false;
    //     }
    // }
    let resultantString=arrayOfChars.join("");
    return resultantString;
}

function smartQuotes(text){
    let arrayOfChars=text.split("");
    let singleQuoteToggle=false;
    let doubleQuoteToggle=false;
    for(let i=0; i<arrayOfChars.length; i++){
        if(arrayOfChars[i]=="'"){
            arrayOfChars[i]=singleQuoteHandle(singleQuoteToggle);
            singleQuoteToggle=!singleQuoteToggle;
        }else if(arrayOfChars[i]=='"'){
            arrayOfChars[i]=doubleQuoteHandle(doubleQuoteToggle);
            doubleQuoteToggle=!doubleQuoteToggle;
        }
    }
    let resultantString=arrayOfChars.join("");
    function singleQuoteHandle(toggle){
        if(toggle){
            return "’";
        }else{
            return "‘"
        }
    }
    function doubleQuoteHandle(toggle){
        if(!toggle){
            return "“";
        }else{
            return "”"
        }
    }
    return resultantString;
}

function removeJunk(text){
    let arrayOfChars=text.split("");

    for(let i=0; i<arrayOfChars.length; i++){
        if(!/^[a-z0-9‘’“”\s]$/i.test(arrayOfChars[i]))//it is a special character
        {
            
            let j=i+1;
            let theChar=arrayOfChars[i];
            let wasTheJunkRepetitive=false;
            while(j<arrayOfChars.length && arrayOfChars[j]==theChar){
                wasTheJunkRepetitive=true;
                arrayOfChars.splice(j,1);
                    
            }
            if(!/[.,!?;:]/.test(theChar)){
                if(wasTheJunkRepetitive){

                    if(theChar=="@"){
                        if(i==0 || i==arrayOfChars.length-1){
                            arrayOfChars.splice(i,1);
                            i-=1;
                        }else{
                            if((( /[\s]/.test(arrayOfChars[i-1]) ))||(( /[\s]/.test(arrayOfChars[i+1]) ))){
                                arrayOfChars.splice(i,1);
                                i-=1;
                            }
                        }
                    }else{
                        arrayOfChars.splice(i,1);
                        i-=1;
                    }
                }
            }

                
        }
    }
    let resultantString=arrayOfChars.join("");
    return resultantString;
            
}
        
function cleanerForCMS(text){
    let arrayOfLines= text.split("\n");
    for (let i=0; i<arrayOfLines.length; i++){
        arrayOfLines[i]=arrayOfLines[i].trim();
    }
    let resultantString=arrayOfLines.join("\n");
    return resultantString;
}    

function copyToClipBoard(){
    const output= outputBox.value;
    if (!output) return;

    navigator.clipboard.writeText(output)
        .then(() =>{
            clipConfirm.textContent="Copied!";
        })
        .catch(err=>{
            clipConfirm.textContent=("Copy Issue:", err);
        });

}