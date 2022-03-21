import {StyleSheet} from 'react-native';
import layout from './layout';
import margin from './margin';
import padding from './padding';

export const COLOR = {
    primary: '#FF7E47',
    primaryDarker: '#d16014',
    primaryLight: '#FFA350',
    secondary: '#03BBFF',
    secondaryDarker: '#04a0d8',
    secondaryLight: '#9be4ff',
    tertiary: '#5692CE',

    black: '#1b1c1e',
    black2: '#1f1f1f',
    black3: '#2b2b2b',
    black4: '#303030',
    silver: '#7f8c8d',
    silver2: '#636e72',

    grey: '#4F5B66',

    white: '#ffffff',
    white1: '#f3f3f3',
    white2: '#F3F7FA',
    white3: '#bbbbbb',
    white4: '#aaaaaa',
    white5: '#888888',
    white6: '#444444',

    success: '#1BA345',
    warning: '#FEC001',
    danger: '#dc3545',
};

export const FONT = {
    medium: 'Quicksand-Medium',
    reqular: 'Quicksand-Regular',
    semibold: 'Quicksand-SemiBold',
    bold: 'Quicksand-Bold',
    default: 'Quicksand-regular',
};

const styles = StyleSheet.create({
    bgPrimary: {backgroundColor: COLOR.primary},
    bgPrimaryDarker: {backgroundColor: COLOR.primaryDarker},
    bgSecondary: {backgroundColor: COLOR.secondary},
    bgWhite: {backgroundColor: COLOR.white},
    bgWhite1: {backgroundColor: COLOR.white1},
    bgBlack: {backgroundColor: COLOR.black},

    bgDanger: {backgroundColor: COLOR.danger},
    bgSuccess: {backgroundColor: COLOR.danger},
    bgWarning: {backgroundColor: COLOR.danger},

    container: {
        flex: 1,
        backgroundColor: COLOR.white1,
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

const _ = {
    ...margin,
    ...padding,
    ...layout,
    ...styles,
};
export default _;
