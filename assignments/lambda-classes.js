// CODE here for your Lambda Classes
// Person base-class

class Person{
    constructor(name, age, location, gender){
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

const anna = new Person("Anna", 21, "York", "F")

// Instructor class

class Instructor extends Person{
    constructor(name, age, location, gender, specialty, favLanguage, catchPhrase){
        super(name, age, location, gender);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning ${subject}`)
    }
    grade(student, subject){
        console.log(`${student} recieves a perfect score on ${subject}`)
    }
}

// Student class

class Student extends Person{
    constructor(name, age, location, gender, prevBack, className, faveSub){
        super(name, age, location, gender);
        this.previousBackground = prevBack;
        this.className = className;
        this.favSubjet = faveSub
    }
    listsSubject(){
        console.log(`${favSubjet}`)
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    springChallenge(subject){
        console.log(`${this.name} ans begun sprint challenge on ${subject}`)
    }
}

// Project Manager class

class ProjectManager extends Instructor{
    constructor(name, age, location, gender, specialty, favLanguage, catchPhrase, gradClassName, favInstructor){
        super(name, age, location, gender, specialty, favLanguage, catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student}'s code on ${subject}`)
    }
}

