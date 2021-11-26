import {
    Component
} from 'react'
import {
    ViewProps,
    StyleProp,
    TextStyle
} from 'react-native'
import * as sizes from './src/sizes'

interface MaterialChipProps extends ViewProps {
    text: string
    checked?: boolean
    onPress?: () => void
    leftIcon?: any
    rightIcon?: any
    onDelete?: () => void,
    textStyle?: StyleProp<TextStyle>;
}

export default class MaterialChip extends Component<MaterialChipProps> {
    public static readonly CHIP_HEIGHT = sizes.CHIP_HEIGHT
    public static readonly CHIP_RADIUS = sizes.CHIP_RADIUS
    public static readonly CHIP_MARGIN = sizes.CHIP_MARGIN
    public static readonly CHIP_TEXT_SIZE = sizes.CHIP_TEXT_SIZE
    public static readonly CHIP_TEXT_MARGIN = sizes.CHIP_TEXT_MARGIN
    public static readonly CHIP_LEFT_ICON_SIZE = sizes.CHIP_LEFT_ICON_SIZE
    public static readonly CHIP_LEFT_ICON_RADIUS = sizes.CHIP_LEFT_ICON_RADIUS
    public static readonly CHIP_RIGHT_ICON_SIZE = sizes.CHIP_RIGHT_ICON_SIZE
    public static readonly CHIP_RIGHT_ICON_RADIUS = sizes.CHIP_RIGHT_ICON_RADIUS
}
