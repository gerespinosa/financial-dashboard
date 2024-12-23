import { MouseEventHandler } from "react"

declare type BtnProps = {
    text: string;
    variant: string,
    path?: string | StaticImport
    action?: MouseEventHandler<HTMLButtonElement>
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

declare type ProviderProps = {
    children: React.ReactNode
}