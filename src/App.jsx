import { useState } from 'react'
import Fetch from './components/fetch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid place-items-center text-center gap-4'>
        <div className='text-4xl font-medium text-lime-600'>World Tour With React</div>
        <Fetch></Fetch>
      </div>
    </>
  )
}

export default App
