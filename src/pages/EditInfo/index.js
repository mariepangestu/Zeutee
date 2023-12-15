import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import fontZ from '../../assets/font/fonts';
import axios from 'axios';

const EditInfo = ({route}) => {
  const {concertId} = route.params;
  const [concertData, setConcertData] = useState({
    artistName: '',
    event: '',
    description: '',
    date: '',
    info: '',
  });
  const handleChange = (key, value) => {
    setConcertData({
      ...concertData,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getConcertById();
  }, [concertId]);

  const getConcertById = async () => {
    try {
      const response = await axios.get(
        `https://657b0920394ca9e4af137213.mockapi.io/zeuteeapp/concert/${concertId}`,
      );
      setConcertData({
        artistName: response.data.artistName,
        event: response.data.event,
        description: response.data.description,
        date: response.data.date,
        info: response.data.info,
      });
      setImage(response.data.UpcomingImage);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  // const getConcertById = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://657b0920394ca9e4af137213.mockapi.io/zeuteeapp/concert/${concertId}`,
  //     );
  //     const {artistName, event, description, date, info, UpcomingImage} =
  //       response.data;
  //     setConcertData({artistName, event, description, date, info});
  //     setImage(UpcomingImage);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios.put(
        `https://657b0920394ca9e4af137213.mockapi.io/zeuteeapp/concert/${concertId}`,
        {
          image,
          artistName: concertData.artistName,
          event: concertData.event,
          description: concertData.description,
          date: concertData.date,
          info: concertData.info,
        },
      );
      setLoading(false);
      navigation.navigate('MyInfo');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color="#ffffff" variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>Edit Concert Info</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={text => setImage(text)}
            placeholderTextColor="#888888"
            style={textInput.content}
          />
        </View>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Event"
            value={concertData.event}
            onChangeText={text => handleChange('event', text)}
            placeholderTextColor="#888888"
            multiline
            style={textInput.content}
          />
        </View>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Artist"
            value={concertData.artistName}
            onChangeText={text => handleChange('artistName', text)}
            placeholderTextColor="#888888"
            multiline
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed, {minHeight: 250}]}>
          <TextInput
            placeholder="Concert Info"
            value={concertData.description}
            onChangeText={text => handleChange('description', text)}
            placeholderTextColor="#888888"
            multiline
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Date"
            value={concertData.date}
            onChangeText={text => handleChange('date', text)}
            placeholderTextColor="#888888"
            multiline
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Instagram"
            value={concertData.info}
            onChangeText={text => handleChange('info', text)}
            placeholderTextColor="#888888"
            multiline
            style={textInput.content}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonLabel}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default EditInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: fontZ['Pjs-Bold'],
    fontSize: 16,
    color: '#ffffff',
  },
  bottomBar: {
    backgroundColor: '#000000',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: '#888888',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#000000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontZ['Pjs-SemiBold'],
    color: '#ffffff',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#888888',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#888888',
  },
  content: {
    fontSize: 12,
    fontFamily: fontZ['Pjs-Regular'],
    color: '#ffffff',
    padding: 0,
  },
  title: {
    fontSize: 16,
    fontFamily: fontZ['Pjs-SemiBold'],
    color: '#ffffff',
    padding: 0,
  },
});
