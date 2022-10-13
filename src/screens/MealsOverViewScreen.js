import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {MEALS, CATEGORIES} from '../../data/dummy-data';
import MealItem from './Components/MealItem';

const MealsOverViewScreen = ({route, navigation}) => {
  const {categoryID} = route.params;
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryID) >= 0,
  );

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === categoryID,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryID, navigation]);

  const renderMealItem = ({item}) => {
    return <MealItem meal={item} navigation={navigation} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
