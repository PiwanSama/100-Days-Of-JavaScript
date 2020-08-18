function person(first_name, last_name) {
	this.first_name = first_name;
	this.last_name = last_name;

	let getDetailsNoAccess = function () {
		return `First name is ${first_name} and last name is ${last_name}`;
	};

	this.getDetailsAccess = function () {
		return `First name is ${first_name}, Last name is ${last_name}`;
	};
}

let person_1 = new person('Samalie', 'Piwan');

console.log(person_1.first_name);
console.log(person_1.getDetailsNoAccess);
console.log(person_1.getDetailsAccess);

/*const programer = {
	isStudying: false,
	printIntroduction: function () {
		console.log(`My name is ${this.name}. Am I studying? ${this.isStudying}.`);
	},
};

const me = Object.create(programer);
me.name = 'Samalie';
me.isStudying = true;
me.printIntroduction();*/
