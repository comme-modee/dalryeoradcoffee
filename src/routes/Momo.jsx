import React from 'react'
import './css/Momo.css'
import { motion } from 'framer-motion';

//img
import momosTableLogoW from '../asset/img/momostable-logo-w.png';
import momoImg2 from '../asset/img/main-momo-2.jpg';
import momoImg3 from '../asset/img/main-momo-3.jpg';

const Momo = () => {
  return (
    <div className='container-momo'>
      <div className='section-1'>
        <img src={momosTableLogoW} alt='momo-logo' className='logo'/>
      </div>
      <div className='section-2'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
              ease: "easeInOut",
              y: { duration: 1 },
          }}
        >
          <div className='title'>
            <p>모모스테이블은,</p>
          </div>
          <div className='content'>
            <p>자기만의 속도로 세상과 연결된 청년들이</p>
            <p>함께 만들어가는 상호 자립 프로젝트입니다.</p>
            <p>혼자였던 시간이 길었던 청년들이 함께 모여 세상으로 나와</p>
            <p>따뜻한 커피와 마음을 나눕니다.</p>
          </div>
        </motion.div>
        <motion.div
              className={'img-container'}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                  ease: "easeInOut",
                  y: { duration: 1 },
              }}
        >
              <img src={momoImg2} alt="Momo1" />
              <img src={momoImg3} alt="Momo2" />
        </motion.div>
      </div>
    </div>
  )
}

export default Momo