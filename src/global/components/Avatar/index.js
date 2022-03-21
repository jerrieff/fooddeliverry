import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Skeletons from '../Skeletons';
import PropTypes from 'prop-types';
import {ViewPropTypes} from 'react-native';
const defaultImage = require('../../../assets/Dummy/food-dummy1.png');
/**
 * @param {Object} props
 * @param {Number} [props.dimension = 50]
 * @param {any} [props.source]
 * @param {Boolean} [props.loading = false]
 * @param {import('react-native').ViewStyle} [props.style]
 *
 * Exp:
 * <Avatar source={{uri: URL}} dimension={100} />
 */

const Avatar = ({dimension, style, source, loading}) => {
    const [isMounted, setIsMounted] = React.useState(false);

    if (typeof source === 'object' && 'uri' in source) {
        if (!source.uri) {
            source = defaultImage;
        }
    }

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);

    return !isMounted ? null : !loading ? (
        <View
            style={[
                {
                    backgroundColor: '#eee',
                    height: dimension,
                    width: dimension,
                    borderRadius: dimension,
                    overflow: 'hidden',
                },
                style,
            ]}>
            <Image source={source} style={{width: '100%', height: '100%'}} />
        </View>
    ) : (
        <Skeletons>
            <View
                style={[
                    {
                        height: dimension,
                        width: dimension,
                        borderRadius: dimension,
                        overflow: 'hidden',
                    },
                    style,
                ]}
            />
        </Skeletons>
    );
};
Avatar.propTypes = {
    dimension: PropTypes.number,
    style: ViewPropTypes.style,
    source: PropTypes.any,
    loading: PropTypes.bool,
};

Avatar.defaultProps = {
    dimension: 50,
    source: defaultImage,
    loading: false,
};

export default Avatar;
