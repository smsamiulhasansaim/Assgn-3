/* S M Samiul Hasan */

/* Problem -1 (Divide the Asset) */
var area = 800;
var dividedArea = area / 2; // Divide the land equally between two brothers
console.log(dividedArea);
//Output:400


/* Problem -2 "( Cycle or Laptop)*/

var money = 10000;

if (money >= 25000) {
    console.log('Laptop');// If money ≥ 25000
}

else if (money >= 10000){
    console.log('Cycle'); // If money ≥ 1000 < 25000
}

else{
    console.log('Chocolate'); // If money < 10000
}

/* Problem -3 ( Medicine Planner) */
var lastDay = 11;

for (var day = 1; day <= lastDay; day++){
    if (day % 3 === 0) {
        console.log(day + '- medicine'); // Medicine wery 3rd day 
    }
    else {
        console.log(day + '- rest'); // Rest on other days
    }
}

/* Problem -4 ( Delete / Store) */
var fileName = 'pdfData';

if (fileName.startsWith('#') || fileName.endsWith('.pdf') || fileName.endsWith('.docx')){
    console.log('Store'); // Keep special files 
}
else { 
  console.log('Delete'); // Delete others
}


/* Problem -5 ( PH Email Generator ) */
 var studet = { name: " Jhankar", roll: 1014, department:'cse'};

 var email = studet.name.toLocaleLowerCase() + studet.roll + '.' + studet.department.toLocaleLowerCase() + '@ph.ac.bd';
     console.log(email)

// jhankar1014.cse@ph.ac.bd

/* Problem-6 (Current Salary) */
var experience = 30;
var startingSalary = 45000;

var CurrentSalary = startingSalary;
for (var year = 1; year <= experience; year++){
    CurrentSalary = CurrentSalary *1.05 // 5% annual raise
}
console.log(CurrentSalary.toFixed(2));

// output: 194 487.41