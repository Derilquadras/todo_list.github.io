let item = document.getElementById('item');
let addButton = document.getElementById('add-button');
let updateButton = document.getElementById('update-button');
let table = document.getElementById('table1');
let html, dataObject, getData;

const returnObj = (item) => ({ item: item});

const addDetails = () => {
    if (item.value.trim()) {
        dataObject = returnObj(item.value);
        putData.push(dataObject)
        localStorage.setItem('localtask', JSON.stringify(putData))
        item.value = ""
        showTable();
    }
}

const showTable = () => {
    getData = localStorage.getItem('localtask');
    putData = (getData == null ? putData = [] : putData = JSON.parse(getData) )
    html = '';
    putData.forEach((item, index) => {
        html += `
                    <tr>
                        <td>${item.item}</td>
                        <td><button onclick="editTask(${index})" id="edit-Button">Edit</button></td>
                        <td ><button onclick="deleteTask(${index})" id="delete-Button">Delete</button></td>
                    </tr>
        `
    })
    table.innerHTML = html;
}

const editTask = (index) => {
    editUser = index;
    getData = localStorage.getItem('localtask');
    putData = JSON.parse(getData);
    item.value = putData[index].item;
    addButton.style.display = 'none';
    updateButton.style.display = 'block';
}
const update = () => {
    getData = localStorage.getItem('localtask');
    putData = JSON.parse(getData);
    putData[editUser].item = item.value;
    localStorage.setItem('localtask', JSON.stringify(putData))
    addButton.style.display = 'block';
    updateButton.style.display = 'none';
    showTable();
}

function deleteTask(index) {
    getData = localStorage.getItem('localtask');
    putData = JSON.parse(getData);
    putData.splice(index, 1)
    localStorage.setItem('localtask', JSON.stringify(putData))
    showTable();
}

window.onload = () =>  showTable();
addButton.addEventListener('click', addDetails);
updateButton.addEventListener('click', update);









