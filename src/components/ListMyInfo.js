import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import fontZ from '../assets/font/fonts';
import {useNavigation} from '@react-navigation/native';

const truncateDescription = (text, maxLength) => {
    if (!text || typeof text !== 'string') {
      return ''; // atau nilai default sesuai kebutuhan Anda
    }
    const words = text.split(' ');
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(' ') + ' ...';
    }
    return text;
  };

const ItemConcert = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ConcertDetail', {concertId: item.id})
      } style={{ flexDirection:'row', paddingBottom:8 }}>
      <Image
        style={styles.imageUpcoming}
        resizeMode="cover"
        imageStyle={{borderRadius: 10}}
        source={item.UpcomingImage}/>
      <View style={{paddingLeft: 5, paddingTop: 50, width:245}}>
            <Text style={styles.upComingInfo}>{item.artistName}</Text>
            <Text style={styles.upComingText}>{item.event}</Text>
            <Text style={styles.description}>
              {truncateDescription(item.description, 10)}
            </Text>
          </View>
    </TouchableOpacity>
  );
};

const ListMyInfo = ({data}) => {
  const [Calendar, setCalendar] = useState([]);
  const toggleCalendar = itemId => {
    if (Calendar.includes(itemId)) {
      setCalendar(Calendar.filter(id => id !== itemId));
    } else {
      setCalendar([...Calendar, itemId]);
    }
  };
  const renderItem = ({item}) => {
    variant = Calendar.includes(item.id) ? 'Bold' : 'Linear';
    return (
      <ItemConcert
        item={item}
        variant={variant}
        onPress={() => toggleCalendar(item.id)}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 10}}
      showsVerticalScrollIndicator={false}
    />
  );
  // return (
  //   <FlatList
  //     data={data}
  //     keyExtractor={item => item.id}
  //     renderItem={item => renderItem({ ...item })}
  //     ItemSeparatorComponent={itemSeparatorComponent}
  //     contentContainerStyle={contentContainerStyle}
  //     showsVerticalScrollIndicator={false}
  //   />
  // );
};
export default ListMyInfo;

const styles = StyleSheet.create({
  imageUpcoming: {
    resizeMode: 'cover',
    width: 150,
    height: 220,
    borderRadius: 15,
  },
  upComingInfo: {
    paddingLeft: 8,
    fontSize: 18,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-Bold'],
  },
  upComingText: {
    paddingLeft: 8,
    fontSize: 13,
    color: '#e8e8e8',
    fontFamily: fontZ['Pjs-Medium'],
  },
  description: {
    paddingLeft: 8,
    fontSize: 15,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-Regular'],
  },  
});
