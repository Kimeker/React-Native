import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/ListanStyles';

export default function ListScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.4:3000/bilar');
      const json = await response.json();
      setData(json);
    } catch (error) { 
      console.error(error); 
    }
    finally { 
      setLoading(false); 
    }
  };

  const bilKlickad = (bil) => {
    navigation.navigate("Detail", bil);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ _id }) => _id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => bilKlickad(item)}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.carName}>{item.car_name}</Text>
                <Text style={styles.carDetails}>Märke: {item.brand}</Text>
                <Text style={styles.carDetails}>År: {item.year}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}