const textArea=document.getElementById("textArea");
const charsCount=document.getElementById("chars");
const charsWoSpaces=document.getElementById("charsWoSpaces");
textArea.addEventListener("input",()=>{
    let chars=0;
    let string1=textArea.value;
    chars=string1.length;
    let stringArr1=string1.split("");
    let stringArr2=stringArr1.filter(char1=>char1!=" ");
    let chars2=stringArr2.length;
    charsCount.textContent=`characters: ${chars}`;
    charsWoSpaces.textContent=`characters (no spaces): ${chars2}`;
})