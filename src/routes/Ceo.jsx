import React from 'react'
import './css/Common.css'
import './css/Ceo.css'
import { motion } from 'framer-motion';

const Ceo = () => {
  return (
    <div className='container-ceo'>
      <motion.div
        className={'title'}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
            ease: "easeInOut",
            // duration: 1, //전체적으로 애니메이션 일괄 적용
            y: { duration: 0.8 }, //정교한 컨트롤이 가능
        }}
      >
        <p>대표 경력 및 성과</p>
      </motion.div>
      <motion.div
        className={'career'}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
            ease: "easeInOut",
            // duration: 1,
            delay: 0.3,
            y: { duration: 0.8 },
        }}
      >
        <div className='text'>
          <p>2004년: 기독교대한감리회 참포도나무교회 창립 및 이후 담임목사 재직 중</p>
          <p>2008년~현재: 1시간학교 및 1시간학교장학회 활동</p>
          <p>2010년: 커피마을 설립 및 마을콘서트 시작 (30회)</p>
          <p>2014년: 세월호 지원 커피차 운영</p>
          <p>2015년: 마을공작소 (마을목공소)</p>
          <p>2016년: 감신대 '선교와 목공예술' 강좌 개설 / 가구제작기능사 취득</p>
          <p>2024년: '움직이는 섬 프로젝트' 실행 – 고립청년 30명 회복 동행</p>
          <p>2024년: (주)달려라커피 법인 전환 (커피마을, 마을공작소 양도양수)</p>
          <p>2024년 11월: '브리딩커피바' 론칭</p>
          <p>2025년 4월: (예비)사회적기업 선정(경기형)</p>
          <p>2025년: 고립은둔청년들의 상생자립을 위한 모모크루 조직</p>
          <p>2025년 7월: '브리딩 커피트럭' 론칭</p>
          <p>2025년 7월: 경기도사회적경제연구원 주관 공모사업 '우수' 등급 선정</p>
        </div>
        <div className='img'></div>
      </motion.div>
    </div>
  )
}

export default Ceo