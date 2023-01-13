import React from 'react';
import {Text, FlatList} from 'react-native';

export default function MessageList({messages}) {
  return (
    <FlatList
      data={messages}
      renderItem={({item}) => <Text>{item}</Text>}
      keyExtractor={item => item}
    />
  );
}
