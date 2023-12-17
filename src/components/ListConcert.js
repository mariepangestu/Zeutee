import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import fontZ from '../assets/font/fonts';
import {CalendarAdd} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const ListUpcoming = ({item, variant, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ConcertDetail', {concertId: item.id})
      }>
        <ImageBackground
          style={styles.imageUpcoming}
          resizeMode="cover"
          imageStyle={{borderRadius: 10}}
          source={{uri: item?.image}}>
          <View style={styles.calendar}>
            <TouchableOpacity onPress={onPress}>
              <CalendarAdd color="#eee" variant={variant} size={25} />
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 8, width: 392}}>
            <Text style={styles.upComingInfo}>{item?.artistName}</Text>
            <Text style={styles.upComingText}>{item?.event}</Text>
          </View>
        </ImageBackground>
    </TouchableOpacity>
  );
};

// const ListUpcoming = ({data}) => {
//   const [Calendar, setCalendar] = useState([]);
//   const toggleCalendar = itemId => {
//     if (Calendar.includes(itemId)) {
//       setCalendar(Calendar.filter(id => id !== itemId));
//     } else {
//       setCalendar([...Calendar, itemId]);
//     }
//   };
//   const renderItem = ({item}) => {
//     variant = Calendar.includes(item.id) ? 'Bold' : 'Linear';
//     return (
//       <ItemConcert
//         item={item}
//         variant={variant}
//         onPress={() => toggleCalendar(item.id)}
//       />
//     );
//   };
//   return (
//     <FlatList
//       data={data}
//       keyExtractor={item => item.id}
//       renderItem={item => renderItem({...item})}
//       ItemSeparatorComponent={() => <View style={{width: 10}} />}
//       contentContainerStyle={{paddingHorizontal: 10}}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//     />
//   );
// };
export default ListUpcoming;

const styles = StyleSheet.create({
  container2: {
    paddingVertical: 5,
    gap: 5,
    justifyContent: 'space-between',
  },
  imageUpcoming: {
    resizeMode: 'cover',
    width: 210,
    height: 280,
    borderRadius: 15,
  },
  upComingInfo: {
    paddingTop: 180,
    paddingLeft: 8,
    justifyContent: 'flex-end',
    fontSize: 18,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-Bold'],
  },
  upComingText: {
    paddingLeft: 8,
    justifyContent: 'flex-end',
    fontSize: 13,
    color: '#e8e8e8',
    fontFamily: fontZ['Pjs-Medium'],
  },
  description: {
    paddingTop: 6,
    fontSize: 15,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-Bold'],
    flexDirection: 'row',
  },
  calendar: {
    paddingLeft: 175,
    paddingTop: 10,
  },
});
