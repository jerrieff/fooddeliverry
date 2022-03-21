import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  var [keyword, setKeyword] = useState(),
    [oldKeyword, setOldKeyword] = React.useState('');

  useEffect(() => {
    fetchData('https://randomuser.me/api/?results=20');
  }, []);

  //   useEffect(() => {
  //     navigation.setOptions({
  //       headerLargeTitle: true,
  //       headerTitle: 'Home',
  //       headerRight: () => (
  //         <TouchableOpacity
  //           onPress={() => navigation.navigate('Stack')}
  //           style={{
  //             backgroundColor: 'purple',
  //             width: 30,
  //             height: 30,
  //             borderRadius: 10,
  //             justifyContent: 'center',
  //           }}>
  //           <Text
  //             style={{
  //               fontSize: 20,
  //               textAlign: 'center',
  //               color: 'white',
  //             }}>
  //             ++++++++
  //           </Text>
  //         </TouchableOpacity>
  //       ),
  //       headerSearchBarOptions: {
  //         placeholder: 'Friendhjhvhjvjhvhs',
  //         onChangeText: event => {
  //           searchFilterFunction(event.nativeEvent.text);
  //         },
  //       },
  //     });
  //   }, [navigation]);

  const fetchData = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      setFilteredData(json.results);
    } catch (error) {
      console.error(error);
    }
  };
  const searchFilterFunction = text => {
    let npc = text;

    if (npc) {
      const newData = data.filter(item => {
        const itemData = item.name.first
          ? item.name.first.toUpperCase()
          : ''.toUpperCase();
        const textData = npc.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <ScrollView>
      <Text style={styles.textFriends}> Friend</Text>
      <TextInput
        style={{width: '100%', paddingVertical: 0, paddingHorizontal: 7}}
        value={keyword}
  
        onChangeText={value => {
          searchFilterFunction(value);
        }}
       
       
      />

      {filteredData.map((item, index) => {
        return (
          <View key={index} style={styles.itemContainer}>
            <Image source={{uri: item.picture.large}} style={styles.image} />
            <View>
              <Text style={styles.textName}>
                {item.name.first} {item.name.last}
              </Text>
              <Text style={styles.textEmail}>{item.login.username}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textFriends: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: '600',
  },
  textEmail: {
    fontSize: 14,
    marginLeft: 10,
    color: 'grey',
  },
});

export default HomeScreen;
