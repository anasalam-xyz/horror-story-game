import './App.css'
import story from './data/story'
import TextArea from './components/TextArea'
import OptionsArea from './components/OptionsArea'
import { useState, useEffect } from 'react'

export default function App() {
    const scenes = story();
    const [saved, setSaved] = useState(()=>localStorage.getItem('saved') || "new_game");
    useEffect(()=>{
        localStorage.setItem('saved', saved);
    }, [saved]);
    return(
        <div className='w-screen h-screen bg-red-700 font-mono flex flex-col justify-center items-center'>
            <TextArea scene={scenes[saved]}/>
            <OptionsArea choices={scenes[saved].choices} setSaved={setSaved}/>
        </div>
    );
}