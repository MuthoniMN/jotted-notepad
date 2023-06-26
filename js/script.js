const note = document.querySelector('textarea')

note.addEventListener('keydown', () => {
    let text = note.value.split(' ')

    if(!note.value){
    document.querySelector('span').innerText = text.length
    }
})