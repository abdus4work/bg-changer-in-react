import { useState } from 'react'
import Button from './components/Button';


function App() {
  const [color,setColor]=useState("olive");
  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-2'>
          <div className='flex flex-wrap bg-white px-4 py-2 rounded-full gap-3'>
            <Button btnColor="bg-red-600" btnText="Red" onclick={()=>setColor("red")} />
            <Button btnColor="bg-green-600" btnText="Green" onclick={()=>setColor("green")} />
            <Button btnColor="bg-blue-600" btnText="Blue" onclick={()=>setColor("blue")} />
            <Button btnColor="bg-orange-600" btnText="Orange" onclick={()=>setColor("orange")} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
