export class User{

    //Made the fields a property of this class; firstName and lastName are optional so that the model can be reused for 
    //login and signup.
    constructor(
        public email : string, 
        public password: string,
        public firstName? : string, 
        public lastName? : string){
        
    }

}