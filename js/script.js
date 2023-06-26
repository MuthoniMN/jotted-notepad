const title = document.querySelector('input')
const note = document.querySelector('textarea')
const saveButton = document.getElementById('save')
const createNewButton = document.getElementById('new')

// counting words
note.addEventListener('keydown', () => {
    let text = note.value.split(' ')

    document.querySelector('span').innerText = text.length
})

// saving the notes
saveButton.addEventListener('click', saveNote)

function saveNote() {
    console.log('saved');
    localStorage.setItem(`${title.value}`, `${note.value}`)

}

// displaying saved notes
for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.key(i);
    document.querySelector('#savedNotes').innerHTML += `<h3>${element}</h3>`    
}    
