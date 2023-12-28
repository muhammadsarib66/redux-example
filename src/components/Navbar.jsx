import React , {useState} from 'react'
import Button from './common/Button'

const Navbar = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const handlemouseEnter = ()=>{
    setPopoverOpen(true)
  }
  const handlemouseOut = ()=>{
    setPopoverOpen(false)
  }
  const Navlinks = [{
    name:"Features",
  icons:false } , {
    name:"Deals",
  icons:true } , {
    name:"People",
  icons:true } , {
    name:"Extenstion",
  icons: false}]
  return (
    <>
    <div className='md:hidden flex justify-between p-4 '>
    <span className='flex items-center gap-2'>
    <span className='text-3xl text-[#f817a6]
    bg-gradient-to-r from-[#f817a6] to-[#FF7643] bg-clip-text text-transparent
    '> <i className="fa-regular fa-message-captions"></i></span>
    <p className='font-sans font-extrabold text-2xl'> invitation</p>
    </span>

    <div className='text-3xl'>
      <i className="fa-solid fa-bars"></i>
    </div>

    </div>


    <div className='hidden md:block  justify-between p-4 '>
      <div className='flex justify-between'>

<div className='flex gap-8 '>

    <span className='flex  gap-2'>
    <span className='text-3xl text-[#f817a6]
    bg-gradient-to-r from-[#f817a6] to-[#FF7643] bg-clip-text text-transparent
    '> <i className="fa-regular fa-message-captions"></i></span>
    <p className='font-sans font-extrabold text-2xl'> invitation</p>
    </span>

    <div className='flex gap-4 '>
      {
        Navlinks.map((link) => {
          return (
            <>
            <div className={`cursor-pointer  hover:bg-[#F5F5F5] flex items-center gap-2  `} onMouseEnter={handlemouseEnter} onMouseLeave={handlemouseOut}>
              <p className=' font-semibold text-sm'>{link.name}</p>
              {link.icons && <i className="fa-sharp fa-solid fa-chevron-down"></i>}
            </div>
            { link.icons ? isPopoverOpen && (
        <div className="absolute bg-white border border-gray-300 p-4 shadow-md top-10  mt-2 w-48">
          <div className="flex flex-col">
            {/* Dashboard link */}
            <a href="#" className="py-2 hover:text-blue-500">
              Dashboard
            </a>

            {/* Logout link */}
            <a href="*" className="py-2 hover:text-red-500">
              Logout
            </a>
          </div>
        </div>
      )
    : ''
    }
            </>
          )
        })
      }
    </div>
</div>
{/* //for buttons and icons  */}

<div className='flex gap-2'>
<Button style="bg-[#F5F5F5] rounded-full text-sm px-3 py-2 " icon="fa-magnifying-glass" />
<Button style=" bg-gradient-to-r from-[#f817a6] to-[#FF7643] text-white rounded-full text-sm px-3 py-2 " icon="fa-plus" />

<Button style="bg-[#363636] text-white rounded-md text-sm " btnText='Create Account'/>
</div>

      </div>

    </div>
    </>
  )
}

export default Navbar