import {StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.txt}>INTRODUCTION INTO CRUD</Text>
        <View style={styles.container2}>
          <Text>FETCH IN REACT NATIVE</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  container1: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 7,
    marginTop: Platform.OS === 'android' ? 7 : 0,
  },
  txt: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
    textShadowColor: 'gray',
    textShadowOffset: {
      width: 3,
      height: 2,
    },
    textShadowRadius: 9,
    elevation: 8,
  },
  container2: {
    backgroundColor: 'orange',
    flex: 1,
  },
});
