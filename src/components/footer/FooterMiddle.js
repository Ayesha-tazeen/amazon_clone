import React from 'react'
import FooterMiddleList from './FooterMiddleList';
import { middleList } from '../../constants/Constant';
import { logo } from "../../assets"

function FooterMiddle() {
  return (
    <div className=' w-full bg-amazon_light text-white'>
      {/* =======top start here====== */}
      <div className=' w-full border-b-[1px] border-gray-500 py-10'>
        <div className=' max-w-5xl mx-auto text-gray-300 '>
          <div className=' w-full grid md:grid-cols-4 grid-cols-2 md:place-items-center  ml-10  md:ml-0 md:items-start'>
            {
              middleList.map((item) => (
                <FooterMiddleList key={item._id}
                  title={item.title}
                  listItem={item.listItem} />
              ))
            }

          </div>
        </div>
      </div>
      {/* =============top ends here================ */}
      {/* ==================bottom start here============= */}
      <div className=' w-full flex  gap-2 md:gap-6 items-center justify-center py-3 md:py-6'>
        <div >
          <img className='w-20 pt-3' src={logo} alt='logo' />
        </div>
        <div className='flex gap-2'>
          <p className='flex gap-1 items-center justify-center border border-gray-500 hover:border-y-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
            English
          </p>
        </div>

      </div>

    </div>
  )
}

export default FooterMiddle;