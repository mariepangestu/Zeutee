import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Add} from 'iconsax-react-native';
import fontZ from '../../assets/font/fonts';
import {ProfileData} from '../../../detail';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={require('../../pic/logo.png')} />
        </View>
        <TouchableOpacity style={styles.header1}>
          <Add color="#ffffff" variant="Linear" size={24} />
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 10, margin: 12, flexDirection: 'row'}}>
        <Image
          style={styles.containerProfile}
          resizeMode="cover"
          source={ProfileData.profilePict}
        />
        <View>
          <Text style={styles.title}>{ProfileData.name}</Text>
          <Text style={styles.id}>id: @{ProfileData.name}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonEdit}>
        <Text style={styles.textbutton}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonEdit}>
        <Text style={styles.textbutton}>My Reminder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonEdit}>
        <Text style={styles.textbutton}>Search History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonEdit}>
        <Text style={styles.textbutton}>About</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 200,
        }}>
        <Text>copyright @ZeuteeApp2023</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  logo: {
    margin: 5,
    resizeMode: 'cover',
    width: 22,
    height: 22,
  },
  containerLogo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containerProfile: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 140,
    width: 140,
    borderRadius: 70,
  },
  header: {
    paddingHorizontal: 24,
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  header1: {
    paddingTop: 8,
    paddingBottom: 4,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  id: {
    paddingLeft: 15,
    fontSize: 15,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-Medium'],
    opacity: 0.7,
  },
  buttonEdit: {
    borderRadius: 10,
    backgroundColor: '#1f1f1f',
    margin: 3,
  },
  textbutton: {
    margin: 10,
    fontSize: 15,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-Bold'],
  },
});
