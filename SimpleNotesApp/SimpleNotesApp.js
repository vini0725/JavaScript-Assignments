function addNote() {
    var noteInput = document.getElementById('noteInput');
    var noteText = noteInput.value;

    if (noteText.trim() !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = noteText;
        document.getElementById('noteList').appendChild(listItem);
        noteInput.value = '';
    } else {
        alert('Please enter a note.');
    }
}
