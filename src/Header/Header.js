import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
    ;
export default function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <>
        <div className='flex items-center justify-between bg-slate-900 h-12 sticky z-50 top-0'>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className=' flex items-center text-orange-400'>
                    <StoreFrontIcon className=' mx-2 my-0 text-orange-400 flex items-center' fontSize='large' />
                    <h2 className="text-white border-none decoration-0">eshop</h2>
                </div>
            </Link>
            <div className=' flex flex-1 items-center mx-8 '>
                <input type="text" className=' h-3 p-3 bottom-0 w-[200px]' />
                <SearchIcon className=' p-1 h-2 bg-yellow-400' />
            </div>
            <div className="hidden sm:flex content-evenly  ">
                <div className=" flex flex-col mx-4 text-white">
                    <span className="text-xs">Hello Guest</span>
                    <span className="text-sm font-bold">Sign Two</span>

                </div>
                <div className="flex flex-col mx-4 text-white">
                    <span className="text-xs">your</span>
                    <span className="text-sm font-bold">shop</span>
                </div>
                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <div className='flex items-center text-white mr-4 ml-2'>
                        <ShoppingBasketIcon fontSize='large' />
                        <span className=" font-bold text-sm mx-2">{basket.length}</span>
                    </div>
                </Link>

            </div>
            
        </div>
        <div className='flex items-center justify-between bg-slate-900 h-12 sticky z-50 top-0 sm:hidden'>
        <div className=" flex flex-col mx-4 text-white">
                    <span className="text-xs">Hello Guest</span>
                    <span className="text-sm font-bold">Sign Two</span>

                </div>
                <div className="flex flex-col mx-4 text-white">
                    <span className="text-xs">your</span>
                    <span className="text-sm font-bold">shop</span>
                </div>
        <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <div className='flex items-center text-white mr-4 ml-2'>
                        <ShoppingBasketIcon fontSize='large' />
                        <span className=" font-bold text-sm mx-2">{basket.length}</span>
                    </div>
                </Link>

        </div>
        </>
    )
}
