import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import CategoryGridTitle from './Components/CategoryGridTitle';

const CategoriesScreen = ({navigation}) => {


  const renderCategoryItem = ({item}) => {

    const pressHandler = () => {
      navigation.navigate('MealsOverViewScreen', {categoryID: item.id});
    };

    return (
      <CategoryGridTitle
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
