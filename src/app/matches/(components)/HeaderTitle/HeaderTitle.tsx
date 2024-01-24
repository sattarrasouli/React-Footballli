import React from 'react'
import clockIcon from '@/assets/img/clock1.svg'

function HeaderTitle() {
    return (
        <div className='flex flex-row justify-between m-1 items-center'>
            <span>
                <p className='text-2xl font-bold font-IranSans'>نتایج زنده</p>
            </span>
            <span className='h-auto w-12'>
                <img src={clockIcon.src} width={100} height={100} />
            </span>
        </div>
    )
}

export default HeaderTitle