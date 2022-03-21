import React, {useEffect} from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
import {FONT, COLOR} from '../../styles';

/**
 *
 * @param {Object} props
 * @param {String} [props.color = "black"]
 * @param {("thin" | "medium" | "semibold" | "bold")} [props.weight = "medium"]
 * @param {Number} [props.size = 16]
 * @param {("left" | "center" | "right")} [props.align = 'left']
 * @param {Number} [props.numberOfLines]
 * @param {("head" | "middle" | "tail" | "clip")} [props.ellipsizeMode = 'tail']
 * @param {StyleProp<TextStyle>} [props.style]
 */

export default ({
    color = COLOR.black,
    weight = 'medium', // lowercase, medium || reqular || semibold || bold
    size = 16,
    align = 'left',
    style,

    children,
    numberOfLines,
    ellipsizeMode,
}) => {
    const [isMounted, setIsMounted] = React.useState(false);
    useEffect(() => {
        setIsMounted(true);

        return () => {
            setIsMounted(false);
        };
    }, []);

    const styles = {
        color: COLOR[color] ? COLOR[color] : typeof color == 'string' ? color : COLOR.black,
        fontFamily: FONT[weight],
        fontSize: typeof size === 'string' ? parseInt(size, 10) : size,
        textAlign: align,
    };

    return !isMounted ? null : (
        <Text style={[styles, style]} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode}>
            {children}
        </Text>
    );
};
