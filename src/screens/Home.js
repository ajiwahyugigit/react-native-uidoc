import React, {Component} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import MenuBar from '../components/MenuBar';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F3F4F8'}}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <View style={{flex: 1}}>
          <LinearGradient colors={['#DD5E89', '#ffff']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 25,
                marginTop: 45,
              }}>
              <Image source={require('../assets/images/profile.png')} />
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  borderRadius: 50,
                }}>
                <Icon name="bell" size={20} color="#19376D" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                paddingHorizontal: 20,
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 30, color: '#000', fontWeight: 'bold'}}>
                  Welcome!
                </Text>
                <Text style={{fontSize: 30, color: '#000', fontWeight: 'bold'}}>
                  Rajesh
                </Text>
                <Text style={{color: '#333', fontSize: 16}}>
                  How is it going today?
                </Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    marginTop: 30,
                    backgroundColor: '#FF9C27',
                    justifyContent: 'center',
                    borderRadius: 10,
                    padding: 10,
                  }}>
                  <Icon name="bell" size={20} color="#fff" />
                  <Text
                    style={{color: '#fff', fontWeight: 'bold', paddingLeft: 5}}>
                    Urgent Care
                  </Text>
                </TouchableOpacity>
              </View>
              <Image source={require('../assets/images/doc.png')} />
            </View>
          </LinearGradient>

          <View
            style={{
              padding: 20,
              backgroundColor: '#fff',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}>
            <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
              Our Services
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <Image source={require('../assets/images/icon1.png')} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <Image source={require('../assets/images/icon2.png')} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <Image source={require('../assets/images/icon3.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginTop: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
                Appointment
              </Text>
              <Text style={{color: '#257CFF', fontWeight: 'bold'}}>
                See All
              </Text>
            </View>

            <View style={{marginTop: 20}}>
              <Text>Appointment date</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Icon name="clock" size={20} color="#333" />
                  <Text style={{paddingLeft: 5, color: '#000'}}>
                    Wed Nov 20 8:00 - 8:30 AM
                  </Text>
                </View>
                <Icon name="more-vertical" size={20} color="#333" />
              </View>
              <View style={{flexDirection: 'row', marginVertical: 20}}>
                <Image source={require('../assets/images/user.png')} />
                <View style={{paddingLeft: 10}}>
                  <Text
                    style={{
                      paddingLeft: 5,
                      color: '#000',
                      fontSize: 18,
                      fontWeight: '800',
                    }}>
                    Dr. Prem Tiwari
                  </Text>
                  <Text style={{paddingLeft: 5, color: '#808D9E'}}>
                    Orthopedic
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <MenuBar />
      </View>
    );
  }
}

export default Home;
