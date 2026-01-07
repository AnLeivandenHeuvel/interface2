// let output = document.getElementById("output");
//
//
// function success() {
//     let studenten = JSON.parse(this.responseText);
//     console.log(studenten);
// }
//
// function error(err) {
//     console.error('Error Occurred :', err);
// }
//
//
// let xhr = new XMLHttpRequest();
// xhr.onload = success;
// xhr.onerror = error;
// xhr.open('GET', 'jsonRead.php', true);
// xhr.send();

async function test() {
    const opvragen = await fetch('jsonRead.php')

    let students = await opvragen.json();

    let list = document.getElementById('list');
    console.log(students);
    for (let index = 0; index < students.length; index++) {
        const li = document.createElement('li')
        li.textContent = students[index].move.name
        list.appendChild(li)
    }
    document.getElementById('output').innerHTML = data[0].studentNummer;
}

test();


// for (let index = 0; index < b.length; index++) {
//     const ability = b[index];
//     let abilityName = ability.ability.name;
//     let li = listElement.appendChild(document.createElement('li'));
//     li.textContent = abilityName;
// }