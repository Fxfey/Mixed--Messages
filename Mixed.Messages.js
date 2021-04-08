// Random gaming warmup generator.
let message1 = ['Movement','Aim','Game Sense'];
let message2 = ['Positioning','Utility Practice','Teamwork']
let minute = 0;
// The code below returns a random value of the array put into the parameter.
const randomValue = (list) => {
    return list[Math.floor(Math.random() * list.length)];
};
// Creates a random number to dsetermine how long to do that specific task for.
const randomNumber = (input) => {
    return [Math.floor(Math.random() * 60)]
};

console.log(`You will practice ${randomValue(message1)} for ${randomNumber(minute)} minutes and ${randomValue(message2)} for ${randomNumber(minute)} minutes`);