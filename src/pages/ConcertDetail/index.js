import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ArrowCircleLeft, Share} from 'iconsax-react-native';
import fontZ from '../../assets/font/fonts';
import {UpcomingConcert} from '../../../detail';
import {useNavigation} from '@react-navigation/native';

const ConcertDetail = ({route}) => {
  const {concertId} = route.params;
  const selectedConcert = UpcomingConcert.find(
    concert => concert.id === concertId,
  );
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowCircleLeft color="#ffffff" variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <Share color="#ffffff" variant="Linear" size={24} />
        </View>
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            style={styles.imageRec}
            source={selectedConcert.UpcomingImage}
          />
        </View>
        <View>
          <Text style={styles.artist}>{selectedConcert.artistName}</Text>
          <Text style={styles.event}>{selectedConcert.event}</Text>
          <Text style={styles.description}>{selectedConcert.description}</Text>
          <Text style={styles.description}>Date              : {selectedConcert.date}</Text>
          <Text style={styles.description}>More Info(Instagram): {selectedConcert.info}</Text>
        </View>
        <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 70,
        }}>
        <Text>copyright @ZeuteeApp2023</Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default ConcertDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
  artist:{
    paddingLeft :10,
    paddingRight :10,
    fontSize: 25,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-Bold'],
  },
  event: {
    paddingLeft :10,
    paddingRight :10,
    paddingBottom:30,
    fontSize: 20,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-SemiBold'],
  },
  description: {
    paddingLeft :10,
    paddingRight :10,
    fontSize: 15,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-Regular'],
  },
  imageRec: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    resizeMode: 'cover',
    width: 210,
    height: 300,
    margin: 15,
  },
});
