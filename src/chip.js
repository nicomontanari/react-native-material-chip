import React from 'react'
import {
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewPropTypes,
    View
} from 'react-native'
import * as sizes from "./sizes"
import PropTypes from 'prop-types'

const viewPropTypes = ViewPropTypes || View.propTypes

const propTypes = {
    style: viewPropTypes,

    text: PropTypes.string,

    checked: PropTypes.boolean,

    onPress: PropTypes.function,

    leftIcon: PropTypes.elementType,

    rightIcon: PropTypes.elementType,

    onDelete: PropTypes.function
}

const MaterialChip = props => {

    const _renderRightIcon = (icon) => {

        if (!icon)
            return (
                <TouchableOpacity
                    onPress={() => props.onDelete()}
                >
                    <View
                        style={{
                            height: sizes.CHIP_RIGHT_ICON_SIZE,
                            width: sizes.CHIP_RIGHT_ICON_SIZE,
                            borderRadius: sizes.CHIP_RIGHT_ICON_RADIUS
                        }}
                    >
                        <Image
                            style={{
                                height: sizes.CHIP_RIGHT_ICON_SIZE,
                                width: sizes.CHIP_RIGHT_ICON_SIZE
                            }}
                            source={require(`./assets/cancel_black.png`)}
                        />
                    </View>
                </TouchableOpacity>
            )

        return <View
            style={{
                height: sizes.CHIP_RIGHT_ICON_SIZE,
                width: sizes.CHIP_RIGHT_ICON_SIZE,
                borderRadius: sizes.CHIP_RIGHT_ICON_RADIUS
            }}
        >
            {
                icon
            }
        </View>
    }

    const _renderLeftIcon = (icon) => {
        if (!icon)
            return null

        return (
            <View
                style={{
                    height: sizes.CHIP_LEFT_ICON_SIZE,
                    width: sizes.CHIP_LEFT_ICON_SIZE,
                    borderRadius: sizes.CHIP_LEFT_ICON_RADIUS
                }}
            >
                {
                    icon
                }
                {
                    props.checked ? (
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                backgroundColor: '#000',
                                opacity: 0.2,
                                height: sizes.CHIP_LEFT_ICON_SIZE,
                                width: sizes.CHIP_LEFT_ICON_SIZE,
                                borderRadius: sizes.CHIP_LEFT_ICON_RADIUS
                            }}
                        />
                    ) : null
                }
            </View>
        )
    }

    const _renderContent = () => {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                {
                    props.checked || props.leftIcon ? (
                        <View
                            style={{
                                marginLeft: PixelRatio.roundToNearestPixel(4),
                                marginRight: PixelRatio.roundToNearestPixel(8)
                            }}
                        >
                            {
                                _renderLeftIcon(props.leftIcon)
                            }
                            {
                                props.checked ? props.leftIcon ? (
                                    <Image
                                        style={{
                                            position: 'absolute',
                                            height: sizes.CHIP_LEFT_ICON_SIZE,
                                            width: sizes.CHIP_LEFT_ICON_SIZE
                                        }}
                                        source={require(`./assets/check_white.png`)}
                                    />
                                ) : (
                                    <Image
                                        style={{
                                            position: 'relative',
                                            height: sizes.CHIP_LEFT_ICON_SIZE,
                                            width: sizes.CHIP_LEFT_ICON_SIZE
                                        }}
                                        source={require(`./assets/check_black.png`)}
                                    />
                                ) : null
                            }
                        </View>
                    ) : null
                }
                <Text
                    style={{
                        fontSize: sizes.CHIP_TEXT_SIZE,
                        marginRight: props.rightIcon || props.onDelete ? 0 : sizes.CHIP_TEXT_MARGIN,
                        marginLeft: props.checked || props.leftIcon ? 0 : sizes.CHIP_TEXT_MARGIN,
                        color: 'rgba(0, 0, 0, 0.87)'
                    }}
                >
                    {
                        props.text
                    }
                </Text>
                {
                    props.rightIcon || props.onDelete ? (
                        <View
                            style={{
                                marginLeft: PixelRatio.roundToNearestPixel(8),
                                marginRight: PixelRatio.roundToNearestPixel(8)
                            }}
                        >
                            {
                                _renderRightIcon(props.rightIcon)
                            }
                        </View>
                    ) : null
                }
            </View>
        )
    }

    const styleProp = props.style !== undefined ? props.style : {}

    return props.onPress ? (
        <TouchableOpacity
            onPress={() => props.onPress()}
        >
            <View
                style={[
                    styleProp,
                    chipStyle.mainContainer,
                    {
                        marginLeft: sizes.CHIP_MARGIN,
                        marginRight: sizes.CHIP_MARGIN
                    }
                ]}
            >
                {
                    _renderContent()
                }
            </View>
        </TouchableOpacity>
    ) : (
        <View
            style={[
                styleProp,
                chipStyle.mainContainer,
                {
                    marginLeft: sizes.CHIP_MARGIN,
                    marginRight: sizes.CHIP_MARGIN
                }
            ]}
        >
            {
                _renderContent()
            }
        </View>
    )
}

MaterialChip.propTypes = propTypes;

Object.assign(MaterialChip, sizes)

export default MaterialChip

export const chipStyle = StyleSheet.create({
    mainContainer: {
        alignSelf: 'flex-start',
        borderWidth: 1,
        minHeight: sizes.CHIP_HEIGHT,
        borderRadius: sizes.CHIP_RADIUS,
        borderColor: '#C4C4C4',
        margin: sizes.CHIP_MARGIN
    },
    colorCircle: {
        height: sizes.CHIP_LEFT_ICON_SIZE,
        width: sizes.CHIP_LEFT_ICON_SIZE,
        borderRadius: sizes.CHIP_LEFT_ICON_RADIUS,
        borderColor: '#C4C4C4'
    }
})
