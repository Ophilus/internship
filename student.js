var StudentList = [

["Andrew Kostenko",
		"Julia Veselkina",
		"Maria Perechrest",
		"Vasul Horban",
		"Ihor Kostuk",
		"Oleg Storozhuk",
		"Romania Burko"],

["4","5","3","4","2","1","5"],

["Ivan Franko National University of Lviv",
		"Lviv Polytechnic National University",
		"Ukrainian Catholic University",
		"Ivan Franko National University of Lviv",
		"Lviv Polytechnic National University",
		"Ukrainian Catholic University",
		"Ivan Franko National University of Lviv"]

];

class Knowledge{
  constructor(level) {
  	this.level = level;
  }
  ShowKnowl(){
		return this.level;
	}
}

class	Student{

	constructor(name) {
		this.name = name;
	}

	SetKnowledge(knowledge){
		this.knowledge = knowledge;
	}

	ShowStud(){
		return this.name;
	}

}

class	University{

	constructor(name){
		this.name = name;
	}

	AddStudent(student){
		this.student = student;
	}
	ShowUniver(){
		return this.name;
	}
}

class	Internship{

	constructor(name){
		this.Internship = name;
	}

	GetStudents(student){
		
		return student;
	}
}

