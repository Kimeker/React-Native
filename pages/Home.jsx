import React, { useState, useEffect } from 'react';
import { Button, Text, View, ActivityIndicator, Image } from 'react-native';
import styles from '../styles/HomeStyles';

export default function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [randomCar, setRandomCar] = useState(null);

  const fetchRandomCar = async () => {
    try {
      const response = await fetch('http://192.168.1.4:3000/bilar');
      const cars = await response.json();
      const randomIndex = Math.floor(Math.random() * cars.length);
      setRandomCar(cars[randomIndex]);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomCar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Välkommen till min bilapplikation</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        randomCar && (
          <View style={styles.carContainer}>
            <Image source={{ uri: randomCar.image }} style={styles.image} />
            <Text style={styles.carName}>{randomCar.brand} {randomCar.model}</Text>
            <Text style={styles.carDetails}>År: {randomCar.year}</Text>
            <Text style={styles.carDetails}>Chassi: {randomCar.chassi}</Text>
            <Text style={styles.carDetails}>HP: {randomCar.HP}</Text>
          </View>
        )
      )}
      <Button title="Alla våra bilar" onPress={() => navigation.navigate("ListStack")} />
    </View>
  );
}