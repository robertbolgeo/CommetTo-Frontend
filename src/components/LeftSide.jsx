import { createContext, useState } from 'react'
import ListEvents from './ListEvents'
import SearchBox from './SearchBox'

export default function LeftSide() {
    const [count, setCount] = useState(0)
    const [inputText, setInputText] = useState("")

    return (
        <>
            <div className='w-2/6 border border-white bg-black text-white'>
                Left Side
                    <div className='m-28 mb-20 border shadow-lg shadow-gray-600 rounded-2xl border-white bg-gray-900'>
                        Search and Tag Box
                        <div className='m-10 border shadow-lg shadow-gray-600 rounded-2xl border-white bg-gray-900'>Search
                        <SearchBox {...{inputText, setInputText}}></SearchBox>
                        </div>
                        <div className='m-10 border shadow-lg shadow-gray-600 rounded-2xl border-white bg-gray-900'>Tags</div>
                    </div>
                    <div className='m-28 mb-0 h-60 border shadow-lg shadow-gray-600 rounded-2xl border-white bg-gray-900'>
                        Events Box
                    </div>
                    <ListEvents {...{inputText}}/>
                <div className='m-28 mb-0 h-28 border shadow-lg shadow-gray-600 rounded-2xl border-white bg-gray-900'>
                    Add Event Button
                </div>
            </div>
        </>
    )
}
