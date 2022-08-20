import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
export default function Header() {
    return (
        <div className='header'>
            <div className='header__logo'>
                <StoreFrontIcon className='header__logoImage' fontSize='large' />
                <h2 className="header__logoTitle">eshop</h2>
            </div>
            <div className='header__search'>
                <input type="text" className='header__serachInput' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne">Hello Guest</span>
                    <span className="nav__itemLineTwo">Sign Two</span>

                </div>
                <div className="nav__item">
                    <span className="nav__itemLineOne">your</span>
                    <span className="nav__itemLineTwo">shop</span>
                </div>
                <div  className='nav__itemBasket'>
                    <ShoppingBasketIcon fontSize='large' />
                    <span className="nav__itemLineTwo nav__basketCount">0</span>
                </div>
            </div>

        </div>
    )
}
