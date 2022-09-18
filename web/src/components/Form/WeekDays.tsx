import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { useState } from 'react'

interface Props {
    name: string
    fun: (event : []) => void
    days: string[]
}

export default function WeekDays ({ name, fun, days } : Props) {

    return (
        <ToggleGroup.Root type='multiple' value={days} onValueChange={fun}>
            <ToggleGroup.Item value='0' className={`py-[7px] px-3 w-10 h-10 rounded mr-1 ${days.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`} >
                S
            </ToggleGroup.Item>
            <ToggleGroup.Item value='1' className={`py-[7px] px-3 w-10 h-10 rounded mr-1 ${days.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                T
            </ToggleGroup.Item>
            <ToggleGroup.Item value='2' className={`py-[7px] px-3 w-10 h-10 rounded mr-1 ${days.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                Q
            </ToggleGroup.Item>
            <ToggleGroup.Item value='3' className={`py-[7px] px-3 w-10 h-10 rounded mr-1 ${days.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                Q
            </ToggleGroup.Item>
            <ToggleGroup.Item value='4' className={`py-[7px] px-3 w-10 h-10 rounded ${days.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                S
            </ToggleGroup.Item>
        </ToggleGroup.Root>
    )
}