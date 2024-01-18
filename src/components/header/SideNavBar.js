import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function SideNavBar({ title, one, two, three }) {
    return (
        <div>
            <div>
                <h3 className='text-lg font-titleFont font-semibold mb-1 px-1'>
                    {title}
                </h3>

            </div>
            <ul className='text-sm'>
                <li className='flex justify-between hover:bg-zinc-200 px-2 py-2 cursor-pointer'>
                    {one}{" "}
                    <span>
                        <KeyboardArrowRightIcon />
                    </span>
                </li>
                <li className='flex justify-between hover:bg-zinc-200 px-2 py-2 cursor-pointer'>
                    {two}{" "}
                    <span>
                        <KeyboardArrowRightIcon />
                    </span>
                </li>
                <li className='flex justify-between hover:bg-zinc-200 px-2 py-2 cursor-pointer'>
                    {three}{" "}
                    <span>
                        <KeyboardArrowRightIcon />
                    </span>
                </li>
            </ul></div>
    )
}

export default SideNavBar;