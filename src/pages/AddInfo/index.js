import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ArrowLeft } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import fontZ from "../../assets/font/fonts";

const AddInfo = () => {
  const [blogData, setBlogData] = useState({
        artistName : "",
        event : "",
        description : "",
        date : "",
        info : "",
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color='#ffffff' variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Add Concert Info</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={(text) => setImage(text)}
            placeholderTextColor='#888888'
            style={textInput.content}
          />
        </View>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Event"
            value={blogData.event}
            onChangeText={(text) => handleChange("event", text)}
            placeholderTextColor='#888888'
            multiline
            style={textInput.content}
          />
        </View>
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Artist"
            value={blogData.artistName}
            onChangeText={(text) => handleChange("artistName", text)}
            placeholderTextColor='#888888'
            multiline
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 250 }]}>
          <TextInput
            placeholder="Concert Info"
            value={blogData.description}
            onChangeText={(text) => handleChange("description", text)}
            placeholderTextColor='#888888'
            multiline
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Instagram"
            value={blogData.info}
            onChangeText={(text) => handleChange("info", text)}
            placeholderTextColor='#888888'
            multiline
            style={textInput.content}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonLabel}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: fontZ["Pjs-Bold"],
    fontSize: 16,
    color: '#ffffff',
  },
  bottomBar: {
    backgroundColor: '#000000',
    alignItems: "flex-end",
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
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontZ["Pjs-SemiBold"],
    color: '#ffffff',
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#888888',
  },
  title: {
    fontSize: 16,
    fontFamily: fontZ["Pjs-SemiBold"],
    color: '#ffffff',
    padding: 0,
  },
  content: {
    fontSize: 12,
    fontFamily: fontZ["Pjs-Regular"],
    color: '#ffffff',
    padding: 0,
  },
});
