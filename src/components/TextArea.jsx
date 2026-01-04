export default function TextArea({ scene}) {
    return(
        <div className="p-4 sm:px-32 text-xl sm:text-3xl font-bold font-mono text-center">
            {scene&& scene.texts.map((text, index)=>(<p key={index}>{text}</p>))}
            {scene.ending && <>
                <br/>
                <p>THE END</p>
                <p>{scene.title}</p>
            </>}
        </div>
    );
}