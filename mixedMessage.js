function chooseRandomIndex(range){
    return Math.floor(Math.random()*range.length)
}

let descriptions={
traits:['Couragous','Narcissist','Beautiful','Saviour','Kind','Genius','Loving','Aloof'],
destinies:['Perfection','Sorrow','Sadness','Happines','Revenge','Boredom','Obssesion','Joy'],
goals:['Prosperity','Happy Family','Calmness','Inner Peace','Fulfilment','Revenge','Giving Back']
}
let trait=descriptions.traits[chooseRandomIndex(descriptions.traits)]
let destiny=descriptions.destinies[chooseRandomIndex(descriptions.destinies)]
let goal=descriptions.goals[chooseRandomIndex(descriptions.goals)]
const ComputerTeller = (name)=>{
    console.log(`Hello ${name} the computer Has described you as ${trait} human, and had visions of your life to be full of ${destiny}, 
and has guessed your final life goal to be ${goal}! Was it Correct?`)
}
ComputerTeller('Mhmad')