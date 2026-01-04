export default function RedFlash({ active }) {
    return (
        <div className={`
            h-screen w-screen fixed inset-0 bg-red-700
            transition-opacity duration-700
            pointer-events-none
            ${active ? "opacity-100" : "opacity-0"}`}></div>
    );
}