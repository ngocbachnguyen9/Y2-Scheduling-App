import Staff from "./Staff";
import Trainer from "./Trainer";

class Registry{
    #allStaff;
    #allCourses;
    #allTrainers;
    constructor(){
        this.#allStaff = [new Staff("1","Alex","Bert","ABC"), new Staff("2","Callum","Davidson","DEF")]
        this.#allTrainers = [new Trainer("a@FDM.org","David","King","A")]
        this.#allCourses = []
    }

    getAllStaff(){
        return this.#allStaff;
    }

    getAllCourses(){
        return this.#allCourses;
    }

    getAllTrainers(){
        return this.#allTrainers;
    }

    addCourse(course){
        this.#allCourses.push(course);
    }
}

export default Registry;