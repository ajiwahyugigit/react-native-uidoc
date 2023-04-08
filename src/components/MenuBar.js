import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class MenuBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <View style={{backgroundColor: '#fff', paddingVertical: 20}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="home" size={20} color="#19376D" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="archive" size={20} color="#19376D" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="plus-circle" size={30} color="#19376D" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="message-square" size={20} color="#19376D" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="user" size={20} color="#19376D" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MenuBar;
