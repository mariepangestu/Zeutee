import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {HambergerMenu, SearchNormal1} from 'iconsax-react-native';
import fontZ from './src/assets/font/fonts';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container1}>
        <View style={styles.header}>
          <Text style={styles.title}>Z</Text>
          <View style={styles.header1}>
            <SearchNormal1 color="#ffffff" variant="Linear" size={24} />
            <HambergerMenu color="#ffffff" variant="Linear" size={24} />
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.title}>Up Coming</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.imageUpcoming}
                source={require('./src/pic/fabula.jpeg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageUpcoming}
                source={require('./src/pic/edsheeran.webp')}
              />
            </View>
            <View>
              <Image
                style={styles.imageUpcoming}
                source={require('./src/pic/whisnu.png')}
              />
            </View>
            <View>
              <Image
                style={styles.imageUpcoming}
                source={require('./src/pic/BMTH.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageUpcoming}
                source={require('./src/pic/cp.jpg')}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.container2}>
          <Text style={styles.title}>Recently Opened</Text>
          <ScrollView horizontal>
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
                source={require('./src/pic/edsheeran.webp')}
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
          <ScrollView horizontal>
            <View style={styles.Location}>
              <Text style={styles.LocText}>Malang</Text>
            </View>
            <View style={styles.Location}>
              <Text style={styles.LocText}>Jakarta</Text>
            </View>
            <View style={styles.Location}>
              <Text style={styles.LocText}>Semarang</Text>
            </View>
            <View style={styles.Location}>
              <Text style={styles.LocText}>Banyuwangi</Text>
            </View>
            <View style={styles.Location}>
              <Text style={styles.LocText}>Surabaya</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.container2}>
          <Text style={styles.title}>Artist</Text>
          <ScrollView horizontal>
            <View style={styles.container3}>
              <Image
                style={styles.imageRec}
                source={require('./src/pic/fabula.jpeg')}
              />
              <Text style={styles.description}>Mahalini</Text>
            </View>
            <View style={styles.container3}>
              <Image
                style={styles.imageRec}
                source={require('./src/pic/edsheeran.webp')}
              />
              <Text style={styles.description}>Ed Sheeran</Text>
            </View>
            <View style={styles.container3}>
              <Image
                style={styles.imageRec}
                source={require('./src/pic/whisnu.png')}
              />
              <Text style={styles.description}>Whisnu Santika</Text>
            </View>
            <View style={styles.container3}>
              <Image
                style={styles.imageRec}
                source={require('./src/pic/BMTH.jpg')}
              />
              <Text style={styles.description}>Bring Me The</Text>
            </View>
            <View style={styles.container3}>
              <Image
                style={styles.imageRec}
                source={require('./src/pic/cp.jpg')}
              />
              <Text style={styles.description}>Coldplay</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container2: {
    flex:1,
    paddingHorizontal: 8,
    paddingVertical: 5,
    gap: 5,
    justifyContent: 'space-between',
  },
  container3: {
    gap: 8,
    justifyContent: 'space-between',
  },
  listcontainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 8,
    justifyContent: 'flex-start',
    alignContent:'flex-end',
    borderRadius:15,
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
  imageUpcoming: {
    margin: 10,
    borderRadius: 10,
    resizeMode: 'cover',
    width: 300,
    height: 380,
    gap: 8,
  },
  imageRec: {
    margin: 10,
    borderRadius: 10,
    resizeMode: 'cover',
    width: 120,
    height: 160,
    gap: 8,
  },
  Location: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#2c2c2c',
    marginHorizontal: 5,
  },
  LocText: {
    fontFamily: fontZ['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
  },
  description:{
    fontSize: 15,
    color: '#ffffff',
      fontFamily: fontZ['Pjs-SemiBold'],
  },
});
