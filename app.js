// Selecting All Elements We Need
let noteArea = document.querySelector('.note-area');
let title = document.querySelector('#title');

// Selecting Notes
let notes = document.querySelector('#notes');
let note = document.querySelector('.note');

// let colorInput = document.querySelector("#colorInput");


document.addEventListener('DOMContentLoaded', function () {
    const themeColor = localStorage.getItem('themeColor');

    if (themeColor == "dark") {
        document.body.style.backgroundColor = "black";
        // var(--dark-color)
    } else {
        document.body.style.backgroundColor = "white";
    }
});

// colorInput.addEventListener('change', function (e) {
//     console.log(e.target.value);
//     localStorage.setItem("themeColor", e.target.value);
// });

// Selecting All Buttons We Need

var del;
var com;
let li = document.querySelector("li");

function addNote(title) {
    notes.innerHTML += `<div class="note">
    <ul>
        <li>${title}</li>
    </ul>
    <button class="delete">Delete</button>
    <button class="complete">Complete</button>
</div>`;
}

function loadNotes() {

    const notesData = getDataFromLocalStorage();


    notesData.forEach(function (note) {
        addNote(note);
    });

}

loadNotes();

function Completed() {
    li.style.textDecoration = "line-through";
}

// gets notes from local storage
function getDataFromLocalStorage() {
    const notesData = localStorage.getItem("notes");
    // ternary operator

    // if (notesData) {
    //     return JSON.parse(notesData);
    // } else {
    //     return [];
    // }

    return notesData ? JSON.parse(notesData) : [];
}


function addToLocalStorage(title) {

    const notesData = getDataFromLocalStorage();
    notesData.push(title);
    console.log("notesData", notesData);
    localStorage.setItem('notes', JSON.stringify(notesData));
}

document.addEventListener('click', function (e) {
    if (!e.target.classList.contains('title')) {
        if (title.value == '') {
            return;
        } else {
            // adds to the page
            addNote(title.value);
            // adds to local storage
            addToLocalStorage(title.value);
            title.value = '';
        }
    }
});

function removeFromLocalStorage(title) {

    const currentNotes = getDataFromLocalStorage();
    console.log(currentNotes);
    const remainNotes = currentNotes.filter(function (note) {
        return note !== title;
    });
    localStorage.setItem('notes', JSON.stringify(remainNotes));

}


notes.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        // remove from local storage

        const deletingTitle = event.target.parentElement.querySelector("li").textContent;

        removeFromLocalStorage(deletingTitle);
        event.target.parentElement.remove();
    } else if (event.target.classList.contains('complete')) {
        event.target.parentElement.querySelector("li").style.textDecoration = 'line-through';
    }
});
