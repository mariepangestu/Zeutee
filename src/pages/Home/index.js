import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {SearchNormal1} from 'iconsax-react-native';
import fontZ from '../../assets/font/fonts';
import {ItemCity, ListUpcoming, ListArtist} from '../../components';
import {UpcomingConcert, ArtistConcert} from '../../../detail';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchPage")}>
        <View style={styles.header}>
          <View style={styles.containerLogo}>
            <Image style={styles.logo} source={require('../../pic/logo.png')} />
          </View>
          <View style={styles.header1}>
            <SearchNormal1 color="#ffffff" variant="Linear" size={24} />
          </View>
        </View>
        </TouchableWithoutFeedback>
        <View style={styles.container2}>
          <Text style={styles.title}>Up Coming</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Upcoming />
          </ScrollView>
        </View>
        <View style={styles.container2}>
          <Text style={styles.title}>Recently Opened</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                style={styles.imageRec}
                source={require('../../pic/whisnu.png')}
              />
            </View>
            <View>
              <Image
                style={styles.imageRec}
                source={require('../../pic/BMTH.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageRec}
                source={require('../../pic/fabula.jpeg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageRec}
                source={require('../../pic/edsheeran-.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageRec}
                source={require('../../pic/cp.jpg')}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.container2}>
          <Text style={styles.title}>Location</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ItemCity NameCity={'Malang'} />
            <ItemCity NameCity={'Surabaya'} />
            <ItemCity NameCity={'Semarang'} />
            <ItemCity NameCity={'Jakarta'} />
            <ItemCity NameCity={'Palembang'} />
          </ScrollView>
        </View>
        <Text style={styles.title}>Artist</Text>
        <Artist />
      </View>
    </ScrollView>
  );
}

const Upcoming = () => {
  return (
    <View>
      <ListUpcoming data={UpcomingConcert} />
    </View>
  );
};
const Artist = () => {
  return (
    <View>
      <ListArtist data={ArtistConcert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  logo: {
    margin: 10,
    resizeMode: 'cover',
    width: 22,
    height: 22,
  },
  containerLogo: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  container2: {
    paddingVertical: 5,
    gap: 5,
    justifyContent: 'space-between',
  },
  artistCon: {
    gap: 8,
    flexDirection: 'row',
    borderRadius: 10,
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
  title: {
    paddingLeft: 10,
    fontSize: 20,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-ExtraBold'],
  },
  imageRec: {
    margin: 10,
    borderRadius: 10,
    resizeMode: 'cover',
    width: 120,
    height: 160,
    gap: 2,
  },
});
