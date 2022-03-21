import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    flex: {flex: 1},
    flexGrow: {flexGrow: 1},
    flexGrow0: {flexGrow: 0},
    flexShrink0: {flexShrink: 0},
    flexShrink: {flexShrink: 1},
    flexWrap: {flexWrap: 'wrap'},
    row: {flexDirection: 'row'},
    column: {flexDirection: 'column'},

    itemsCenter: {alignItems: 'center'},
    itemsEnd: {alignItems: 'flex-end'},
    itemsStart: {alignItems: 'flex-start'},

    contentStart: {justifyContent: 'flex-start'},
    contentEnd: {justifyContent: 'flex-end'},
    contentBetween: {justifyContent: 'space-between'},
    contentArround: {justifyContent: 'space-around'},
    contentEvenly: {justifyContent: 'space-evenly'},
    contentCenter: {justifyContent: 'center'},

    selfCenter: {alignSelf: 'center'},
    selfStart: {alignSelf: 'flex-start'},
    selfEnd: {alignSelf: 'flex-end'},
});
