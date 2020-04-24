import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {
    CHIP_HEIGHT,
    CHIP_LEFT_ICON_RADIUS,
    CHIP_LEFT_ICON_SIZE,
    CHIP_MARGIN,
    CHIP_RADIUS, CHIP_TEXT_MARGIN,
    CHIP_TEXT_SIZE
} from "./sizes";
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string,

    checked: PropTypes.boolean,

    leftIcon: PropTypes.elementType
}

const MaterialChip = props => {


    const _renderLeftIcon = (icon) => {
        if (!icon)
            return null

        return (
            <View
                style={{
                    height: CHIP_LEFT_ICON_SIZE,
                    width: CHIP_LEFT_ICON_SIZE,
                    borderRadius: CHIP_LEFT_ICON_RADIUS
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
                                height: CHIP_LEFT_ICON_SIZE,
                                width: CHIP_LEFT_ICON_SIZE,
                                borderRadius: CHIP_LEFT_ICON_RADIUS
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
                                checked ? (
                                    <Image
                                        style={{
                                            position: leftIcon ? 'absolute' : 'relative',
                                            height: CHIP_LEFT_ICON_SIZE,
                                            width: CHIP_LEFT_ICON_SIZE,
                                        }}
                                        source={
                                            `./assets/${require(leftIcon ? 'check_white.png' : 'check_black.png')}`
                                        }
                                    />
                                ) : null
                            }
                        </View>
                    ) : null
                }
                <Text
                    style={{
                        fontSize: CHIP_TEXT_SIZE,
                        marginRight: CHIP_TEXT_MARGIN,
                        marginLeft: checked || leftIcon ? 0 : CHIP_TEXT_MARGIN,
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

    return (
        <View
            style={[chipStyle.mainContainer, {
                marginLeft: CHIP_MARGIN,
                marginRight: CHIP_MARGIN
            }]}
        >
            {
                _renderContent()
            }
        </View>
    )
}

MaterialChip.propTypes = propTypes;

export default MaterialChip

export const chipStyle = StyleSheet.create({
    mainContainer: {
        borderWidth: 1,
        minHeight: CHIP_HEIGHT,
        borderRadius: CHIP_RADIUS,
        borderColor: '#C4C4C4',
        margin: CHIP_MARGIN
    },
    colorCircle: {
        height: CHIP_LEFT_ICON_SIZE,
        width: CHIP_LEFT_ICON_SIZE,
        borderRadius: CHIP_LEFT_ICON_RADIUS,
        borderColor: '#C4C4C4'
    }
})
