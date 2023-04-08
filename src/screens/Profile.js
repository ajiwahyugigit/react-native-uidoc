import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MenuBar from '../components/MenuBar';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}></View>
        <MenuBar />
      </View>
    );
  }
}

export default Profile;
