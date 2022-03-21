import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View, Platform} from 'react-native';
import {COLOR} from '../styles';
import ButtonIcon from './ButtonIcon';
import CustomText from './Text';

export default ({color = 'primary', style, children, textColor = COLOR.white, enableBack = true, onLayout = () => {}, onBack}) => {
    const navigation = useNavigation();
    return (
        <View
            style={[
                {
                    paddingTop: Platform.OS == 'ios' ? 40 : StatusBar.currentHeight,
                    paddingBottom: 12,
                    paddingHorizontal: 16,
                    flexDirection: 'row',
                    backgroundColor: COLOR[color] ? COLOR[color] : color,
                    alignItems: 'center',
                },
                style,
            ]}
            onLayout={(event) => onLayout(event)}>
            {enableBack === true && (
                <ButtonIcon color={textColor} icon="arrow-left" onPress={() => (typeof onBack === 'function' ? onBack() : navigation.pop())} />
            )}
            {typeof children === 'string' ? (
                <CustomText size="18" color={textColor} style={{flex: 1, marginLeft: 8}}>
                    {children}
                </CustomText>
            ) : (
                children
            )}
        </View>
    );
};
