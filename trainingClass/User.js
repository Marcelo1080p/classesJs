class User  {
    constructor( fullName, email, password ) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }

    login( email, password) {
        if( this.email === email && this.password === password) {
            console.log("Login realizado com sucesso!");
        } else {
            console.log("Erro ao tentar logar!");
        }
    }
}

const marcelo = new User("marcelo", "juniooor.2015@gmail.com","123");

console.log(marcelo.login("celinho@gmail.com", "hahaha"))