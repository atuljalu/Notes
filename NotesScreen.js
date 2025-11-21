import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function NotesScreen({ navigation }) {
  const [notes, setNotes] = useState([{ id: "1", text: "hello" }]);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim() === "") return;
    setNotes([...notes, { id: Date.now().toString(), text: newNote }]);
    setNewNote("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedText) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: updatedText } : note))
    );
  };

  return (
    <View style={{ flex: 1, paddingTop: 40,paddingLeft:20,paddingRight:20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
        My Notes
      </Text>

      {/* Input */}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="Write a new note..."
        value={newNote}
        onChangeText={setNewNote}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 12,
          borderRadius: 8,
          marginBottom: 20,
        }}
        onPress={addNote}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
          Add Note
        </Text>
      </TouchableOpacity>

      {/* Notes List */}
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EditNote", {
                noteId: item.id,
                text: item.text,
                onSave: updateNote,
              })
            }
            style={{
              backgroundColor: "#f9f9f9",
              padding: 20,
              borderRadius: 12,
              marginBottom: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 16 }}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteNote(item.id)}>
              <Text style={{ color: "red", fontSize: 18 }}>🗑</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
