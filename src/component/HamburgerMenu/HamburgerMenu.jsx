import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './HamburgerMenu.css'

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  // 메뉴 밖 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <div className='hamburger-menu' ref={menuRef}>
      <div
        className={`hamburger-icon ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setOpen(!open)
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`hamburger-dropdown ${open ? 'open' : ''}`}>
        {/* <p className='menu-item'>달려라커피</p> */}
        <Link to='/about' className='menu-item' onClick={() => setOpen(false)}>회사 소개</Link>
        <Link to='/ceo' className='menu-item' onClick={() => setOpen(false)}>대표 경력 및 성과</Link>
        <Link to='/business' className='menu-item' onClick={() => setOpen(false)}>사업 소개</Link>
        <Link to='/service' className='menu-item' onClick={() => setOpen(false)}>서비스 소개</Link>
        <Link to='/menu' className='menu-item' onClick={() => setOpen(false)}>메뉴 안내</Link>
        {/* <Link to='/about' className='submenu' onClick={() => setOpen(false)}>회사 소개</Link>
        <Link to='/ceo' className='submenu' onClick={() => setOpen(false)}>대표 경력 및 성과</Link>
        <Link to='/business' className='submenu' onClick={() => setOpen(false)}>사업 소개</Link>
        <Link to='/service' className='submenu' onClick={() => setOpen(false)}>서비스 소개</Link>
        <Link to='/menu' className='submenu' onClick={() => setOpen(false)}>메뉴 안내</Link> */}
        <Link to='/momostable' className='menu-item' onClick={() => setOpen(false)}>모모스테이블</Link>
        <Link to='/roza119' className='menu-item' onClick={() => setOpen(false)}>로자119</Link>
        {/* <Link to='/breathbeside' className='menu-item' onClick={() => setOpen(false)}>쉼곁숨 프로젝트</Link> */}
      </nav>
    </div>
  )
}

export default HamburgerMenu
