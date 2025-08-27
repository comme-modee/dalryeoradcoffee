import React, { useState } from 'react'
import './css/Common.css'
import './css/Menu.css'

//img
import summerMenu1 from '../asset/img/summer-menu-1.jpg'
import winterMenu1 from '../asset/img/winter-menu-1.jpg'
import winterMenu2 from '../asset/img/winter-menu-2.jpg'

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState('Caffeine Moment');

  const menuContents = {
    'Caffeine Moment': '하루를 여는 깊고 진한 커피의 시간',
    'Comfort Moment': '속을 채우고 마음을 쉬게 하는 한 끼 디저트',
    'Sweet Moment': '팬심이 녹아든 달콤한 순간',
    'Seasonal Moment': '계절과 감각이 머무는 찰나의 여운',
    'Hot Moment': '뜨끈한 위로 한 그릇의 정',
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className='container container-menu'>
        <div className={
            `intro-img 
            ${selectedMenu === 'Caffeine Moment' ? 'intro-img-drink' :
              selectedMenu === 'Sweet Moment' ? 'intro-img-dessert' :
              selectedMenu === 'Seasonal Moment' ? 'intro-img-season' : ''
            }`}></div>
        <div className='menu-bar'>
          <ul>
            {Object.keys(menuContents).map((menu) => (
              <li
                key={menu}
                className={selectedMenu === menu ? 'active' : ''}
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
        <div className='content'>
            <div className='title'>
                <p>{selectedMenu}</p>
                <p>{menuContents[selectedMenu]}</p>
            </div>
            <div className='inner'>
                {selectedMenu === 'Caffeine Moment' ? 
                    <React.Fragment>
                        <div className='menu menu-basic'>
                            <p className='title'>
                                <span>[BASIC] 베이직</span>
                                <span>3.5</span>
                            </p>
                            <p className='description'>
                                <div className='highlight'>
                                    달려라커피가 제안하는 서포트 최적의 음료 셋업.
                                </div><br />
                                현장에서 가장 안정적인 반응을 얻은 스테디셀러 라인업. <br />
                                깔끔한 아메리카노, 달콤한 라떼, 촬영장에 딱 맞는 음료 구성으로 <br />
                                처음 서포트를 준비하시는 분들께도, <br />
                                매번 만족을 원하시는 분들께도 추천드립니다.
                            </p>
                            <div className='coffee-line-up'>
                                <div>
                                    <div>
                                        <div className='title'>COFFEE</div>
                                        <ul className='menu'>
                                            <li>에스프레소</li>
                                            <li>아메리카노</li>
                                            <li>바닐라아메리카노</li>
                                            <li>카라멜아메리카노</li>
                                            <li>헤이즐넛아메리카노</li>
                                            <li>카페라테</li>
                                            <li>카페모카</li>
                                            <li>바닐라라테</li>
                                            <li>카라멜라테</li>
                                            <li>헤이즐넛라테</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='title'>NON-COFFEE</div>
                                        <ul className='menu'>
                                            <li>핫초코</li>
                                            <li>초코라테</li>
                                            <li>스팀우유</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='title'>TEA</div>
                                        <ul className='menu'>
                                            <li>복숭아아이스티</li>
                                            <li>캐모마일</li>
                                            <li>페퍼민트</li>
                                            <li>유자차</li>
                                            <li>그린티</li>
                                            <li>레몬티</li>
                                            <li>자몽티</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='title'>ADE</div>
                                        <ul className='menu'>
                                            <li>레몬에이드</li>
                                            <li>자몽에이드</li>
                                            <li>청포도에이드</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='menu menu-primium'>
                            <p className='title'>
                                <span>[PRIMIUM] 프리미엄</span>
                                <span>4.0</span>
                            </p>
                            <p className='description'>
                                <div className='highlight'>
                                    기본을 넘어서, 취향을 섬세하게 채운 달려라커피의 프리미엄 라인
                                </div><br />
                                다양한 음료 취향과 계절감까지 고려한 풍성한 구성으로, <br />
                                더 감각적이고 여운 있는 서포트를 완성합니다.
                            </p>
                            <div className='coffee-line-up'>
                                <div>
                                    <div>
                                        <div className='title'>COFFEE</div>
                                        <ul className='menu'>
                                            <li>에스프레소</li>
                                            <li>아메리카노</li>
                                            <li>바닐라아메리카노</li>
                                            <li>카라멜아메리카노</li>
                                            <li>헤이즐넛아메리카노</li>
                                            <li>카페라테</li>
                                            <li>카페모카</li>
                                            <li>바닐라라테</li>
                                            <li>카라멜라테</li>
                                            <li>헤이즐넛라테</li>
                                            <li>연유라테</li>
                                            <li>제주말차카페라테</li>
                                            <li>토피넛카페라테</li>
                                            <li>아샷추</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='title'>NON-COFFEE</div>
                                        <ul className='menu'>
                                            <li>핫초코</li>
                                            <li>초코라테</li>
                                            <li>스팀우유</li>
                                            <li>말차라테</li>
                                            <li>토피넛라테</li>
                                            <li>밀크티</li>
                                            <li>활력드링크</li>
                                            <li>리얼딸기라테</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='title'>TEA</div>
                                        <ul className='menu'>
                                            <li>복숭아아이스티</li>
                                            <li>캐모마일</li>
                                            <li>페퍼민트</li>
                                            <li>유자차</li>
                                            <li>그린티</li>
                                            <li>레몬티</li>
                                            <li>자몽티</li>
                                            <li>히비스커스</li>
                                            <li>매실차</li>
                                            <li>오미자차</li>
                                            <li>대추차</li>
                                            <li>율무차</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='title'>ADE</div>
                                        <ul className='menu'>
                                            <li>레몬에이드</li>
                                            <li>자몽에이드</li>
                                            <li>청포도에이드</li>
                                            <li>라임소다</li>
                                            <li>오렌지에이드</li>
                                            <li>딸기에이드</li>
                                            <li>패션후르츠에이드</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='menu menu-signature'>
                            <p className='title'>
                                <span>[SIGNATURE] 시그니처</span>
                                <span>4.5</span>
                            </p>
                            <p className='description'>
                                <div className='highlight'>
                                    단 하나의 순간, 단 하나의 조합.
                                </div><br />
                                배우님의 취향과 컨디션, 팬의 정성을 온전히 담아 <br />
                                단독으로 설계된 달려라커피만의 커스터마이징 음료 라인입니다. <br />
                                디카페인부터 꿀 음료, 전통차, 비주얼 에이드, 프레시 주스, 요거트 스무디까지! <br />
                                감각과 건강, 분위기까지 모두 아우르는 완벽한 음료 구성이 가능해요.
                            </p>
                            <div className='coffee-line-up'>
                                <div>
                                    <div>
                                        <div className='title'>COFFEE</div>
                                        <ul className='menu'>
                                            <li>에스프레소</li>
                                            <li>아메리카노</li>
                                            <li>바닐라아메리카노</li>
                                            <li>카라멜아메리카노</li>
                                            <li>헤이즐넛아메리카노</li>
                                            <li>카페라테</li>
                                            <li>카페모카</li>
                                            <li>바닐라라테</li>
                                            <li>카라멜라테</li>
                                            <li>헤이즐넛라테</li>
                                            <li>연유라테</li>
                                            <li>제주말차카페라테</li>
                                            <li>토피넛카페라테</li>
                                            <li>아샷추</li>
                                            <li>디카페인 아메리카노</li>
                                            <li>꿀메리카노</li>
                                            <li>꿀라테</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='title'>NON-COFFEE</div>
                                        <ul className='menu'>
                                            <li>핫초코</li>
                                            <li>초코라테</li>
                                            <li>스팀우유</li>
                                            <li>말차라테</li>
                                            <li>토피넛라테</li>
                                            <li>밀크티</li>
                                            <li>활력드링크</li>
                                            <li>리얼딸기라테</li>
                                            <li>흑당밀크티</li>
                                            <li>민트초코라테</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='title'>TEA</div>
                                        <ul className='menu'>
                                            <li>복숭아아이스티</li>
                                            <li>캐모마일</li>
                                            <li>페퍼민트</li>
                                            <li>유자차</li>
                                            <li>그린티</li>
                                            <li>레몬티</li>
                                            <li>자몽티</li>
                                            <li>히비스커스</li>
                                            <li>매실차</li>
                                            <li>오미자차</li>
                                            <li>대추차</li>
                                            <li>율무차</li>
                                            <li>레몬스카이</li>
                                            <li>윈터드림</li>
                                            <li>천마차</li>
                                            <li>생강차</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='title'>ADE</div>
                                        <ul className='menu'>
                                            <li>레몬에이드</li>
                                            <li>자몽에이드</li>
                                            <li>청포도에이드</li>
                                            <li>라임소다</li>
                                            <li>오렌지에이드</li>
                                            <li>딸기에이드</li>
                                            <li>패션후르츠에이드</li>
                                            <li>블루레몬에이드</li>
                                            <li>깔라만시에이드</li>
                                            <li>유자에이드</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='title'>YOGURT SMOOTHIE</div>
                                        <ul className='menu'>
                                            <li>요거트스무디</li>
                                            <li>딸기요거트스무디</li>
                                            <li>블루베리요거트스무디</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='title'>FRESH JUICE</div>
                                        <ul className='menu'>
                                            <li>오렌지주스</li>
                                            <li>자몽주스</li>
                                            <li>망고주스</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </React.Fragment>
                :
                selectedMenu === 'Sweet Moment' ?
                    <React.Fragment>
                        <div className='item-wrapper'>
                            <div className='item'>
                                <div className='img waffle'></div>
                                <div className='description'>
                                    <div className='name'>리에주와플</div>
                                    <div className='price'>3,500원</div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img fruit'>
    
                                </div>
                                <div className='description'>
                                    <div className='name'>컵과일</div>
                                    <div className='price'>5,000원</div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img bingsu'>

                                </div>
                                <div className='description'>
                                    <div className='name'>컵빙수</div>
                                    <div className='price'>5,000원</div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img sandwich'>

                                </div>
                                <div className='description'>
                                    <div className='name'>샌드위치</div>
                                    <div className='price'>하프 4,500원 / 풀 8,000원</div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img tiramisu'>

                                </div>
                                <div className='description'>
                                    <div className='name'>티라미수 컵케이크</div>
                                    <div className='price'>6,000원</div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                :
                selectedMenu === '식사(밥차)' ?
                    <React.Fragment>
                        준비중
                    </React.Fragment>
                :
                selectedMenu === 'Seasonal Moment' ?
                    <React.Fragment>
                        <p className='title'>여름시즌메뉴</p>
                        <img src={summerMenu1} alt='달려라커피-여름메뉴'/>
                        <p className='title'>겨울시즌메뉴</p>
                        <img src={winterMenu1} alt='달려라커피-겨울메뉴'/>
                        <img src={winterMenu2} alt='달려라커피-겨울메뉴'/>
                    </React.Fragment>
                :
                    <React.Fragment>
                        전체메뉴
                    </React.Fragment>}
            </div>
        </div>
    </div>
  )
}

export default Menu