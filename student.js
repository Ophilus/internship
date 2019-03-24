
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

