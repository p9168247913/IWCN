import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { useToast } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);
  const toast = useToast();

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await axios.get('http://localhost:4000/api/notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }

    fetchNotes();
  }, []);

  const handleAddNote = async () => {
    if (noteText.trim() === '') return;

    try {
      const response = await axios.post('http://localhost:4000/api/notes', {
        text: noteText,
      });

      setNotes([response.data, ...notes]);
      setNoteText('');
      toast({
        title: 'Note Added',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: "top"
      });
    } catch (error) {
      console.error('Error adding note:', error);
      toast({
        title: 'Error!!',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: "top"
      });
    }
  };

  const handleDeleteNote = async (deletedNoteId) => {
    try {
      await axios.delete(`http://localhost:4000/api/notes/${deletedNoteId}`);
      setNotes(notes.filter((note) => note._id !== deletedNoteId));
      toast({
        title: 'Note Deleted',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: "top"
      });
    } catch (error) {
      console.error('Error deleting note:', error);
      toast({
        title: 'Error!!',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: "top"
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "rgb(110,198,183)", minHeight: "98vh", padding:"20px" }}>
        <div style={{ padding: '10px', display: "flex", flexDirection: "row", columnGap:"20px", alignItems: "center", margin: "auto", width: "70%", marginBottom: "20px" }}>
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Enter your note..."
            style={{ borderRadius: "5px", width: "80%", marginBottom: "10px", outline:"none", padding:"10px", whiteSpace: 'pre-wrap' }}
          />
          <button style={{ backgroundColor: "pink", height: "40px", padding: "10px", borderRadius:"5px" }} onClick={handleAddNote}>
            Add Note
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', margin: "auto", width: '90%' }}>
          {notes.map((note) => (
            <div key={note._id} style={{ backgroundColor: 'white', borderRadius: "8px", padding: '15px', position: 'relative', width:"250px", height:"auto" }}>
              <div style={{ borderRadius: '5px', maxWidth: '100%' }}>
                {note.text}
              </div>
              <p style={{ fontSize: '12px', marginTop: '5px', color: 'gray' }}>
                {new Date(note.createdAt).toLocaleString()}
              </p>
              <span
                style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer', color: 'red' }}
                onClick={() => handleDeleteNote(note._id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </span>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );;

}

export default App;
