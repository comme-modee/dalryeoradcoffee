import React, { useState } from 'react'
import './css/Common.css'
import './css/Menu.css'

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
            ${selectedMenu === 'Caffeine Moment' ? 'intro-img-caffeine' :
              selectedMenu === 'Comfort Moment' ? 'intro-img-comfort' :
              selectedMenu === 'Sweet Moment' ? 'intro-img-sweet' :
              selectedMenu === 'Seasonal Moment' ? 'intro-img-seasonal' : 'intro-img-hot'
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
                                <span>3,500원</span>
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
                                <span>4,000원</span>
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
                                <span>4,500원</span>
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
                selectedMenu === 'Comfort Moment' ?
                    <React.Fragment>
                        <div className='item-wrapper'>
                            <div className='item'>
                                <div className='img burger'></div>
                                <div className='top'>
                                    <div className='name'>달버거</div>
                                    <div className='price'>7,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        두툼한 불고기 패티와 특제 소스로 한입 베어물면 스태프들의 속이 든든해지는 촬영장의 에너지 충전 버거
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img hotdog'></div>
                                <div className='top'>
                                    <div className='name'>달도그</div>
                                    <div className='price'>6,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        현장의 바쁜 순간에도 손에 쥐고 한입 쏙! 육즙 팡팡 탱글 소세지에 눈이 확 떠지는 맛. 뉴욕 스타일 핫도그
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img sandwich'></div>
                                <div className='top'>
                                    <div className='name'>달드위치</div>
                                    <div className='price'>7,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        야외에서도 촬영차 안에서도 깔끔하게! 햄,치즈,에그와 싱그러운 채소의 완벽한 밸런스. 컵과일과 세트로 주문 가능
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img cobb-salad'></div>
                                <div className='top'>
                                    <div className='name'>콥샐러드</div>
                                    <div className='price'>6,500원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        신선한 샐러드와 병아리콩, 계란, 아몬드 등 탄단지 밸런스 완벽한 현대인 맞춤 건강식!
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img fruit'></div>
                                <div className='top'>
                                    <div className='name'>컵과일</div>
                                    <div className='price'>5,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        잘 익은 제철 과일을 한 컵 가득 담아 상큼하게 비타민 충전 가능한 간편 디저트
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
                                <div className='top'>
                                    <div className='name'>리에주와플</div>
                                    <div className='price'>3,500원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        <div className='option'>
                                            초코, 딸기, 화이트초코, 말차 추가 (+0.5)
                                        </div>
                                        직접 반죽한 생지를 당일 발효해 구워낸 겉바속촉 벨기에 정통 와플
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img churros'></div>
                                <div className='top'>
                                    <div className='name'>츄러스</div>
                                    <div className='price'>4,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        <div className='option'>
                                            초코디핑소스 추가 (+1.0)
                                        </div>
                                        향긋한 시나몬과 달콤한 설탕에 바삭쫀득한 식감까지! 놀이공원의 명불허전 대표간식!
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img financier'></div>
                                <div className='top'>
                                    <div className='name'>휘낭시에</div>
                                    <div className='price'>3,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        헤이즐넛 버터의 고소한 풍미가 입 안에 가득! 커피와 찰떡궁합인 쫀득바삭촉촉 베이커리
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img madeleine'></div>
                                <div className='top'>
                                    <div className='name'>마들렌</div>
                                    <div className='price'>3,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        촉촉하고 부드러운 식감에 고소한 버터향까지! 먹자마자 행복해지는 프랑스 대표 구움과자
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img chocochip-cookie'></div>
                                <div className='top'>
                                    <div className='name'>초코칩쿠키</div>
                                    <div className='price'>2,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        바삭한 쿠키 속에 달콤한 초코칩이 가득! 촬영장 당충전은 초코칩쿠키에게 맡겨라!
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img tiramisu'></div>
                                <div className='top'>
                                    <div className='name'>티라미수</div>
                                    <div className='price'>6,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        부드럽고 달콤한 마스카포네 치즈와 달려라커피의 향긋하고 진한 에스프레소, 쌉싸래한 코코아가루가 더해진 이탈리아 디저트
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                :
                selectedMenu === 'Seasonal Moment' ?
                    <React.Fragment>
                        <div className='label label-summer'>여름 시즌 메뉴</div>
                        <div className='item-wrapper'>
                            <div className='item'>
                                <div className='img bingsu'></div>
                                <div className='top'>
                                    <div className='name'>달빙수</div>
                                    <div className='price'>5,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        시원하게 갈린 얼음에 국산 팥, 달콤한 연유, 상큼한 후르츠칵테일, 쫀득한 찹쌀떡까지! 한여름 더위는 달빙수로 타파하기!
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img mango-bingsu'></div>
                                <div className='top'>
                                    <div className='name'>망고빙수</div>
                                    <div className='price'>5,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        상큼 달콤한 망고가 한가득 들어간 빙수. 부드럽고 고소한 큐브치즈가 함께 들어있어 더욱 풍성한 맛을 느낄 수 있는 인기 빙수
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img strawberry-bingsu'></div>
                                <div className='top'>
                                    <div className='name'>딸기빙수</div>
                                    <div className='price'>5,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        새콤달콤 딸기 과육이 가득 씹혀 상큼한 빙수. 달콤한 쿠앤크와 바삭한 건조딸기까지 더해져 식감과 맛, 두 마리 토끼를 다 잡았다!
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img watermelon-juice'></div>
                                <div className='top'>
                                    <div className='name'>수박주스</div>
                                    <div className='price'>6,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        수박이 통째로 들어간 생과일 주스. 시럽을 넣지 않고 100% 수박으로만 갈아낸 머리가 띵해지도록 시원한 여름 대표 음료
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='label label-winter'>겨울 시즌 메뉴</div>
                        <div className='item-wrapper'>
                            <div className='item'>
                                <div className='img hoppang'></div>
                                <div className='top'>
                                    <div className='name'>호빵</div>
                                    <div className='price'>3,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        <div className='option'>
                                            종류: 팥, 피자, 야채
                                        </div>
                                        추운 겨울날 두 손 가득 온기를 전해주는 따끈따끈한 겨울 대표 간식
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img fishcake'></div>
                                <div className='top'>
                                    <div className='name'>꼬치어묵</div>
                                    <div className='price'>2개 3,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        어묵 함량 높은 고급 어묵과 직접 채수를 우려내 만든 수제 어묵국물로 겨울철 촬영장의 인기 메뉴!
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img taiyaki'></div>
                                <div className='top'>
                                    <div className='name'>도미빵</div>
                                    <div className='price'>2개 4,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        <div className='option'>
                                            종류: 팥, 슈크림
                                        </div>
                                        겨울 간식 하면 빠질 수 없는 것! 바로 도미빵!! 얇고 바삭한 반죽에 팥과 슈크림이 가득가득
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img vin-chaud'></div>
                                <div className='top'>
                                    <div className='name'>뱅쇼</div>
                                    <div className='price'>6,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        <div className='option'>
                                            무알콜 가능
                                        </div>
                                        사과, 오렌지, 자몽 등 달콤한 과일과 포도주, 계피 등 향신재료를 넣고 뜨끈하게 끓여 한 잔 마시면 온 몸이 따뜻해지는 음료
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                :
                    <React.Fragment>
                        <div className='item-wrapper'>
                            <div className='item'>
                                <div className='img tteokkochi'></div>
                                <div className='top'>
                                    <div className='name'>떡꼬치</div>
                                    <div className='price'>3,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        매콤달콤한 양념이 쫄깃한 떡에 스며들어 중독성 있는 추억의 길거리 간식
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img sotteok-sotteok'></div>
                                <div className='top'>
                                    <div className='name'>소떡소떡</div>
                                    <div className='price'>4,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        뽀드득뽀드득 통통소세지와 쫜득쫜득한 쌀떡에 매콤달콤 소스가 만나 언제 먹어도 맛있는 마성의 간식
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img chicken-skewers'></div>
                                <div className='top'>
                                    <div className='name'>닭꼬치</div>
                                    <div className='price'>5,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        불향 가득, 달콤 짭짤 소스가 배인 촉촉한 닭고기 꼬치
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img sikhye'></div>
                                <div className='top'>
                                    <div className='name'>식혜</div>
                                    <div className='price'>5,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        구수한 엿기름 향과 달콤함이 어우러진 해외팬들의 사랑 듬뿍 받는 한국의 전통음료
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img corn-dog'></div>
                                <div className='top'>
                                    <div className='name'>옛날핫도그</div>
                                    <div className='price'>3,500원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        달달한 설탕에 케찹과 머스타드 소스 조합! 한번씩 꼭 생각나는 추억의 옛날 핫도그
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img potato-corn-dog'></div>
                                <div className='top'>
                                    <div className='name'>감자핫도그</div>
                                    <div className='price'>4,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        감자튀김과 핫도그의 만남?! 바삭한 감자가 잔뜩 붙은 고소하고 쫀득한 핫도그
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img cheese-corn-dog'></div>
                                <div className='top'>
                                    <div className='name'>치즈핫도그</div>
                                    <div className='price'>4,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        고소한 모짜렐라 치즈가 쭈욱 늘어나는 치즈 러버들의 영원한 사랑, 치즈핫도그!
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img grilled-sausage'></div>
                                <div className='top'>
                                    <div className='name'>그릴소세지</div>
                                    <div className='price'>4,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        탱글한 식감과 육즙이 터지는 맛, 은은한 불향이 입안을 감싸는 프리미엄 소시지
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='label label-korean-street-food'>분식</div>
                        <div className='item-wrapper'>
                            <div className='item'>
                                <div className='img tteokbokki'></div>
                                <div className='top'>
                                    <div className='name'>떡볶이</div>
                                    <div className='price'>5,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        쫄깃한 떡에 매콤달콤 양념이 진하게 배어 한입마다 중독되는 국민 간식
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img fishcake'></div>
                                <div className='top'>
                                    <div className='name'>꼬치어묵</div>
                                    <div className='price'>2개 3,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        어묵 함량 높은 고급 어묵과 직접 채수를 우려내 만든 수제 어묵국물로 겨울철 촬영장의 인기 메뉴!
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img sundae'></div>
                                <div className='top'>
                                    <div className='name'>순대</div>
                                    <div className='price'>5,000원</div>
                                </div>
                                <div className='bottom'>
                                    <div className='description'>
                                        김이 모락모락, 고소하고 부드러운 속재료와 쫄깃한 피가 어우러진 대표 분식 메뉴
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='label label-korean-street-food'>분식 세트 메뉴</div>
                        <div className='item-wrapper'>
                            <div className='item'>
                                <div className='img set1'></div>
                                <div className='top'>
                                    <div className='name'>[세트1] 떡볶이+어묵</div>
                                    <div className='price'>7,000원</div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img set2'></div>
                                <div className='top'>
                                    <div className='name'>[세트2] 떡볶이+순대</div>
                                    <div className='price'>9,000원</div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='img set3'></div>
                                <div className='top'>
                                    <div className='name'>[세트3] 떡볶이+어묵+순대</div>
                                    <div className='price'>12,000원</div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>}
            </div>
        </div>
    </div>
  )
}

export default Menu