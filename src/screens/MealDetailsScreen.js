import React, {useLayoutEffect, useContext, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {MEALS} from '../../data/dummy-data';
import MealDetails from './Components/MealDetails';
import Icons from 'react-native-vector-icons/MaterialIcons';
// import {ContextStoreProvider} from './../store/ContextStore';
import {useSelector, useDispatch} from 'react-redux';
import {addFavourite, removeFavourite} from '../store/slices/faviourites';

const MealDetailsScreen = ({route, navigation}) => {
  const mealID = route.params.mealID;
  const selectedMeal = MEALS.find(meal => meal.id === mealID);
  // const context = useContext(ContextStoreProvider);
  const favouriteMeals = useSelector(state => state.favouriteMeals.Ids);
  const [mealFaviourited, setMealFaviourited] = useState(false);
  const dispatch = useDispatch();
  

  const addMealToFaviourite = () => {
    // !mealFaviourited? context.addFaviouriteMeal(mealID): context.removeFaviouriteMeal(mealID);
    console.log('addMealToFaviourite', mealID);
    !mealFaviourited ? dispatch(addFavourite({id: mealID})) : dispatch(removeFavourite({id: mealID}));
  }

  useEffect(() => {
    setMealFaviourited(favouriteMeals.includes(mealID));
    console.log(favouriteMeals);
  }, [favouriteMeals, addMealToFaviourite]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={addMealToFaviourite}>
            <Icons name="favorite" size={30} color={mealFaviourited? 'blue' : 'white'} />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, addMealToFaviourite]);

  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.textStyle}
      />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View>
      {selectedMeal.ingredients.map(ingredient => {
        return (
          <Text style={styles.stepGrediant} key={ingredient}>
            {ingredient}
          </Text>
        );
      })}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subtitle}>Steps</Text>
      </View>

      {selectedMeal.steps.map(step => {
        return (
          <Text style={styles.stepGrediant} key={step}>
            {step}
          </Text>
        );
      })}
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  textStyle: {
    color: '#fff',
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
  },
  stepGrediant: {
    textAlign: 'center',
    backgroundColor: '#e2b497',
    marginVertical: 8,
    marginHorizontal: 24,
    padding: 6,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  rightBtn: {
    color: '#6461dd',
  },
});
