import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {HambergerMenu, SearchNormal1} from 'iconsax-react-native';
import fontZ from '../../assets/font/fonts';
import {ItemCity, ListUpcoming, ListArtist} from '../../components';
import {UpcomingConcert, ArtistConcert} from '../../../detail';
import {useNavigation} from '@react-navigation/native';

const ConcertDetail = ({route}) => {
  const {concertId} = route.params;
  const selectedConcert = UpcomingConcert.find(
    concert => concert.id === concertId,
  );
  const navigation = useNavigation();
//   const toggleIcon = iconName => {
//     setIconStates(prevStates => ({
//       ...prevStates,
//       [iconName]: {
//         variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
//         color:
//           prevStates[iconName].variant === 'Linear'
//             ? colors.blue()
//             : colors.grey(0.6),
//       },
//     }));
//   };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.grey(0.6)} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <Share color={colors.grey(0.6)} variant="Linear" size={24} />
        </View>
      </View>
      <ScrollView>
        <Image style={styles.imageRec}>{selectedConcert.UpcomingImage}</Image>
        <Text></Text>
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
