import './App.css'
import OptionsArea from './components/OptionsArea'
import TextArea from './components/TextArea'

function App() {
  return (
    <div className='bg-red-800 w-screen h-screen flex flex-col justify-center items-center'>
        <TextArea/>
        <OptionsArea/>
    </div>
  )
}

export default App
