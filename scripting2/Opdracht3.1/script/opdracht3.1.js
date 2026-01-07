let output = document.getElementById("output");
let studentTabel = document.getElementById("studentTabel");
let tableBody = document.getElementById("tableBody");
 
function success() {
    let studenten = JSON.parse(this.responseText);
    console.log(studenten);
 
    tableBody.innerHTML = ' ';
    // Hier jouw code om alle studenten uit te lezen en aan de table toe te voegen  
    studenten.forEach(student => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerText = student.studentNaam;
        tr.appendChild(td1);
 
 
        let td2 = document.createElement('td');
        td2.innerText = student.studentNummer;
        tr.appendChild(td2);
 
        tableBody.appendChild(tr);
    });
 
}
 
function error(err) {
    console.error('Error Occurred :', err);
}
 
function getStudent(){
    let xhr = new XMLHttpRequest();
    xhr.onload = success;
    xhr.onerror = error;
    xhr.open('GET', 'jsonRead.php', true);
    xhr.send();
}
 
// Haal initieel al de studenten op die in de database staan
getStudent();
 
function submitStudent(){
    event.preventDefault();
    console.log('submitting student')
 
    let studentNaam = document.getElementById('studentNaam').value;
    let studentNummer = document.getElementById('studentNummer').value;
    
 
    let data = {
        studentNaam: studentNaam,
        studentNummer: studentNummer,
    };
 
    console.log(data);
 
    const response = fetch("jsonWrite.php", {
        method: "POST",
        body: JSON.stringify(data),
    }).then(event => {
        getStudent()
    });
}
 
let form = document.getElementById('nieuweStudent');
form.addEventListener("submit", submitStudent);