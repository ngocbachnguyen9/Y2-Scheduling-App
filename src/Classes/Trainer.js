class Trainer{
    #email;
    #firstName;
    #lastName;
    #password;
    /*Don't forget about reg */
    constructor(email,fName,lName,password,reg){
        this.#email = email;
        this.#firstName = fName;
        this.#lastName = lName;
        this.#password = password;
    }

    getEmail(){
        return this.#email;
    }

    getFullName(){
        return this.#firstName + " " + this.#lastName;
    }

    getPassword(){
        return this.#password;
    }

}

export default Trainer;