import React, {Component} from 'react';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

var Spinner = require('react-native-spinkit');

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 4000);
  };

  render() {
    return (
      <LinearGradient
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        colors={['#f05053', '#ee9ca7', '#fff']}>
        <Image
          style={{width: 250, height: 150}}
          source={require('../assets/images/halodoc.png')}
        />
        <Spinner
          style={{marginBottom: 35}}
          isVisible={true}
          size={30}
          type={'Wave'}
          color={'#fff'}
        />
      </LinearGradient>
    );
  }
}

export default Splash;
