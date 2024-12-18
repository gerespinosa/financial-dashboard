import { MouseEventHandler } from "react"

declare type BtnProps = {
    text: string;
    action: MouseEventHandler<HTMLButtonElement>;
    variant: string,
    path?: string | StaticImport
}

declare type InputProps = {
    type: string;
    placeholder: string
}