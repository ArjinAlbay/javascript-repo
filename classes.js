// Classes (sınıflar)

// sınıf tanımlama

class Person {
  // code goes here
}

// Class Instantiation

class Person {
  // code goes here
}

let user = new Person();
console.log(user); // Person {}

// Class Constructor

class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

user = new Person();

console.log(user);

let user1 = new Person(`arjin`, `albay`, `26`);

console.log(user1);
console.log(user1.name);

class Person {
  constructor(name, surname, age, country, city) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

let user2 = new Person(`arjin`, `albay`, `26`, `turkey`, `diyarbakir`);

console.log(user2);

// Default values with constructor

class Person {
  constructor(
    firstName = "arjin",
    lastName = "albay",
    age = 26,
    country = "Turkey",
    city = "Diyarbakir"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

let user3 = new Person();
let user4 = new Person(`mehmet`, `subay`, `35`, `turkey`, `antep`);

console.log(user3); // Person {firstName: 'arjin', lastName: 'albay', age: 26, country: 'Turkey', city: 'Diyarbakir'}

console.log(user4); // Person {firstName: 'mehmet', lastName: 'subay', age: '35', country: 'turkey', city: 'antep'}

// Class methods

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let person = new Person(`arjin`, `albay`, `26`, `turkey`, `diyarbakir`);

console.log(person.getFullName()); // arjin albay

// getter

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  get getScore() {
    return this.score;
  }

  get getSkills() {
    return this.skills;
  }
}

let person3 = new Person(`arjin`, `albay`, `26`, `turkey`, `diyarbakir`);

console.log(person3.getSkills);
console.log(person3.getScore);

// setter

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  get getScore() {
    return this.score;
  }

  get getSkills() {
    return this.skills;
  }

  set setScore(score) {
    this.score += score;
  }

  set setSkill(skill) {
    this.skills.push(skill);
  }
}

let person4 = new Person(`arjin`, `albay`, `26`, `turkey`, `diyarbakir`);

person4.setScore = 2;
person4.setSkill = "HTML";
person4.setSkill = "CSS";
person4.setSkill = "JavaScript";

console.log(person4.score); // 2
console.log(person4.skills); // ['HTML', 'CSS', 'JavaScript']

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  get getScore() {
    return this.score;
  }

  get getSkills() {
    return this.skills;
  }

  set setScore(score) {
    this.score += score;
  }

  set setSkill(skill) {
    this.skills.push(skill);
  }

  getPersonInfo() {
    let fullName = this.fullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(`, `) +
        ` and ${this.skills[this.skills.length - 1]} `;
    let formattedSkills = skills ? `He knows ${skills}` : ``;
    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}

let person5 = new Person(`arjin`, `albay`, `26`, `turkey`, `diyarbakir`);

person5.setScore = 3;
person5.setSkill = "HTML";
person5.setSkill = "CSS";
person5.setSkill = "JavaScript";
console.log(person5.getScore);

console.log(person5.getSkills);
console.log(person5.getPersonInfo());

// ********** Static method

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  get getScore() {
    return this.score;
  }

  get getSkills() {
    return this.skills;
  }

  set setScore(score) {
    this.score += score;
  }

  set setSkill(skill) {
    this.skills.push(skill);
  }

  getPersonInfo() {
    let fullName = this.fullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(`, `) +
        ` and ${this.skills[this.skills.length - 1]} `;
    let formattedSkills = skills ? `He knows ${skills}` : ``;
    let info = `${fullName} is ${this.age}.He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }

  static favoriteSkill() {
    let skills = ["HTML", "CSS", "JavaScript", "React", "Python", "Node"];
    let index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }

  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (hours < 10) {
      hours = `0` + hours;
    }
    if (minutes < 10) {
      minutes = `0` + minutes;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

console.log(Person.favoriteSkill());
console.log(Person.showDateTime());

// ********** Inheritance and Overriding methods

class Engineer extends Person {
  constructor(firstName, lastName, age, country, city, job) {
    super(firstName, lastName, age, country, city);
    this.job = job;
  }

  saySomething() {
    console.log(`I am a child of the person class`);
  }

  getMoney() {
    console.log(`get money`);
  }
}

let eng1 = new Engineer(`mehmet`, `er`, `65`, `turkey`, `adana`, `teacher`);
console.log(eng1);

console.log(eng1.fullName()); //arjin albay
console.log(eng1.getPersonInfo()); // mehmet er is 65.He lives adana, turkey.
