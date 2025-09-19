import React, { useState } from 'react';
import { Button, Text, View, Image, ScrollView } from 'react-native';
import styles from '../styles/DetailStyles';

export default function DetailScreen({ navigation, route }) {
  const bil = route.params;
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Detaljsidan</Text>
        <Image source={{ uri: bil.image }} style={styles.image} />
        <Text style={styles.carName}>{bil.car_name}</Text>
        {showMoreInfo && (
          <View style={styles.infoContainer}>
            <Text style={styles.redText}>Märke:</Text>
            <Text style={styles.regularText}>{bil.brand}</Text>
            <Text style={styles.redText}>Serie:</Text>
            <Text style={styles.regularText}>{bil.series}</Text>
            <Text style={styles.redText}>Model:</Text>
            <Text style={styles.regularText}>{bil.model}</Text>
            <Text style={styles.redText}>År:</Text>
            <Text style={styles.regularText}>{bil.year}</Text>
            <Text style={styles.redText}>Chassi:</Text>
            <Text style={styles.regularText}>{bil.chassi}</Text>
            <Text style={styles.redText}>HP:</Text>
            <Text style={styles.regularText}>{bil.HP}</Text>
          </View>
        )}
        <Button title={showMoreInfo ? "Visa mindre info" : "Visa mer info"} onPress={toggleMoreInfo} />
      </View>
    </ScrollView>
  );
}