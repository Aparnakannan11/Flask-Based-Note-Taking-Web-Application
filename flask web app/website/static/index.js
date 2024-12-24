function deleteNote(noteId) {
    fetch("/delete-note", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',  // Add this header
      },
      body: JSON.stringify({ noteId: noteId }),
    }).then(response => response.json())  // Parse the response as JSON
    .then(data => {
      if (data.message === "Note deleted successfully") {
        // Optionally, remove the note from the DOM
        document.getElementById(`note-${noteId}`).remove();  // If you have an ID on the note element
        alert("Note deleted successfully!");
      } else {
        alert(data.message);  // Display error message if deletion fails
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred while deleting the note');
    });
  }