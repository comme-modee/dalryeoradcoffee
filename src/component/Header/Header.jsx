import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const Header = () => {
    const { pathname } = useLocation();

    return (
        <div className={`header ${pathname === '/' ? 'header-main-page' : 'header-other-page'}`}>
            <Link to='/' className='logo'></Link>
            <div className='menu'>
                {/* <div className='menu-item'>
                    <div className='dropdown-trigger'>달려라커피</div>
                    <div className='dropdown'>
                        <Link to='/about'>회사 소개</Link>
                        <Link to='/ceo'>대표 경력 및 성과</Link>
                        <Link to='/business'>사업 소개</Link>
                        <Link to='/service'>서비스 소개</Link>
                        <Link to='/menu'>메뉴 소개</Link>
                    </div>
                </div> */}
                <div className='menu-item'>
                    <Link to='/about' className='dropdown-trigger'>회사소개</Link>
                </div>
                <div className='menu-item'>
                    <Link to='/ceo' className='dropdown-trigger'>대표 경력 및 성과</Link>
                </div>
                <div className='menu-item'>
                    <Link to='/business' className='dropdown-trigger'>사업소개</Link>
                </div>
                <div className='menu-item'>
                    <Link to='/service' className='dropdown-trigger'>서비스소개</Link>
                </div>
                <div className='menu-item'>
                    <Link to='/menu' className='dropdown-trigger'>메뉴소개</Link>
                </div>
                <div className='menu-item'>
                    <Link to='/momostable' className='dropdown-trigger'>모모스테이블</Link>
                </div>
                <div className='menu-item'>
                    <Link to='roza119' className='dropdown-trigger'>로자119</Link>
                </div>
            </div>
            <div className='mobile'>
                <HamburgerMenu />
            </div>
        </div>
    )
}

export default Header
