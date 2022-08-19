const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote(''));

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="bx bxs-edit"></i></button>
        <button class="delete"><i class="bx bx-trash"></i></button>
    </div>

    <div class="main ${text ? '' : 'hidden'}"></div> 
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `;
}
