const textArea=document.getElementById("textArea");
const charsCount=document.getElementById("chars");
const charsWoSpaces=document.getElementById("charsWoSpaces");
const wordCount=document.getElementById("wordCountResult");
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
})

//word counter 
