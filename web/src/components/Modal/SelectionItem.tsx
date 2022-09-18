import * as Select from '@radix-ui/react-select'
import { Check } from 'phosphor-react'

interface SelectionItemProps {
    name: string
    key: string
}

export default function SelectionItem (props : SelectionItemProps) {
    return (
            <Select.Item className='
            flex 
            items-center 
            justify-start 
            row
            rounded
            py-3 px-4
            font-medium
            hover:bg-zinc-800
            cursor-default' 
            
            value={props.name}
            >
                        <Select.ItemIndicator className='mr-2'>
                        <Check className='text-white' size={16}/>
                        </Select.ItemIndicator>
                        <Select.ItemText className='text-white'>
                        {props.name}
                        </Select.ItemText>
            </Select.Item>
        )
}