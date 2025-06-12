import React from 'react'
import './css/Common.css'
import './css/About.css'
import { motion } from 'framer-motion';

//img
import photo1 from '../asset/img/photos/photo-1.jpg';
import photo2 from '../asset/img/photos/photo-2.jpg';
import photo3 from '../asset/img/photos/photo-3.jpg';
import photo4 from '../asset/img/photos/photo-4.jpg';

const About = () => {
  return (
    <div className='container container-about'>
      <div className='section-1'>
        <motion.div
          className={'title'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
              ease: "easeInOut",
              y: { duration: 1 },
          }}
        >
          <p>달려라커피는</p>    
        </motion.div>
        <motion.div
          className={'content'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
              ease: "easeInOut",
              delay: 0.3,
              y: { duration: 1 },
          }}
        >
          <p>고립은둔청년들이 다시 사회와 연결되고 삶의 리듬을 회복할 수 있도록,</p>
          <p>커피와 공동체, 따뜻한 관계를 기반으로 한 회복 플랫폼을 구축하고 있습니다.</p>
          <p>우리는 청년을 ‘돕는 대상’이 아닌, 함께 걸어가는 존재로 바라보며,</p>
          <p>그들의 삶에 숨을 불어넣는 회복적 여백을 제공합니다.</p>
        </motion.div>
        <motion.table
          className={'table'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
              ease: "easeInOut",
              delay: 0.5,
              y: { duration: 1 },
          }}
        >
          <thead>
            <tr>
              <th colspan="2">Company Overview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>회사명</td>
              <td>(주) 달려라커피</td>
            </tr>
            <tr>
              <td>법인설립연도</td>
              <td>2024년 8월 20일 / 2010년 4월 ‘커피마을’로 시작</td>
            </tr>
            <tr>
              <td>기업형태</td>
              <td>(예비)사회적기업 / 2025년 4월 (경기형)</td>
            </tr>
            <tr>
              <td>대표활동</td>
              <td>고립은둔청년의 회복 및 자립을 위한 통합 회복 프로젝트 운영</td>
            </tr>
          </tbody>
        </motion.table>
      </div>
      <motion.div
        className={'section-1-img'}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
            ease: "easeInOut",
            y: { duration: 1 },
        }}
      >
        <img src={photo1} alt=''/>
        <img src={photo2} alt=''/>
      </motion.div>
      <div className='section-2'>
        <motion.div
          className={'title'}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
              ease: "easeInOut",
              y: { duration: 1 },
          }}
        >
          <p>브랜드 정체성 및 선언문</p>
          <p>(Brand Manifesto)</p>
        </motion.div>
        <motion.div
          className={'content'}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
              ease: "easeInOut",
              y: { duration: 1 },
          }}
        >
          <div className='top'>
            <p>We bring people to life.</p>
            <p>Through coffee, community, and kindness,</p>
            <p>we create safe rhythms and shared spaces</p>
            <p>for reclusive youth and isolated lives to breathe once more.</p>
          </div>
          <p className='pretendard-R'>“내가 너희 속에 생기를 넣으리니 너희가 살아나리라” — 에스겔 37:5</p>
          <div className='line'></div>

          <div className='bottom'>
            <p>우리는 사람들에게 다시 숨을 불어넣습니다.</p>
            <p>커피, 공동체, 그리고 따뜻한 마음을 통해</p>
            <p>은둔청년들과 고립된 삶이 다시 숨 쉴 수 있도록</p>
            <p>안전한 리듬과 공유된 공간을 만듭니다.</p>
          </div>
        </motion.div>
      </div>
      <div className='section-3'>
        <motion.div
          className={'title'}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
              ease: "easeInOut",
              y: { duration: 1 },
          }}
        >
          <p>문제 정의 및 사업 배경</p>    
        </motion.div>
        <motion.div
          className={'content'}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
              ease: "easeInOut",
              y: { duration: 1 },
          }}
        >
          <div className='top'>
            <p>한국 사회에는 약 40만 명 이상의 고립은둔청년이 존재하며,</p>
            <p>이는 정서적 외상, 사회적 탈락, 공간 회피 등 구조적 요인에서 기인합니다.</p>
            <p>기존의 대부분의 지원 시스템은 단기적이며, 재고립 가능성이 높습니다.</p>
          </div>
          <div className='bottom'>
            <p>(주)달려라커피는</p>
            <p>장기적 회복과 자립 가능성에 집중하는</p>
            <p>회복형 사회적 인프라를 제안합니다.</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        className={'section-1-img'}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
            ease: "easeInOut",
            y: { duration: 1 },
        }}
      >
        <img src={photo3} alt=''/>
        <img src={photo4} alt=''/>
      </motion.div>
    </div>
  )
}

export default About