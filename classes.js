export default class Yourartoflove {

    constructor(data) {
        Object.assign(this, data)
        
    }
    rollDice() {
        const { first, second, third, fourth, fifth, sixth } = this
        const randoNumber = Math.floor(Math.random() * 6 + 1)
        let number = randoNumber
        console.log(number)
        switch (number) {
            case 1:
                return ` ${first} 
                `
                break;
            case 2:
                return ` ${second} `
                break;
            case 3:
                return ` ${third}`
                break;
            case 4:
                return ` ${fourth}`
                break;
            case 5:
                return ` ${fifth}`
                break;
            case 6:
                return ` ${sixth}`
                break;
            default:
                console.log(randoNumber)
        }


    }
}

