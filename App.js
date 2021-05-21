import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { StyleSheet, Button, View, TextInput, number, text } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
  function signIn() {
    if ((regex.test(email) === true) && (password.length >= 6)) {
      alert("email et password correct")
    } else {
      alert("email et password wrong")
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChange={(e) => { setEmail(e.target.value) }}
        value={text}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        onChange={(e) => { setPassword(e.target.value) }}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Button
        title="Sign in"
        onPress={signIn}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1
  }
});

