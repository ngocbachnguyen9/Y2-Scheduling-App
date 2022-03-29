class Staff{
    #ID;
    #firstName;
    #lastName;
    #password;
    constructor(id,fName,lName,pword){
        this.#ID = id;
        this.#firstName = fName;
        this.#lastName = lName;
        this.#password = pword;
    }

    getID(){
        return this.#ID;
    }

    getFullName(){
        return this.#firstName + " " + this.#lastName;
    }

    getPassword(){
        return this.#password;
    }
    
}

export default Staff;