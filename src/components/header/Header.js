import React, { useState, useRef, useEffect } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { logo } from "../../assets/photo"
import LogoutIcon from "@mui/icons-material/Logout";
import { allItems } from '../../constants/Constant'
import HeaderBottom from './HeaderBottom';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



function Header() {
  const products = useSelector((state) => state.amazonReducer.products);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const ref = useRef();
  const [showAll, setShowAll] = useState(false)



  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
    });
  }, [ref, showAll]);

  return (
    <><div className='w-full bg-amazon_blue sticky top-0 z-50'>
      <div className='  text-white px-4 py-3 flex items-center gap-4 mx-auto'>
        {/* logo start here */}
        <div className='headerhover'>
          <img className='md:w-24 md:mt-2 hidden md:inline-flex mt-2' src={logo} alt='logo' />
        </div>
        {/* logo ends here */}
        {/* =============deliver start here ===========*/}
        <div className='headerhover hidden md:inline-flex'>
          <LocationOnIcon />
          <p className='text-sm text-lighttext font-light  flex flex-col '>Deliver to
            <span className='text-sm font-semibold -mt-1 text-whitetext '>hazaribagh</span></p>
        </div>

        {/* =============deliver end here============ */}

        {/* ------------search engine start here--------- */}
        <div className='md:h-10 h-8 rounded-md w-6 flex flex-row md:flex flex-grow relative '>
          <span onClick={() => { setShowAll(!showAll) }} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'> All<span><ArrowDropDownIcon />
          </span>
            {
              showAll && (
                <div>
                  <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap1 z-50'>

                    {
                      allItems.map((item) => (
                        <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-amazon_blue duration-200' key={item.id}> {item.title}</li>
                      ))
                    }
                  </ul>

                </div>
              )
            }
          </span>
          <input className='h-full text-base text-amazon_blue flex flex-grow outline-none border-none px-2' type='text'></input>
          <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
            <SearchIcon />
          </span>

        </div>

        {/* ------------search engine end here-----------*/}


        {/* ============signin buttons options start here =========== */}
        <Link to="/signin">
          <div className=" flex flex-col items-start justify-center headerHover">

            <p className="text-xs  text-lightText font-light">
              Hello, sign in
            </p>

            <p className="hidden md:inline-flex text-sm font-semibold -mt-1 text-whiteText">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownOutlinedIcon />
              </span>
            </p>
          </div>
        </Link>
        {/* ============signin buttons options end here=========== */}

        {/* ================order start here  ======================*/}
        <div className="hidden mdl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>

        {/* ================orders end here============ */}

        {/*Cart icon start */}
        <Link to="/cart">
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold mt-3 text-whiteText">
              Cart
            </p>
            <span className="absolute text-xs top-0 left-6 w-4 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
              {products.length > 0 ? products.length : 0}
            </span>
          </div>
        </Link>
        {userInfo && (
          <div
            className="md:flex flex-col hidden justify-center items-center headerHover relative"
          >
            <LogoutIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
              Log out
            </p>
          </div>
        )}
        {/*===========Cart icon end ================ */}

      </div>
      <HeaderBottom />
    </div>
    </>

  )
}

export default Header;