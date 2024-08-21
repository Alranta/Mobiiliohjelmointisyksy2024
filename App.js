import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  const newCount = () => {
      setCount(count + 1)
  }

  const minusCount = () => {
    setCount(count - 1)
}

  const resetCount = () => {
    setCount(0)
  }

  const handlePress = () => {
    Alert.alert("Message", "You pressed the button " + count + " times")
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder='What is your name?'
        onChangeText={name => setName(name)}
      />
      <Text>Hello world! {count} {name} </Text>
      <View style={stylesButtons.container}>
        <Button onPress={newCount} title='+'></Button>
        <Button onPress={minusCount} title='-'></Button>
        <Button onPress={resetCount} title='Press me!'></Button>
        <Button onPress={handlePress} title='Check the number!'></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
});

const stylesButtons = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});