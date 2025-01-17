import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl py-5 font-bold">เติมเงิน</h2>
          <p>เลือกเติมเงินกับเกมที่คุณต้องการ ทั้ง PC และ Mobile Game</p>
        </div>
        <div className="title flex flex-wrap items-center my-10 p-5">
          <h4 className="pr-5 text-3xl font-bold">PC GAME</h4> เลือกเกมที่คุณต้องการเติมงิน
        </div>
        {/* row games */}
        <div className="grid gap-10 p-5">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            <a href="#"><img className="w-full" src="https://media-web.playpark.com/poster-games/pc/au.png" alt="game1" /><p className="font-bold text-center">Audtion</p></a>
            <a href="#"><img className="w-full" src="https://media-web.playpark.com/poster-games/pc/es.png" alt="game2" /><p className="font-bold text-center">Elsword</p></a>
            <a href="#"><img className="w-full" src="https://media-web.playpark.com/poster-games/pc/yg.png" alt="game13" /><p className="font-bold text-center">yg</p></a>
            <a href="#"><img className="w-full" src="https://media-web.playpark.com/poster-games-playmall/FLYFFUNIVERSE.jpg" alt="game14" /><p className="font-bold text-center">FLYFFUNIVERSE</p></a>
            <a href="#"><img className="w-full" src="https://media-web.playpark.com/poster-games/pc/gcc.jpg" alt="game15" /><p className="font-bold text-center">gcc</p></a>
            <a href="#"><img className="w-full" src="https://media-web.playpark.com/poster-games/pc/rakion.png" alt="game16" /><p className="font-bold text-center">rakion</p></a>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            <a href="#"><img className="w-full" src="https://media-web.playpark.com/poster-games/mobile/ssa.jpg" alt="game17" /><p className="font-bold text-center">ssa</p></a>
            <a href="#"><img className="w-full" src="https://media-web.playpark.com/poster-games/mobile/stm.jpg" alt="game18" /><p className="font-bold text-center">stm</p></a>
            <a href="#"><img className="w-full" src="https://media-web.playpark.com/poster-games/mobile/ikm.png" alt="game19" /><p className="font-bold text-center">ikm</p></a>
            <a href="#"><img className="w-full" src="https://media-web.playpark.com/poster-games/mobile/bm.png" alt="game110" /><p className="font-bold text-center">bm</p></a>
            <a href="#"><img className="w-full" src="https://media-web.playpark.com/poster-games/mobile/sb.jpg" alt="game11" /><p className="font-bold text-center">sb</p></a>
            <a href="#"><img className="w-full" src="https://media-web.playpark.com/poster-games/mobile/ryg.jpg" alt="game12" /><p className="font-bold text-center">ryg</p></a>
          </div>
        </div>
        {/* row topup */}
        <div className="grid gap-5">
          <div className="title-topup text-center py-5">
            <div className="font-bold mb-5 text-3xl">ช่องทาง และวิธีการเติมเงิน</div>
            <p>**เกมทั้งหมดสามารถเติมเงินผ่านระบบ PlayMall ยกเว้น Yulgang จะเติมเงินผ่านระบบ Refill Center</p>
          </div>
          <div className="grid gap-10 p-5">
            <div className="grid grid-cols-1 gap-5 sm:gird-cols-2 lg:grid-cols-2">
              {/* slot1 */}
              <div className="grid grid-cols-1 gap-5 items-start sm:grid-cols-2">
                {/* รูปภาพ */}
                <div className="flex justify-center">
                  <img className="w-1/2" src="https://playmallguide.playpark.com/th-th/images/375acash.jpg" alt="Logo" />
                </div>
                {/* ข้อความและปุ่ม */}
                <div className="flex flex-col items-start justify-center gap-3">
                  <p className="text-xl font-bold">วิธีเติมเงิน @Cash</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded">
                      PlayMall
                    </button>
                    <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded">
                      Refill Center
                    </button>
                  </div>
                  <p className="font-bold">ราคา</p>
                  <p>
                    @Cash มีให้คุณเลือกทั้งหมด 7 ราคา ได้แก่ 55, 89, 189, 245, 349, 450 และ 888 บาท ในรูปแบบสลิปเท่านั้น @Cash คือสลิปเติมเงินที่อำนวยความสะดวกให้กับชาวออนไลน์ โดยมีแนวคิดว่า "@Cash เติมได้ทุกความสนุก" เพราะ @Cash สามารถนำมาเติมเกมในเครือเพลย์พาร์ค และเกมออนไลน์อื่นๆ ที่ได้ร่วมเป็นพันธมิตรกับ เอเชียซอฟท์
                  </p>
                  <p className="font-bold">สถานที่จำหน่าย</p>
                  <a className="text-sky-500 hover:text-sky-800" href="#">Zest</a>
                </div>
              </div>
              {/* slot2 */}
              <div className="grid grid-cols-1 gap-5 items-start sm:grid-cols-2">
                {/* รูปภาพ */}
                <div className="flex justify-center">
                  <img className="w-1/2" src="https://playmallguide.playpark.com/th-th/images/true-money-wallet.jpg" alt="Logo" />
                </div>
                {/* ข้อความและปุ่ม */}
                <div className="flex flex-col items-start justify-center gap-3">
                  <p className="text-xl font-bold">วิธีเติมเงิน True Money Wallet</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded">
                      PlayMall
                    </button>
                    <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded">
                      Refill Center
                    </button>
                  </div>
                  <p className="font-bold">เงื่อนไขการเติม</p>
                  <p>
                    True Money Wallet มีให้เลือกทั้งหมด 10 ราคา ได้แก่ ราคา 50 , 100 , 300 , 500 , 1,000 , 2,000 , 3,000 , 5,000 , 10,000และ 20,000 บาท
                  </p>
                  {/* <p className="font-bold">สถานที่จำหน่าย</p>
                  <a className="text-sky-500 hover:text-sky-800" href="#">Zest</a> */}
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 gap-5 sm:gird-cols-2 lg:grid-cols-2">
              {/* slot1 */}
              <div className="grid grid-cols-1 gap-5 items-start sm:grid-cols-2">
                {/* รูปภาพ */}
                <div className="flex justify-center">
                  <img className="w-1/2" src="https://playmallguide.playpark.com/th-th/images/credit-logo.jpg" alt="Logo" />
                </div>
                {/* ข้อความและปุ่ม */}
                <div className="flex flex-col items-start justify-center gap-3">
                  <p className="text-xl font-bold">เติมเกมด้วยบัตรเดบิต</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded">
                      PlayMall
                    </button>
                    <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded">
                      Refill Center
                    </button>
                  </div>
                  <p className="font-bold">เงื่อนไขการเติม</p>
                  <p>
                    เติมเกมด้วยบัตรเดบิต และ บัตรเครดิต เติมเงินเข้าเกมต่ำสุด 50 บาท และ สูงสุดไม่เกิน 20,000 บาท (ไม่จำกัดจำนวนครั้งที่เติมต่อวัน) บัตรเดบิต ธนาคารในประทศไทยที่สามารถใช้บริการซื้อสินค้าออนไลน์ได้ (สามารถเช็คได้ที่ธนาคารที่ท่านถือบัตรอยู่) พิเศษ!!! สำหรับลูกค้าธนาคารกสิกรไทย ไม่ต้องสมัครบัตรเดบิต ก็สามารถใช้บริการเติมเงินได้เพียงแค่สมัคร K-WebShopping Card
                  </p>
                  <button className="px-4 py-1 border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white rounded">
                    วิธีการสมัคร K-Web ShoppingCard
                  </button>
                  <p>บัตรเครดิต VISA และ Master Card ของทุกธนาคารในประเทศที่ยืนยันบัตรแล้ว (Verified)</p>
                </div>
              </div>
              {/* slot2 */}
              <div className="grid grid-cols-1 gap-5 items-start sm:grid-cols-2">
                {/* รูปภาพ */}
                <div className="flex justify-center">
                  <img className="w-1/2" src="https://playmallguide.playpark.com/th-th/images/Linepay-logo.jpg" alt="Logo" />
                </div>
                {/* ข้อความและปุ่ม */}
                <div className="flex flex-col items-start justify-center gap-3">
                  <p className="text-xl font-bold">วิธีเติมเงิน Rabbit Line Pay</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded">
                      PlayMall
                    </button>
                    <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded">
                      Refill Center
                    </button>
                  </div>
                  <p className="font-bold">เงื่อนไขการเติม</p>
                  <p>
                    เติมเงินเข้าเกมต่ำสุด 100 บาท สูงสุดไม่เกิน 3,000 บาท
                  </p>
                  {/* <p className="font-bold">สถานที่จำหน่าย</p>
                  <a className="text-sky-500 hover:text-sky-800" href="#">Zest</a> */}
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 gap-5 sm:gird-cols-2 lg:grid-cols-2">
              {/* slot1 */}
              <div className="grid grid-cols-1 gap-5 items-start sm:grid-cols-2">
                {/* รูปภาพ */}
                <div className="flex justify-center">
                  <img className="w-1/2" src="https://playmallguide.playpark.com/th-th/images/qr-payment.jpg" alt="Logo" />
                </div>
                {/* ข้อความและปุ่ม */}
                <div className="flex flex-col items-start justify-center gap-3">
                  <p className="text-xl font-bold">เติมเกมด้วย QR Code</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded">
                      PlayMall
                    </button>
                    <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded">
                      Refill Center
                    </button>
                  </div>
                  <p className="font-bold">เงื่อนไขการเติม และราคา</p>
                  <p>
                    โดยมีราคาให้เลือกเติมเงิน 10 ราคา ดังนี้ ราคา 50 , 100 , 300 , 500 , 1,000 , 2,000 , 3,000 , 5,000 , 10,000 และ 20,000 บาท
                  </p>
                  {/* <button className="px-4 py-1 border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white rounded">
                  วิธีการสมัคร K-Web ShoppingCard
                    </button>
                  <p>บัตรเครดิต VISA และ Master Card ของทุกธนาคารในประเทศที่ยืนยันบัตรแล้ว (Verified)</p> */}
                </div>
              </div>
              {/* slot2 */}
              <div className="grid grid-cols-1 gap-5 items-start sm:grid-cols-2">
                {/* รูปภาพ */}
                <div className="flex justify-center">
                  <img className="w-1/2" src="https://playmallguide.playpark.com/th-th/images/kplus.jpg" alt="Logo" />
                </div>
                {/* ข้อความและปุ่ม */}
                <div className="flex flex-col items-start justify-center gap-3">
                  <p className="text-xl font-bold">วิธีเติมเงิน K-Plus</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded">
                      PlayMall
                    </button>
                    <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded">
                      Refill Center
                    </button>
                  </div>
                  <p className="font-bold">เงื่อนไขการเติม และราคา</p>
                  <p>
                    โดยมีราคาให้เลือกเติมเงิน 10 ราคา ดังนี้ ราคา 50 , 100 , 300 , 500 , 1,000 , 2,000 , 3,000 , 5,000 , 10,000 และ 20,000 บาท
                  </p>
                  <p className="text-red-500">หมายเหตุ: หากเติมเงินต่ำกว่า 350 บาท จะมีค่าธรรมเนียม 15 บาทต่อรายการ</p>
                  {/* <p className="font-bold">สถานที่จำหน่าย</p>
                  <a className="text-sky-500 hover:text-sky-800" href="#">Zest</a> */}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:gird-cols-2 lg:grid-cols-2">
            </div>

          </div>
        </div>
      </div>

    </>
  );
}
