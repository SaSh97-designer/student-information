'use strict';

let studentArray=[];
let TuitionArray=[];
let table=document.getElementById('table');
let form=document.getElementById('form');
let total;


function Student(studnetEmail,studentMobile,tution){



this.studnetEmail=studnetEmail;
this.studentMobile=studentMobile;
this.tution=tution;
this.StudentName;
// this.StudentAge;

// this.getStudentName(studnetEmail);
this.random();
studentArray.push(this);
TuitionArray.push(this.tution);

console.log(studentArray);
console.log(TuitionArray);


}


function SetDatainLocalStorage(){
let stringData=JSON.stringify(studentArray);
let storedDtat=localStorage.setItem('student',stringData);


}

function getDataFromStorage(){
let data=JSON.parse(localStorage.getItem('student'));

// for (let index = 0; index < studentArray.length; index++) {
//     let st=new Student(studentArray[index].studnetEmail);
    
// }
// st.getStudentName(studentArray[index].studnetEmail);
// }
}

//get data form user 
form.addEventListener('submit',getDataFromUser);

function  getDataFromUser(event){
    event.preventDefault();

    let studnetEmail=event.target.StudentEmail.value;
    console.log(studnetEmail);


    let studentMobile=event.target.StudentMobileNumber.value;
    console.log(studentMobile);

    let tution=event.target.select.value;
    tution=parseInt(tution);

    console.log(tution);


    new Student(studnetEmail,studentMobile,tution);

    SetDatainLocalStorage();

    clear();

    render();


}


Student.prototype.getStudentName=function(studnetEmail){
    let str = this.studnetEmail;
   let studentNameArray = str.split('@', 1);
    this.StudentName=studentNameArray.toString();
    // console.log('this is student Name',this.StudentName);



}
// Random AGe

Student.prototype.random=function(){
 let age=Math.floor(Math.random()*(24-18)+18);
this.StudentAge=age;



}


//MAke TOTAL



function totalTuition(){
  total=0;
for (let index = 0; index < TuitionArray.length; index++) {
    total=TuitionArray[index]+total;
    
    
    console.log(total);
}
let totalCell=document.createElement('tf');
table.appendChild(totalCell);
let totalDTata=document.createElement('td');
totalCell.appendChild(totalDTata);
totalDTata.textContent="TOTAL ="+total;

}




//add header

function addHeader(){
let tableRow=document.createElement('tr');
table.appendChild(tableRow);

let td0=document.createElement('td');
tableRow.appendChild(td0);
td0.textContent="id";


let td1=document.createElement('td');
tableRow.appendChild(td1);
td1.textContent="Name";

let td2=document.createElement('td');
tableRow.appendChild(td2);
td2.textContent="Email";

let td3=document.createElement('td');
tableRow.appendChild(td3);
td3.textContent="mobile";

let td4=document.createElement('td');
tableRow.appendChild(td4);
td4.textContent="Age";


let td5=document.createElement('td');
tableRow.appendChild(td5);
td5.textContent="Tuition";

let tablefooter=document.createElement('tf');
table.appendChild(tablefooter);







}






//render the table
 function render(){
    // getDataFromStorage();
    addHeader();

for (let index = 0; index < studentArray.length; index++) {
    let tableRow=document.createElement('tr');
    table.appendChild(tableRow);
    
    let td0=document.createElement('td');
    tableRow.appendChild(td0);
    td0.textContent=index+1;
    
    
    let td1=document.createElement('td');
    tableRow.appendChild(td1);
    td1.textContent=studentArray[index].StudentName;
    
    let td2=document.createElement('td');
    tableRow.appendChild(td2);
    td2.textContent=studentArray[index].studnetEmail;
    
    let td3=document.createElement('td');
    tableRow.appendChild(td3);
    td3.textContent=studentArray[index].studentMobile;
    
    let td4=document.createElement('td');
    tableRow.appendChild(td4);
    td4.textContent=studentArray[index].StudentAge;
    
    
    let td5=document.createElement('td');
    tableRow.appendChild(td5);
    td5.textContent=studentArray[index].tution;
    
  
  
}
totalTuition();

    

}

function clear(){

    table.textContent=' ';
}