// Random gaming warmup generator.
let message1 = ['Movement','Aim','Game Sense'];
let message2 = ['Positioning','Utility Practice','Teamwork']
let message3 = ['10 Minutes','15 Minutes','20 Minutes','30 Minutes','45 Minutes','1 Hour'];
// The code below returns a random value of the array put into the parameter.
const randomValue = (list) => {
    return list[Math.floor(Math.random() * list.length)];
};

console.log(`You will practice ${randomValue(message1)} for ${randomValue(message3)} and ${randomValue(message2)} for ${randomValue(message3)}`);