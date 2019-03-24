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

var Intern = [];
for (var i = 0; i <= StudentList[0].length - 1; i++) {
	

	var knowl = new Knowledge(StudentList[1][i]);
	knowl = knowl.ShowKnowl();

	var student = new Student(StudentList[0][i]);
	student.SetKnowledge(knowl);

	var univer = new University(StudentList[2][i]);
	univer.AddStudent(student);
	
	var internship = new Internship("Interlink");

	if(knowl > 3){
	Intern.push(student.ShowStud());
	}
	

}
console.log("List of internship's students:");
for (var i = 0; i <= Intern.length - 1; i++) {
console.log(internship.GetStudents(Intern[i]));
}


