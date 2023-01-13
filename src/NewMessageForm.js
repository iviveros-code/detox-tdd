import React, {useState} from 'react';
import {TextInput, Pressable, Text} from 'react-native';

export default function NewMessageForm({onSend}) {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    onSend(inputText);
    setInputText('');
  };
  return (
    <>
      <TextInput
        testID="messageText"
        onChangeText={setInputText}
        value={inputText}
      />
      <Pressable testID="sendButton" onPress={handleSend}>
        <Text>Send</Text>
      </Pressable>
    </>
  );
}
