import React,{useState, useEffect,useCallback} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  RefreshControl, ActivityIndicator
} from 'react-native';
import {SearchNormal1} from 'iconsax-react-native';
import fontZ from '../../assets/font/fonts';
import {ItemCity, ListUpcoming, ListArtist} from '../../components';
import {UpcomingConcert, ArtistConcert} from '../../../detail';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

export default function Home() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [concertData, setConcertData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const subscriber = firestore()
      .collection('concert')
      .onSnapshot(querySnapshot => {
        const concerts = [];
        querySnapshot.forEach(documentSnapshot => {
          concerts.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setConcertData(concerts);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('concert')
        .onSnapshot(querySnapshot => {
          const concerts = [];
          querySnapshot.forEach(documentSnapshot => {
            concerts.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setConcertData(concerts);
        });
      setRefreshing(false);
    }, 1500);
  }, []);
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('SearchPage')}>
          <View style={styles.header}>
            <View style={styles.containerLogo}>
              <Image
                style={styles.logo}
                source={require('../../pic/logo.png')}
              />
            </View>
            <View style={styles.header1}>
              <SearchNormal1 color="#ffffff" variant="Linear" size={24} />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.container2}>
          <Text style={styles.title}>Up Coming</Text>
          {loading && <ActivityIndicator size={'large'} color={'#5ea668'} />}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
          <View style={{paddingVertical: 10, paddingHorizontal:10, gap: 10, flexDirection:'row'}}>
            {!loading &&
              concertData.map((item, index) => (
                <ListUpcoming item={item} key={index} />
              ))}
          </View>
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
