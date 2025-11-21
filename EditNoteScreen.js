import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function EditNoteScreen({ route, navigation }) {
  const { noteId, text, onSave } = route.params;
  const [updatedText, setUpdatedText] = useState(text);

  return (
    <View style={{ flex: 1, padding: 40,paddingLeft:20,paddingRight:20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
        Edit Note
      </Text>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
          height: 150,
          textAlignVertical: "top",
          fontSize: 16,
        }}
        value={updatedText}
        onChangeText={setUpdatedText}
        multiline
      />

      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 14,
          borderRadius: 8,
          marginTop: 20,
        }}
        onPress={() => {
          onSave(noteId, updatedText); // update notes in parent
          navigation.goBack();
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
}
