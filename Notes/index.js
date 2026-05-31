const notesListElement = document.getElementById("notes-list");
const container = document.querySelector(".container");
let notesList = [];

function createNote(){
    notesListElement.style.display = "none"; 
    
    let existingCard = container.querySelector(".createNoteCard");
    if(existingCard) return; 

    let newCard = document.createElement('div');
    newCard.className = 'createNoteCard';
    newCard.innerHTML = `
    <button class="close" onclick="closeCard()">X</button>
    <input type="text" placeholder="Title">
    <textarea placeholder="Write note"></textarea>
    <button class="mainButtons" onclick="addNote(this)">Add Notes</button>
    `;
 
    container.appendChild(newCard);
}

function closeCard(){
    renderNotes();
}

function addNote(button){
    
    const card = button.parentElement;

    let title = card.querySelector('input').value;
    let content = card.querySelector('textarea').value;
    
    if (!title.trim() || !content.trim()) {
        alert("Fill all fields");
        return;
    }

    card.querySelector('input').value = "";
    card.querySelector('textarea').value = ""
    
    let note = {
        id: Date.now(),
        title: title,
        content: content
    }
    
    notesList.push(note);

    renderNotes();
}

function renderNotes(){
    const card = container.querySelector(".createNoteCard");

if(card){
    card.remove();
}
notesListElement.style.display = "grid";

    let html = '';

    notesList.map((note) =>{
        html += `
            <div class="NoteCard" id="${note.id}" ondblclick="editNote(this)">
            <h2>${note.title}</h2>
            <p>${note.content}</p>
            </div>
        ` 
    });

    notesListElement.innerHTML = html;
}

function editNote(div){
    notesListElement.style.display = "none"; 
    
    const title = div.querySelector("h2").textContent;
    const content = div.querySelector("p").textContent;

    let newCard = document.createElement('div');
    newCard.className = 'createNoteCard';
    newCard.innerHTML = `
    <button class="close" onclick="closeCard()">X</button>
    <input type="text" placeholder="Title" value="${title}">
    <textarea placeholder="Write note">${content}</textarea>
    <div class="buttons">
    <button class="mainButtons" onclick="confirmeditNote(this, ${div.id})">Change</button>
    <button class="mainButtons" onclick="deleteNote(${div.id})" id="delete">Delete</button>
    </div>
    `;
    
    container.appendChild(newCard);
    console.log(title);
}

function confirmeditNote(div, noteId){
     const notes = div.closest(".createNoteCard");
     for(let i = 0; i < notesList.length; i++){
        if(notesList[i].id === noteId){
            notesList[i].title = notes.querySelector("input").value;
            notesList[i].content = notes.querySelector("textarea").value;
            renderNotes();
            return;
        }
    }
}

function deleteNote(noteId){
    notesList = notesList.filter(note => note.id !== noteId);
    renderNotes();
}