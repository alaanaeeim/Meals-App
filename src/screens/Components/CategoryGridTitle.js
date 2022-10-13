import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './CategoryGridTitle.styles';

const CategoryGridTitle = ({title, color, onPress}) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;
