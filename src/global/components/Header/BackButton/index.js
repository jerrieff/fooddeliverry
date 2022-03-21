import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View, Platform} from 'react-native';
import ButtonIcon from '../../ButtonIcon';
import CustomText from '../../Text';
import {COLOR} from '../../../styles';

export default ({color = 'primary', style, children, textColor = COLOR.white, backNavigate = true}) => {
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
            ]}>
            {backNavigate && <ButtonIcon color={textColor} icon="arrow-left" onPress={() => navigation.pop()} />}
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
