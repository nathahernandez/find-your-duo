import { HTMLAttributes } from "react"

interface LabelProps extends HTMLAttributes<HTMLLabelElement>{
    text: string
}

export default function Label (props : LabelProps) {
    return (
        <label htmlFor='yearsPlaying'
        >
            Qual seu Discord?
        </label>
    )
}