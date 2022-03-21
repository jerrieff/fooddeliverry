import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {useEffect} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import isEmpty from '../../utils/isEmpty/isEmpty';
import {COLOR} from '../../styles';

export default ({onPress = () => console.warn('Button Icon Press'), icon = 'arrow-left', color = '#444', style, size = 18, disabled = false}) => {
    const [isMounted, setIsMounted] = React.useState(false);
    useEffect(() => {
        setIsMounted(true);

        return () => {
            setIsMounted(false);
        };
    }, []);
    return !isMounted ? null : (
        <TouchableOpacity disabled={disabled} onPress={() => onPress()} style={{height: 40, width: 40, borderRadius: 50, ...style}}>
            {typeof icon === 'string' ? (
                <Icon
                    name={icon}
                    size={size}
                    color={!isEmpty(COLOR[color]) ? COLOR[color] : color}
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                    }}
                />
            ) : (
                <Image
                    source={icon}
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                    }}
                />
            )}
        </TouchableOpacity>
    );
};
