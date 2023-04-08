import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: [],
    };
  }

  saveData = async (data: any) => {
    try {
      await AsyncStorage.setItem('@datastring', JSON.stringify(data));
      console.log(data, 'Data Berhasil Disimpan!');
    } catch (error) {
      console.log(error);
    }
  };

  getData = async () => {
    try {
      let value = await AsyncStorage.getItem('@datastring');
      // value =  value !== null ? JSON.parse(value) : '';
      value = JSON.parse(value);

      console.log(value, 'Data Berhasil DiAmbil!');
    } catch (error) {}
  };

  render() {
    return (
      <View>
        <Text>Hallo</Text>

        <Text>{this.state.value}</Text>

        <TouchableOpacity onPress={() => this.saveData('Hallo World!')}>
          <Text>Get Data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.getData()}>
          <Text>Get Data Read</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
