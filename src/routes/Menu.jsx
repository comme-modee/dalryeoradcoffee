import React, { useState } from 'react'
import './css/Common.css'
import './css/Menu.css'

//img
import coffeeImgBasic from '../asset/img/dal-menu-basic.jpg'
import coffeeImgPremium from '../asset/img/dal-menu-premium.jpg'
import coffeeImgSupremo from '../asset/img/dal-menu-supremo.jpg'
import dessert from '../asset/img/dal-dessert.jpg'
import summerMenu1 from '../asset/img/summer-menu-1.jpg'
import winterMenu1 from '../asset/img/winter-menu-1.jpg'
import winterMenu2 from '../asset/img/winter-menu-2.jpg'

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState('커피/음료');

  const menuContents = {
    '커피/음료': '직접 로스팅한 원두로 신선하고 맛있는 커피와 음료를 만나보세요.',
    '간식': '출출할 때 딱! 달려라커피의 인기 간식을 만나보세요.',
    // '식사(밥차)': '든든한 한 끼, 따뜻한 밥차 메뉴도 준비되어 있어요.',
    '시즌메뉴': '계절 한정, 지금만 맛볼 수 있는 시즌 메뉴!',
    // '전체메뉴': '모든 메뉴를 한눈에! 전체 리스트를 확인하세요.',
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className='container container-menu'>
        <div className='intro'>
          <div className='text'>
            <p>{selectedMenu}</p>
            <p>{menuContents[selectedMenu]}</p>
          </div>
        </div>
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
          <div className='inner'>
            {selectedMenu === '커피/음료' ? 
              <React.Fragment>
                <img src={coffeeImgBasic} alt='달려라커피-메뉴-베이직'/>
                <img src={coffeeImgPremium} alt='달려라커피-메뉴-프리미엄'/>
                <img src={coffeeImgSupremo} alt='달려라커피-메뉴-수프리모'/>
              </React.Fragment>
            :
            selectedMenu === '간식' ?
              <React.Fragment>
                <img src={dessert} alt='달려라커피-디저트'/>
              </React.Fragment>
            :
            selectedMenu === '식사(밥차)' ?
              <React.Fragment>
                준비중
              </React.Fragment>
            :
            selectedMenu === '시즌메뉴' ?
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