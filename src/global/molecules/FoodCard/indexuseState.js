import React, {useEffect, useCallback,forwardRef,useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, CustomText, Counter} from '../../components';
import {IcMin, IcPlus} from '../../../assets';

const FoodCard = ({id, name, image, price, description, parentCallback}) => {
  const [totalItem, setTotalItem] = React.useState(1),
    [value, setValue] = useState(1);
   var [visible, setVisible] = useState(false);

  const handleCounter = () => {
    setVisible(s => !s);
    parentCallback(totalItem)
  };

  const onCount = type => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);


        parentCallback(result);

  };

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
          <Text style={styles.value}>{value}</Text>
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
