import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import * as sizes from "./sizes"
import PropTypes from 'prop-types'

const propTypes = {
    text: PropTypes.string,

    checked: PropTypes.boolean,

    leftIcon: PropTypes.elementType,

    onPress: PropTypes.function
}

const MaterialChip = props => {


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
        const {
            checked,
            text,
            leftIcon
        } = props

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                {
                    checked || leftIcon ? (
                        <View
                            style={{
                                marginLeft: 4,
                                marginRight: 8
                            }}
                        >
                            {
                                _renderLeftIcon(leftIcon)
                            }
                            {
                                checked ? leftIcon ? (
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
                        marginRight: sizes.CHIP_TEXT_MARGIN,
                        marginLeft: checked || leftIcon ? 0 : sizes.CHIP_TEXT_MARGIN,
                        color: 'rgba(0, 0, 0, 0.87)'
                    }}
                >
                    {
                        text
                    }
                </Text>
            </View>
        )
    }

    return props.onPress ? (
        <TouchableOpacity
            onPress={() => props.onPress()}
        >
            <View
                style={[chipStyle.mainContainer, {
                    marginLeft: sizes.CHIP_MARGIN,
                    marginRight: sizes.CHIP_MARGIN
                }]}
            >
                {
                    _renderContent()
                }
            </View>
        </TouchableOpacity>
    ) : (
        <View
            style={[chipStyle.mainContainer, {
                marginLeft: sizes.CHIP_MARGIN,
                marginRight: sizes.CHIP_MARGIN
            }]}
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
