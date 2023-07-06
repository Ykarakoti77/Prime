import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.centered}>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/illustration-light-bulb-icon_53876-43730.jpg?w=740&t=st=1688646854~exp=1688647454~hmac=a6ffaddcb28e5b04da9937cc04248f34816796ee61cdc52d22a7e5921c6959f0',
        }}
        style={{width: 200, height: 200}}
      />
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.subtitle}>Let's get started...</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dff5fa',
  },
  title: {
    fontSize: 25,
    marginVertical: 2,
    color: '#176B87',
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
  },
});
export default App;
