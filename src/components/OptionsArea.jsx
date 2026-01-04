import Option from "./Option";

export default function OptionsArea({ choices, setSaved }) {
    return(
        <div className="px-8 my-2 flex sm:flex-row font-semibold text-xl">
            {choices && choices.map((choice, index)=><Option key={index} choice={choice} setSaved={setSaved}/>)}
        </div>
    );
}