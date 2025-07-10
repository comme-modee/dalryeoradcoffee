import React, { useState } from 'react'
import './css/Common.css'
import './css/Business.css'
import businessBreathingImage1 from '../asset/img/ppt/business-breathing-01.jpg';
import businessBreathingImage2 from '../asset/img/ppt/business-breathing-02.jpg';
import businessWaldenImage1 from '../asset/img/ppt/business-walden-01.jpg';

const Business = () => {
    const [activeTab, setActiveTab] = useState('브리딩커피바');

return (
    <div className='container-business'>
        <div className={`intro-img ${activeTab === '브리딩커피바' ? 'intro-img-breathing' : 'intro-img-walden'}`}></div>
        <div className='content'>
            <div className='title-container'>
                <div
                    className={`title ${activeTab === '브리딩커피바' ? 'active' : ''}`}
                    onClick={() => setActiveTab('브리딩커피바')}
                >
                    브리딩커피바 소셜프랜차이즈 사업
                </div>
                <div
                    className={`title ${activeTab === '월든' ? 'active' : ''}`}
                    onClick={() => setActiveTab('월든')}
                >
                    월든 청년숲학교
                </div>
            </div>
            <div className='img-container'>
                {activeTab === '브리딩커피바' && (
                <>
                    <img src={businessBreathingImage1} alt='브리딩 이미지1' />
                    <img src={businessBreathingImage2} alt='브리딩 이미지2' />
                </>
                )}
                {activeTab === '월든' && (
                <>
                    <img src={businessWaldenImage1} alt='월든 이미지' />
                </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Business