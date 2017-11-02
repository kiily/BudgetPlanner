export class Budget{

    constructor(      
        public name : string,  
        public date : Date, 
        public budgetId? : string,
        public userId? : string,        
        public moneyIn? : number, 
        public moneyOut? :number

    ){}

    calculateSavings(){
        let diff = this.moneyIn - this.moneyOut;
        return diff;
    }
}