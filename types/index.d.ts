import { MouseEventHandler } from "react"

declare type BtnProps = {
    text: string;
    variant: string,
    path?: string | StaticImport
}

declare type InputProps = {
    type: string;
    placeholder: string;
    name: string
}

declare type NotificationProps = {
    text: string,
    isVisible: boolean
}