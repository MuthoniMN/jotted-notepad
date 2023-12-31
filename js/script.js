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
    document.querySelector('#popup').style.display = 'none'

    console.log('saved');
    localStorage.setItem(`${title.value}`, `${note.value}`)

    document.querySelector('#savedNotes').innerHTML += `<h3>${title.value}</h3>` 
}

// displaying saved notes
for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.key(i);
    document.querySelector('#savedNotes').innerHTML += `<h3 class="savedNote">${element}</h3>`    
}    

// creating a new note
createNewButton.addEventListener('click', createNewNote)

function createNewNote() {
    document.querySelector('#popup').style.display = 'flex'

    document.getElementById('currentSave').addEventListener('click', saveNote)

    document.getElementById('continue').addEventListener('click', () => {
        title.value = ''
        note.value = ''

        document.querySelector('span').innerText = 0

        document.querySelector('#popup').style.display = 'none'
    })

}

// editing a note
let savedNotes = document.querySelectorAll('.savedNote')

savedNotes.forEach((a) => {
    a.addEventListener('click', () => {
        title.value = a.innerHTML
        note.value = localStorage.getItem(a.innerHTML)
    })
})

// mobile navigation
document.querySelector('#mobileMenu').addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('mobNav')
})