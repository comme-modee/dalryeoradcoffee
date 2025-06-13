import React from 'react'
import './FloatingButtons.css'
import kakao from '../../asset/img/kakao.png'
import instagram from '../../asset/img/instagram.png'
import { IoIosArrowUp } from 'react-icons/io'

const FloatingButtons = () => {
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    <div className='floating-btn-wrapper'>
        <a
            href='https://pf.kakao.com/_ABCD1234/chat' // ← 여기에 실제 채널 채팅 URL 입력
            target='_blank'
            rel='noopener noreferrer'
            className='btn'
        >
            <img src={kakao} alt='카카오버튼' />
        </a>
        <a
            href='https://www.instagram.com/dalryeora_coffee/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn'
        >
            <img src={instagram} alt='인스타그램버튼' />
        </a>
        <div className='btn' onClick={scrollToTop}>
            <IoIosArrowUp size={20} color="#ffffff" />
            <p>TOP</p>
        </div>
    </div>
  )
}

export default FloatingButtons