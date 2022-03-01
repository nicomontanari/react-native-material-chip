import React from 'react'
import {
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewPropTypes,
    TextPropTypes,
    View,
    ViewProps,
    StyleProp,
    TextStyle
} from 'react-native'
import * as sizes from './sizes'
import PropTypes from 'prop-types'

const propTypes = {
    /*
     * Prop to override the defaul style
     */
    style: ViewPropTypes,

    /*
     * Prop to override the default text style
     */
    textStyle: TextPropTypes,

    /*
     * Text prop
     */
    text: PropTypes.string,

    /*
     * Control to render the check icon
     */
    checked: PropTypes.bool,

    /*
     * Function called when clicking on the chip
     */
    onPress: PropTypes.func,

    /*
     * Left icon component
     */
    leftIcon: PropTypes.elementType,

    /*
     * Right icon component
     */
    rightIcon: PropTypes.elementType,

    /*
     * Function called when clicking on the right icon of the chip
     */
    onDelete: PropTypes.func
}

interface MaterialChipProps extends ViewProps {
    text: string
    checked?: boolean
    onPress?: () => void
    leftIcon?: any
    rightIcon?: any
    onDelete?: () => void
    textStyle?: StyleProp<TextStyle>
}

const MaterialChipComponent: React.FC<MaterialChipProps> = React.memo((props) => {
    // Render the right icon
    const _renderRightIcon = (icon) => {
        // If there isn't a custom icon it renders the default icon
        if (!icon) {
            return (
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
            )
        }

        return (
            <View
                style={{
                    height: sizes.CHIP_RIGHT_ICON_SIZE,
                    width: sizes.CHIP_RIGHT_ICON_SIZE,
                    borderRadius: sizes.CHIP_RIGHT_ICON_RADIUS
                }}
            >
                {icon}
            </View>
        )
    }

    // Render the right icon touchable
    const _checkRightIconTouch = () => {
        // If onDelete function is passed it renders the touchable component
        if (props.onDelete !== undefined) {
            return (
                <TouchableOpacity onPress={() => props.onDelete?.()}>
                    {_renderRightIcon(props.rightIcon)}
                </TouchableOpacity>
            )
        }

        // If the custom icon is passed it renders the icon without touchable component
        if (props.rightIcon) {
            return _renderRightIcon(props.rightIcon)
        }

        return null
    }

    // Render the left icon
    const _renderLeftIcon = (icon) => {
        // If the icon isn't passed it renders nothing
        if (!icon) {
            return null
        }

        return (
            <View
                style={{
                    height: sizes.CHIP_LEFT_ICON_SIZE,
                    width: sizes.CHIP_LEFT_ICON_SIZE,
                    borderRadius: sizes.CHIP_LEFT_ICON_RADIUS
                }}
            >
                {icon}
                {props.checked ? (
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
                ) : null}
            </View>
        )
    }

    const _renderContent = () => {
        const textStyleProp = props.textStyle !== undefined ? props.textStyle : {}

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                {props.checked || props.leftIcon ? (
                    <View
                        style={{
                            marginLeft: PixelRatio.roundToNearestPixel(4),
                            marginRight: PixelRatio.roundToNearestPixel(8)
                        }}
                    >
                        {_renderLeftIcon(props.leftIcon)}
                        {props.checked ? (
                            props.leftIcon ? (
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
                            )
                        ) : null}
                    </View>
                ) : null}
                <Text
                    style={[
                        {
                            fontSize: sizes.CHIP_TEXT_SIZE,
                            marginRight: props.rightIcon || props.onDelete ? 0 : sizes.CHIP_TEXT_MARGIN,
                            marginLeft: props.checked || props.leftIcon ? 0 : sizes.CHIP_TEXT_MARGIN,
                            color: 'rgba(0, 0, 0, 0.87)'
                        },
                        textStyleProp
                    ]}
                >
                    {props.text}
                </Text>
                {props.rightIcon || props.onDelete ? (
                    <View
                        style={{
                            marginLeft: PixelRatio.roundToNearestPixel(8),
                            marginRight: PixelRatio.roundToNearestPixel(8)
                        }}
                    >
                        {_checkRightIconTouch()}
                    </View>
                ) : null}
            </View>
        )
    }

    const styleProp = props.style !== undefined ? props.style : {}

    if (props.onPress !== undefined) {
        return (
            <TouchableOpacity onPress={() => props.onPress?.()}>
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
                    {_renderContent()}
                </View>
            </TouchableOpacity>
        )
    }

    return (
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
            {_renderContent()}
        </View>
    )
})

// @ts-ignore
MaterialChipComponent.propTypes = propTypes

interface Sizes {
    CHIP_HEIGHT: number
    CHIP_RADIUS: number
    CHIP_MARGIN: number
    CHIP_TEXT_SIZE: number
    CHIP_TEXT_MARGIN: number
    CHIP_LEFT_ICON_SIZE: number
    CHIP_LEFT_ICON_RADIUS: number
    CHIP_RIGHT_ICON_SIZE: number
    CHIP_RIGHT_ICON_RADIUS: number
}

const MaterialChip: typeof MaterialChipComponent & Sizes = MaterialChipComponent as any

Object.assign(MaterialChip, sizes)

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

export default MaterialChip
