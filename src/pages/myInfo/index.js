import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import fontZ from '../../assets/font/fonts';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {ArrowLeft} from 'iconsax-react-native';
import axios from 'axios';
import {ListMyInfo} from '../../components';
import {UpcomingConcert} from '../../../detail';

const MyInfo = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [concertData, setConcertData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getDataConcert = async () => {
    try {
      const response = await axios.get(
        'https://657b0920394ca9e4af137213.mockapi.io/zeuteeapp/concert',
      );
      setConcertData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataConcert();
      setRefreshing(false);
    }, 1500);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDataConcert();
    }, []),
  );
  return (
    // <ScrollView
    //   showsVerticalScrollIndicator={false}
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //   }>
    //   <View style={styles.container}>
    //     <View style={styles.header}>
    //       <TouchableOpacity onPress={() => navigation.goBack()}>
    //         <ArrowLeft color="#ffffff" variant="Linear" size={24} />
    //       </TouchableOpacity>
    //       <View style={{flex: 1, alignItems: 'center'}}>
    //         <Text style={styles.title}>My Concert Info</Text>
    //       </View>
    //     </View>
    //     <Upcoming />
    //   </View>
    //   <View style={{paddingVertical: 10, gap: 10}}>
    //       {loading ? (
    //         <ActivityIndicator size={'large'} color={'#5ea668'} />
    //       ) : (
    //         concertData.map((item, index) => <ListMyInfo item={item} key={index} />)
    //       )}
    //     </View>
    // </ScrollView>
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft color="#ffffff" variant="Linear" size={24} />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.title}>My Concert Info</Text>
          </View>
        </View>
        {loading && <ActivityIndicator size={'large'} color={'#5ea668'} />}
        <Upcoming />
        <View style={{paddingVertical: 10, gap: 10}}>
          {!loading &&
            concertData.map((item, index) => (
              <ListMyInfo item={item} key={index} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MyInfo;

const Upcoming = () => {
  return (
    <View>
      <ListMyInfo data={UpcomingConcert} />
    </View>
  );
};
// const Upcoming = () => {
//   return (
//     <View>
//       {/* Assuming UpcomingConcert is an array of data */}
//       {UpcomingConcert.map((item, index) => (
//         <ListMyInfo item={item} key={index} />
//       ))}
//     </View>
//   );
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingHorizontal: 24,
    alignItems: 'center', // Fix here
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: fontZ['Pjs-ExtraBold'],
  },
});
