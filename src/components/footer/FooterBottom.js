import React from 'react'
import { footerBottomItem } from '../../constants/Constant'

function FooterBottom() {
  return (
    <div className=' w-full bg-footerbottom py-8 '>
      <div className='max-w-5xl mx-auto'>
        <div className=' w-full grid md:grid-cols-4 grid-cols-3 ml-3 md:ml-0 gap-3 place-content-center text-gray-400'>
          {footerBottomItem.map((Item) => (
            <div className='group  cursor-pointer' key={Item._id}>
              <h3 className='footerBottomTitle'>{Item.title}</h3>
              <p className='footerBottomText'>{Item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FooterBottom