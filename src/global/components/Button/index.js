import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {ActivityIndicator, TouchableOpacity, ViewPropTypes} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomText from '../Text';
import {COLOR} from '../../styles';
import isEmpty from '../../utils/isEmpty/isEmpty';

/**
 * Component
 * @augments {Component<Props, State>}
 *
 *
 * example:
 *  <Button>
 *      SELANJUTNYA
 *  </Button>
 *
 *
 */

export default class extends Component {
    static propTypes = {
        numberOfLines: PropTypes.any,
        children: PropTypes.any,
        expand: PropTypes.bool,
        style: ViewPropTypes.style,
        onPress: PropTypes.func,
        loading: PropTypes.bool,
        color: PropTypes.string,
        disable: PropTypes.bool,
        icon: PropTypes.any,
        textColor: PropTypes.string,
        rounded: PropTypes.bool,
        outline: PropTypes.bool,
        small: PropTypes.bool,
        outlineWithBackground: PropTypes.bool,
        colorOutLine: PropTypes.string,
    };

    static defaultProps = {
        numberOfLines: 3,
        expand: true,
        onPress: () => console.warn('ButtonComponent: OnPress Kosong'),
        color: 'primary', // 'primary', 'secondary'
        small: false,
        loading: false,
        textColor: '',
        disable: false,
        rounded: false,
        outline: false,
        outlineWithBackground: false,
        colorOutLine: '',
    };

    render = () => {
        const {
            children,
            numberOfLines,
            expand,
            style,
            onPress,
            loading,
            color,
            disable,
            icon,
            rounded,
            outline,
            outlineWithBackground,
            small,
            colorOutLine,
        } = this.props;
        let textColor = !isEmpty(this.props?.textColor) ? this.props?.textColor : outline ? (!isEmpty(color) ? color : 'primary') : COLOR.white;

        return (
            <TouchableOpacity
                disabled={disable}
                activeOpacity={loading ? 1 : 0.7}
                onPress={() => {
                    if (!loading && !disable) {
                        onPress();
                    }
                }}
                style={[
                    {
                        borderRadius: rounded ? 100 : 4,
                        height: !small ? 45 : 35,
                        padding: 4,
                        paddingHorizontal: !expand ? 8 : 4,
                        borderWidth: outline ? 1 : 0,
                        borderColor: !outline ? undefined : disable ? COLOR.silver : COLOR[color] ? COLOR[color] : color,
                        backgroundColor: outline
                            ? !outlineWithBackground
                                ? 'transparent'
                                : disable
                                ? COLOR.silver
                                : COLOR[colorOutLine]
                                ? COLOR[colorOutLine]
                                : colorOutLine
                            : COLOR[color]
                            ? disable
                                ? COLOR.silver
                                : COLOR[color]
                            : disable
                            ? COLOR.silver
                            : color,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: !expand ? 'center' : undefined,
                    },
                    style,
                ]}>
                {loading ? (
                    <ActivityIndicator color={!outline ? COLOR.white : COLOR[textColor] ? COLOR[textColor] : textColor} />
                ) : (
                    <>
                        {typeof icon === 'string' && (
                            <Icon
                                size={!small ? 14 : 10}
                                name={icon}
                                color={!outline ? textColor : COLOR[textColor] ? COLOR[textColor] : textColor}
                                style={{marginRight: 8}}
                            />
                        )}
                        <CustomText
                            numberOfLines={numberOfLines}
                            size={!small ? 16 : 12}
                            color={
                                !outline || outlineWithBackground
                                    ? textColor
                                    : disable
                                    ? COLOR.silver
                                    : COLOR[textColor]
                                    ? COLOR[textColor]
                                    : textColor
                            }>
                            {children}
                        </CustomText>
                    </>
                )}
            </TouchableOpacity>
        );
    };
}
