import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {HambergerMenu, SearchNormal1} from 'iconsax-react-native';
import fontZ from './src/assets/font/fonts';
import {ItemCity, ListUpcoming, ListArtist} from './src/components';
import {UpcomingConcert, ArtistConcert} from './detail';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.forZ}>Z</Text>
          <View style={styles.header1}>
            <SearchNormal1 color="#ffffff" variant="Linear" size={24} />
            <HambergerMenu color="#ffffff" variant="Linear" size={24} />
          </View>
        </View>
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
                source={require('./src/pic/whisnu.png')}
              />
            </View>
            <View>
              <Image
                style={styles.imageRec}
                source={require('./src/pic/BMTH.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageRec}
                source={require('./src/pic/fabula.jpeg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageRec}
                source={require('./src/pic/edsheeran-.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageRec}
                source={require('./src/pic/cp.jpg')}
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
        <View style={styles.container2}>
          <Text style={styles.title}>Artist</Text>
          <Artist/>
        </View>
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
  listcontainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 8,
    justifyContent: 'flex-start',
    alignContent: 'flex-end',
    borderRadius: 15,
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
  forZ: {
    paddingLeft: 5,
    fontSize: 20,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-ExtraBold'],
  },
  recentlyContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 8,
    justifyContent: 'space-between',
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
