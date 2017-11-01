export class Transaction{

    // type: 0 --> incoming; 1 --> outgoing
    constructor(
        public budgetId : number,
        public type : boolean, 
        public category : string,
        public payee : string,
        public date : Date,
        public amount : number
    ){

    }
}