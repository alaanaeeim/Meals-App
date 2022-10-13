import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverViewScreen from './src/screens/MealsOverViewScreen';
import MealDetailsScreen from './src/screens/MealDetailsScreen';
import ContextProvider from './src/store/ContextStore';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* <ContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
              headerBackTitleVisible: false,
            }}>
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{
                headerTitleAlign: 'center',
                title: 'All Categories',
              }}
            />
            <Stack.Screen
              name="MealsOverViewScreen"
              component={MealsOverViewScreen}
              options={{
                headerTitleAlign: 'center',
                title: 'All Categories',
              }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                headerTitleAlign: 'center',
                title: 'MealDetails',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </ContextProvider> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});

export default App;
