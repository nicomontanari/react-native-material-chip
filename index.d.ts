import {
    Component
} from 'react'
import {
    ViewProperties
} from 'react-native'
import * as sizes from './src/sizes'

interface MaterialChipProps extends ViewProperties {
    text: string
    checked?: boolean
    onPress?: () => void
    leftIcon?: any
    rightIcon?: any
    onDelete?: () => void
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
