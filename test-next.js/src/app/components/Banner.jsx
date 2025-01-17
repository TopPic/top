import React from 'react'
import Image from 'next/image';
function Banner() {


    return (
        <>
            <div className="background-image">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                        <div className="p-5">
                            <img className='w-full' src="https://playmallguide.playpark.com/th-th/images/icon-left.png" alt="" />
                        </div>
                        <div className="text-white flex flex-col justify-center p-5 text-center">
                            <h1 className='text-4xl py-3'>"เติมเงินง่าย ช็อปได้ทุกเกม"</h1>
                            <p>เป็นการอัพเกรดระบบการเติมเงินโฉมใหม่ของกระเป๋าเงินกลางสำหรับการใช้จ่าย
                                ซื้อไอเท็มภายในเกม และบริการต่างๆ จาก PlayPark ที่มุ่งเน้นความสะดวก
                                ง่าย ไม่ยุ่งยากในการเติมเงิน รองรับการใช้งานเกมเมอร์ทั่ว Southeast Asia
                                คือ ไทย สิงคโปร์ เวียดนาม มาเลเซีย อินโดนีเซีย และฟิลิปปินส์</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Banner;