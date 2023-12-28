import React from 'react'
import Navbar from './components/Navbar'
import { useSelector ,useDispatch} from 'react-redux'
import { inc ,dec} from './features/Slicer'
import Button from './components/common/Button'

const App = () => {
  const state = useSelector(state =>state.show)
  const dispatch = useDispatch()
   console.log(state.value)
  return (
    <>
    <Navbar/>
    <div className='flex gap-4'>
      <p>Redux toolkit counter app</p>
    <div className='w-10'>

    <Button onclick={()=>dispatch(inc(1))} style=" bg-gradient-to-r from-[#f817a6] to-[#FF7643] text-white rounded-full text-sm px-3 py-2 " icon="fa-plus" />
    </div>

     
      <h1>
        {state.value}
      </h1>
    <div className='w-10'>

      <Button onclick={()=>dispatch(dec(1))} style=" bg-gradient-to-r from-[#f817a6] to-[#FF7643] text-white rounded-full text-sm px-3 py-2 " icon="fa-minus" />
    </div >
    </div>

    </>
  )
}

export default App