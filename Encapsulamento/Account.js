class Account {
    #password;
    #balance = 50;
    constructor( user ) {
        this.email = user.email;
        this.#password = user.password;
    
    };

    getBalance( email, password) {
        if( this.#authenticate( email, password ) ) {
            return console.log(`Saldo da conta: ${this.#balance}`);
        }
        else {
            return console.log('Dados invalidos')
        }
    };


    #authenticate( email, password ){
        return this.email === email && this.#password === password
    }
};

const user =  {
    email: 'isaac@email.com',
    password: '123456'
};

const myAccount = new Account( user );

console.log(myAccount);
console.log(myAccount.getBalance( 'isaac@email.com', '123456' ));