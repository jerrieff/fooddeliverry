import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useSelector} from 'react-redux';
import {COLOR} from '../../styles';

export default ({children}) => {
    return (
        <SkeletonPlaceholder
            backgroundColor={useSelector((s) => (typeof s.theme?.isDarkMode == 'boolean' ? s.theme?.isDarkMode : false)) ? COLOR.white6 : undefined}
            highlightColor={useSelector((s) => (typeof s.theme?.isDarkMode == 'boolean' ? s.theme?.isDarkMode : false)) ? COLOR.white5 : undefined}>
            {children}
        </SkeletonPlaceholder>
    );
};
