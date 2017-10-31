export class Budget{

    constructor(public name : string , public date : string, public moneyIn?, public moneyOut?){

    }

    calculateSavings(){
        let diff = this.moneyIn - this.moneyOut;
        return diff;
    }
}