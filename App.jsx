//To run this file on your laptop, you have to change the "localhost", to the actual ip address of your laptop
//check the wifi you are connected to and you will see the ip address

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  //get request using fetch
  const apiUrl = 'http://localhost:3000/post';

  const getRequestUsingFetch = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  //get request using axios
  const getRequestUsingAxios = () => {
    axios
      .get(apiUrl)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };
  // const getRequestUsingAxios = async () => {
  //   try {
  //     const response = await axios.get(apiUrl);
  //     const result = response.data;
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //post request using fetch
  const postRequestUsingFetch = async () => {
    try {
      const data1 = {name: 'learn api in react native'};
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data1),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  //post request using Axios
  const postRequestUsingAxios = () => {
    const data2 = {name: 'sarah'};
    axios
      .post(apiUrl, data2)
      .then(response => {
        response.data;
      })
      .catch(error => console.log(error));
  };

  //PUT request using Fetch
  const putRequestUsingFetch = async () => {
    try {
      const updateData = {name: 'sandra'};
      const response = await fetch(`http://localhost:3000/post/${36}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateData),
      });
      const dat = await response.json();
      getRequestUsingFetch();
      console.log(dat);
    } catch (error) {
      console.log(error);
    }
  };
  //PUT request using Axios
  const putRequestUsingAxios = async () => {
    try {
      const updateData = {name: 'angela', age: 78};
      const response = await axios.put(
        `http://localhost:3000/post/${'910c'}`,
        updateData,
      );
      const dat = await response.data;
      getRequestUsingFetch();
      console.log(dat);
    } catch (error) {
      console.log(error);
    }
  };

  //Delete Request using Fetch
  const deleteRequestUsingFetch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/post/${32}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
      });
      const newData = await response.json();
      console.log(newData);
      getRequestUsingFetch();
    } catch (error) {
      console.log(error);
    }
  };

  //Delete Request using Axios
  const deleteRequestUsingAxios = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/post/${32}`);
      const newData = await response.data;
      console.log(newData);
      getRequestUsingFetch();
    } catch (error) {
      console.log(error);
    }
  };

  const patchRequestUsingFetch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/post/${36}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: 'jess'}),
      });
      const result = await response.json();
      getRequestUsingFetch();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const patchRequestUsingAxios = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/post/${'b984'}`,
        {
          age: 19,
        },
      );
      const result = await response.data;
      getRequestUsingFetch();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRequestUsingFetch();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.txt}>INTRODUCTION INTO CRUD</Text>
        <View style={styles.container2}>
          <Text style={styles.txt}>SENIOR MEMBERS</Text>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View style={styles.group}>
                  <Text style={styles.txt1}>{item.id}</Text>
                  <Text style={styles.txt1}>{item.name}</Text>
                  <Text style={styles.txt1}>{item.age}</Text>
                </View>
              );
            }}
          />
          <TouchableOpacity onPress={getRequestUsingAxios}>
            <Text style={styles.txt}>Get By Axios</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={postRequestUsingFetch}>
            <Text style={styles.txt}>Post Request Using Fetch</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={postRequestUsingAxios}>
            <Text style={styles.txt}>Post Request Using Axios</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={putRequestUsingFetch}>
            <Text style={styles.txt}>Put Request Using Fetch</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={putRequestUsingAxios}>
            <Text style={styles.txt}>Put Request Using Axios</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteRequestUsingFetch}>
            <Text style={styles.txt}>Delete Request Using Fetch</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteRequestUsingAxios}>
            <Text style={styles.txt}>Delete Request Using Axios</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={patchRequestUsingFetch}>
            <Text style={styles.txt}>Patch Request Using Fetch</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={patchRequestUsingAxios}>
            <Text style={styles.txt}>Patch Request Using Axios</Text>
          </TouchableOpacity>
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
  txt1: {
    fontSize: 20,
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
    backgroundColor: 'gold',
    flex: 1,
    borderWidth: 3,
    borderRadius: 18,
    borderColor: 'gold',
    marginTop: 9,
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'gray',
    borderWidth: 2,
    margin: 5,
    padding: 5,
    borderRadius: 18,
  },
});
