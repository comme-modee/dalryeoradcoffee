import React from 'react'
import './css/Main.css'
import { motion } from 'framer-motion';

//img
import momoImg2 from '../asset/img/main-momo-2.jpg';
import momoImg3 from '../asset/img/main-momo-3.jpg';
import photo3 from '../asset/img/photos/photo-3.jpg';
import photo4 from '../asset/img/photos/photo-4.jpg';
import photo5 from '../asset/img/photos/photo-5.jpg';
import photo6 from '../asset/img/photos/photo-6.jpg';

const Main = () => {
  return (
    <div className='main-container'>
      <div className='main-text'>
        <div className='front-layer'>
          <p>Dalryeora</p>
          <p>Coffee</p>
        </div>
        <div className='back-layer'>
          <p>Dalryeora</p>
          <p>Coffee</p>
        </div>
      </div>

      <div className='sub-text'>
        <p>We bring people to life.</p>
        <p>Through coffee, community, and kindness,</p>
        <p>we create safe rhythms and shared spaces</p>
        <p>for reclusive youth and isolated lives to breathe once more.</p>

        <p>“내가 너희 속에 생기를 넣으리니 너희가 살아나리라” — 에스겔 37:5</p>

      </div>

      {/* 모모스테이블 */}
      <motion.div
            className={'main-title'}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
                ease: "easeInOut",
                y: { duration: 1 },
            }}
      >
              <p>momo's Table</p>
              <p>모모스 테이블</p>
      </motion.div>
      <motion.div
            className={'img-container'}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                ease: "easeInOut",
                y: { duration: 1 },
            }}
      >
            <img src={momoImg2} alt="Momo1" />
            <img src={momoImg3} alt="Momo2" />
      </motion.div>

      {/* 로자119 */}
      <motion.div
            className={'main-title main-title-right'}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
                ease: "easeInOut",
                y: { duration: 1 },
            }}
      >
              <p>Roza119</p>
              <p>로자119</p>
      </motion.div>
      <motion.div
            className={'img-container img-container-right'}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                ease: "easeInOut",
                y: { duration: 1 },
            }}
      >
            <img src={photo5} alt="Roza1" />
            <img src={photo6} alt="Roza2" />
      </motion.div>

      {/* 쉼곁숨프로젝트 */}
      <motion.div
            className={'main-title'}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
                ease: "easeInOut",
                y: { duration: 1 },
            }}
      >
              <p>Breath Beside</p>
              <p>쉼・곁・숨 프로젝트</p>
      </motion.div>
      <motion.div
            className={'img-container'}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                ease: "easeInOut",
                y: { duration: 1 },
            }}
      >
            <img src={photo3} alt="Breath1" />
            <img src={photo4} alt="Breath2" />
      </motion.div>
    </div>
  )
}

export default Main