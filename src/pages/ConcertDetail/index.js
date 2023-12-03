import React, {useState, useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {ArrowCircleLeft, More} from 'iconsax-react-native';
import fontZ from '../../assets/font/fonts';
import {UpcomingConcert} from '../../../detail';
import {useNavigation} from '@react-navigation/native';

const ConcertDetail = ({route}) => {
  const {concertId} = route.params;
  const selectedConcert = UpcomingConcert.find(
    concert => concert.id === concertId,
  );
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 46);
  const headerY = diffClampY.interpolate({
    inputRange: [0, 46],
    outputRange: [0, -46],
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.header, {transform: [{translateY: headerY}]}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowCircleLeft color="#ffffff" variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <More color="#ffffff" variant="Linear" size={24} />
        </View>
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            style={styles.imageRec}
            source={selectedConcert.UpcomingImage}
          />
        </View>
        <View>
          <Text style={styles.artist}>{selectedConcert.artistName}</Text>
          <Text style={styles.event}>{selectedConcert.event}</Text>
          <Text style={styles.description}>{selectedConcert.description}</Text>
          <Text style={styles.description}>Date : {selectedConcert.date}</Text>
          <Text style={styles.description}>
            More Info(Instagram): {selectedConcert.info}
          </Text>
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
      </Animated.ScrollView>
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
    paddingHorizontal: 20,
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 46,
    paddingTop: 12,
    paddingBottom: 4,
    backgroundColor:'#1f1f1f',
  },
  artist: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 25,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-Bold'],
  },
  event: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    fontSize: 20,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-SemiBold'],
  },
  description: {
    paddingLeft: 10,
    paddingRight: 10,
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
