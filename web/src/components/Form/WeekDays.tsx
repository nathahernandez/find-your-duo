import { HTMLAttributes } from "react"

interface WeekDaysProps extends HTMLAttributes<HTMLButtonElement>{
    content: string
}

export default function WeekDays (props: WeekDaysProps ) {
    return (
        <button
            {...props}
            className='py-[7px] px-3 bg-[#18181B] w-10 h-10 rounded'
        >
            {props.content}
        </button>
    )
}