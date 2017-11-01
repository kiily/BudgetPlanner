export class Budget{

    constructor(
        public name : string , 
        public date : Date, 
        public moneyIn?, 
        public moneyOut?
    ){}

    calculateSavings(){
        let diff = this.moneyIn - this.moneyOut;
        return diff;
    }
}