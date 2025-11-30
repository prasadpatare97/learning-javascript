//Practice Snippets
//1. Add two numbers
const a=9;
const b=10;
console.log(a+b);

//2. Check if someone is elibile to vote
// age of voting in India is 18

class Person{
    constructor(fullName, age, dob) {
        this.fullName = fullName;
        this.age = age;
        this.dob = new Date(dob);
    }
    isEligibleToVote() {
        const today = new Date();
        let age= today.getFullYear() - this.dob.getFullYear();
        const monthDiff = today.getMonth() - this.dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.dob.getDate())) {
            age--;
        }
        
        if (age >= 18){
            console.log(`${this.fullName} is eligible to vote.`);
            return true;
        }
        else{
        console.log(`${this.fullName} is not eligible to vote.`);
        return false;
    }       
 }

}

Person1 = new Person("John Doe", 20, "2003-05-15");
Person1.isEligibleToVote();

//3. Print numbers from 1 to 20 using a loop

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//4. Write a function that returns the square of a number

function square(inputNumber) {
    return inputNumber * inputNumber;
}
console.log(`The square of 5 is ${square(5)}`);

/*
Generate random secret number (1–10)
Take a guess (hardcode a number or prompt)
Compare guess with secret
Print "Correct!" or "Wrong!"
*/

const secretNumber= Math.floor(Math.random()*10) +1;
const guess= 4;
if (secretNumber===guess){
    console.log("Correct!");
} else {
    console.log("Wrong!");
}
