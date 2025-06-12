import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo'></Link>
      <div className='menu'>
        <div className='menu-item'>
          <div className='dropdown-trigger'>달려라커피</div>
          <div className='dropdown'>
            <Link to='/about'>회사 소개</Link>
            <Link to='/ceo'>대표 경력 및 성과</Link>
            <Link to='/service'>서비스 소개</Link>
            <Link to='/menu'>메뉴 소개</Link>
          </div>
        </div>
        <div className='menu-item'>
          <Link to='/momostable' className='dropdown-trigger'>모모스테이블</Link>
          {/* <div className='dropdown'>
            <Link to='/momostable/menu'>메뉴</Link>
            <Link to='/momostable/story'>스토리</Link>
          </div> */}
        </div>
        <div className='menu-item'>
          <Link to='roza119' className='dropdown-trigger'>로자119</Link>
          {/* <div className='dropdown'>
            <Link to='/roza119/intro'>소개</Link>
            <Link to='/roza119/contact'>문의</Link>
          </div> */}
        </div>
        <div className='menu-item'>
          <Link to='breathbeside' className='dropdown-trigger'>쉼곁숨 프로젝트</Link>
          {/* <div className='dropdown'>
            <Link to='/breathbeside/about'>소개</Link>
            <Link to='/breathbeside/join'>참여하기</Link>
          </div> */}
        </div>
      </div>
      <div className='mobile'>
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default Header
