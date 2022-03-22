import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, CustomText} from '../../components';
import {IcMin, IcPlus} from '../../../assets';

const FoodCard = ({id, name, image, price, description, parentCallback}) => {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setVisible(s => !s);
  };

  const onCount = type => {
    if (type === 'plus') {
      setCount(prevCount => prevCount + 1);
    }
    if (type === 'minus' && count > 1) {
      setCount(prevCount => prevCount - 1);
    }
    // setValue(result);
  };

  useEffect(() => {
    if (visible === true) {
      setCount(1);
    } else {
      setCount(0);
    }
  }, [visible]);

  useEffect(() => {
    parentCallback(count, id);
  }, [count, id, parentCallback]);

  return (
    <View style={{padding: 16, flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Avatar dimension={60} style={{marginRight: 10}} />
        <View>
          <CustomText size={12}>{name}</CustomText>
          <CustomText size={12}>{description}</CustomText>
          <CustomText size={12}>{price}</CustomText>
        </View>
      </View>

      <TouchableOpacity onPress={() => handleCounter()}>
        <CustomText>{visible ? 'Hide' : 'Show'}</CustomText>
      </TouchableOpacity>

      {visible && (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => onCount('minus')}>
            <IcMin />
          </TouchableOpacity>
          <Text style={styles.value}>{count}</Text>
          <TouchableOpacity onPress={() => onCount('plus')}>
            <IcPlus />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  value: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 10,
  },
});

export default FoodCard;
