import RedFlash from "../RedFlash";
import { useState } from "react";

export default function Option({ choice, setSaved }) {
    const [flash, setFlash] = useState(false);
    const handleChoice = () => {
        triggerFlash();
    }
    const triggerFlash = () => {
        setFlash(true);
        setTimeout(()=>{
            setFlash(false)
            setSaved(choice.next);
        }, 700);
    }
    return(
        <>
            <button className="p-4 border border-b hover:border-white transition-all duration-300 ease-out" onClick={handleChoice}>
                {choice.label}
            </button>
            <RedFlash active={flash}/>
        </>
    );
}