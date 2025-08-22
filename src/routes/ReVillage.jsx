import React from 'react'
import './css/ReVillage.css'
import revillageDetailPage from '../asset/img/revillage-detail-page.jpg'

const ReVillage = () => {
  return (
    <div className='container-revillage'>
        <img src={revillageDetailPage} alt='' className='revillage-detail-page'/>
    </div>
  )
}

export default ReVillage