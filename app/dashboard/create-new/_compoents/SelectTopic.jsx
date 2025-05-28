'use client'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select"
import { Textarea } from '../../../../components/ui/textarea';


function SelectTopic({ onUserSelect }) {
    const options = ['Custom Prompt','Random AI Story','Scary Story','Funny Story','Romantic Story','Action Story','Adventure Story','Drama Story','Mystery Story','Fantasy Story'];
    const [selectedOption, setSelectedOption] = useState();
    return (
    <div>
        <h2 className='font-bold text-2xl text-primary'>
            Content
        </h2>
        <p className='text-gray-500'>What is the topic of your videos</p>
        <Select onValueChange={(value) => {
            setSelectedOption(value)
            value!='Custom Prompt' &&onUserSelect('topic',value)
            }}>
            <SelectTrigger className="w-full mt-2 p-6 text-lg">
                <SelectValue placeholder="Content Types" />
            </SelectTrigger>
            <SelectContent>
                {options.map((item, index) => (
                    <SelectItem key={index} value={item} >{item}</SelectItem>
                ))}
            </SelectContent>
        </Select>

        {selectedOption == 'Custom Prompt'&&
            <Textarea className='mt-3'
            onChange={(e)=>onUserSelect('topic',e.target.value)}
            placeholder='Write promt on which you want to generate video'></Textarea>
        }

    

    </div>
  )
}

export default SelectTopic