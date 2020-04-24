import { Component } from 'react'

declare module 'react-native-material-chip' {
    interface MaterialChipProps {
        text: string
        checked?: boolean
        leftIcon?: any
    }

    export default class MaterialChip extends Component<MaterialChipProps> {

    }
}
