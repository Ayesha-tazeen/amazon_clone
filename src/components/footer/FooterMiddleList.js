
import React from 'react'


const FooterMiddleList = ({ title, listItem }) => {

  return (
    <div>
      <h3 className='font-titlefont text-white text-base mt-2 md:mt-0 md:font-semibold font-medium mb-3'>{title}
      </h3>
      <ul className=' flex flex-col   gap-1 md:gap-2 md:font-bodyFont text-sm'>
        {
          listItem.map((item) => (
            item.listdata.map((data, i) => (
              <li key={i} className='footerlink'>{data}</li>
            ))
          ))
        }
      </ul>
    </div>
  )
}

export default FooterMiddleList