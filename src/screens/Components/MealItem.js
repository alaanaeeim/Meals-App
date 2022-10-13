import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import MealDetails from './MealDetails';

const MealItem = ({meal, navigation}) => {
  const {title, imageUrl, duration, complexity, affordability} = meal;
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={() => navigation.navigate('MealDetails', {
          mealID: meal.id,
        })}
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [pressed ? styles.buttonPressed : null]}>
        <View style={styles.imageContainer}>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
