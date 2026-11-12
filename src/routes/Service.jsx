import React from 'react'
import './css/Common.css'
import './css/Service.css'

const Service = () => {
    return (
        <div className='container container-service'>
            <div className='intro-img'></div>
            <div className='content'>
                <div className='text'>
                    <p>전국 어디든, 원하는 행사에 맞춤형 커피 서비스 제공</p>
                    <p>입소문 1등 커피트럭, 달려라커피</p>
                </div>
                <div className='item item-1'>
                    <div className='title'>
                        연예인 서포트
                    </div>
                    <div className='sub-title'>
                        영화・드라마 등 촬영장 서포트
                    </div>
                    <div className='img-container img-container-1'>
                        <div className='img'><span>댄서 바다 서포트</span></div>
                        <div className='img'><span>배우 공명 서포트</span></div>
                        <div className='img'><span>가수 방탄소년단 진 서포트</span></div>
                    </div>
                    <div className='img-container img-container-2'>
                        <div className='img'><span>배우 김선호 서포트</span></div>
                        <div className='img'><span>배우 전여빈 서포트</span></div>
                        <div className='img'><span>배우 안효섭 서포트</span></div>
                    </div>
                </div>
                <div className='item item-wedding'>
                    <div className='title'>
                        웨딩・결혼식
                    </div>
                    <div className='sub-title'>
                        육군사관학교 화랑정원・용산가족공원・양재시민의숲
                    </div>
                    <div className='img-container'>
                        <div className='img'><span>육군사관학교 화랑정원</span></div>
                        <div className='img'><span>용산가족공원</span></div>
                        <div className='img'><span>양재시민의숲</span></div>
                    </div>
                </div>
                <div className='item item-4'>
                    <div className='title'>
                        학원 홍보 이벤트
                    </div>
                    <div className='sub-title'>
                        원생 모집 / 버스킹 야외 연주회 / 시험 응원
                    </div>
                    <div className='img-container'>
                        <div className='img'><span>학원 홍보/원생 모집</span></div>
                        <div className='img'><span>버스킹 야외 연주회</span></div>
                        <div className='img'><span>시험 응원 행사</span></div>
                    </div>
                </div>
                <div className='item item-5'>
                    <div className='title'>
                        학교・유치원 행사
                    </div>
                    <div className='sub-title'>
                        가정의달 기념행사 / 축제 / 운동회 / 동문회 행사
                    </div>
                    <div className='img-container'>
                        <div className='img'><span>가정의달 기념행사</span></div>
                        <div className='img'><span>축제</span></div>
                        <div className='img'><span>운동회</span></div>
                    </div>
                </div>
                <div className='item item-business'>
                    <div className='title'>
                        기업 이벤트
                    </div>
                    <div className='sub-title'>
                        그랜드 오픈 기념 행사 / 워크샵 / 세미나
                    </div>
                    <div className='img-container'>
                        <div className='img'><span>우리은행 우리WON 여자농구단 서포트</span></div>
                        <div className='img'><span>서울시 십대여성 진로체험축제</span></div>
                        <div className='img'><span>취업지원 홍보 행사</span></div>
                    </div>
                </div>
                <div className='item item-3'>
                    <div className='title'>
                        시즌별 특별 이벤트
                    </div>
                    <div className='sub-title'>
                        여름방학 행사 / 수능 시즌 응원메세지 / 크리스마스 시즌
                    </div>
                    <div className='img-container'>
                        <div className='img'><span>운동회 음료 부스</span></div>
                        <div className='img'><span>수능 응원 행사</span></div>
                        <div className='img'><span>크리스마스 트리 점등식</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service