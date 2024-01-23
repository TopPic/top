// ********************
// *******Readme*******
// ********************
// id 0 คือ อยู๋หน้าสุด และเรียงตามตัวอักษร
// id 1 คือ hot
// id 2 คือ new
// id 3 คือ soon
// id 4 คือ คือไม่มีแท็ก
// ถ้ายังไม่เปิดดาวน์โหลด ตัวแปร "LinkLoad" ให้ใส่ javascript:void(0) แล้วเปิดคอมเม้น "alert"

const mm = [
  {
    id: "3",
    GameName: "Black Moon SEA",
    Image: "https://media-web.playpark.com/poster-games/mobile/bm.png",
    TagLine: "soon",
    Type: "( Action RPG )",
    LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
    TypeId: "PlayID",
    DescId: "Play with PlayID Account",
    DescGame: "ที่สุดของเกมมือถือแอ็กชั่นแห่งปีรัวคอมโบสกิลสุดมันส์ สร้างรูปแบบการต่อสู้ด้วยสปิริตและอาวุธในตำนาน จัดเต็มด้วยระบบ PvP แบบ Real-Time และสงครามกิลวอร์ข้ามเซิร์ฟสุดยิ่งใหญ่!",
    LinkSite: "https://blackmoon.playpark.com/",
    TextSite: "เข้าสู่เว็บไซต์",
    LinkLoad: "https://blackmoon.playpark.com/",
    // alert: "alert('Download is Coming Soon');",
    TextLoad: "ลงทะเบียนล่วงหน้า",
  },
  {
    id: "0",
    GameName: "Samkok Tactics M",
    Image: "https://media-web.playpark.com/poster-games/mobile/stm.jpg",
    TagLine: "hot",
    Type: "( Tactics-RPG )",
    LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
    TypeId: "PlayID",
    DescId: "Play with PlayID Account",
    DescGame: "สุดยอดเกมสามก๊กแห่งปีที่ทุกคนรอคอย จัดเต็มด้วยภาพกราฟิกสุดอลังการ วางแผนกลยุทธ์แม่ทัพหลักในตำนานแห่งสามก๊ก มาครบทั้ง โจโฉ, เล่าปี, ซุนกวน, ลิโป้, ตั๋งโต๊ะ, และอื่น ๆ อีกมากมาย",
    LinkSite: "https://samkoktactics.playpark.com/",
    TextSite: "เข้าสู่เว็บไซต์",
    LinkLoad: "https://www.playpark.com/th-th/IHSKDL",
    // alert: "alert('Download is Coming Soon');",
    TextLoad: "ดาวน์โหลด",
  },
  {
    id: "0",
    GameName: "Immortal Kingdoms",
    Image: "https://media-web.playpark.com/poster-games/mobile/ikm.png",
    TagLine: "hot",
    Type: "( MMORPG )",
    LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
    TypeId: "PlayID",
    DescId: "Play with PlayID Account",
    DescGame: "สุดยอดเกมมือถือฟอร์มยักษ์แห่งปี การันตียืนหนึ่งในหลายประเทศ อุบัติความมันส์แล้ววันนี้",
    LinkSite: "https://ikm.playpark.com/",
    TextSite: "เข้าสู่เว็บไซต์",
    LinkLoad: "https://ikm.playpark.com/th-th/DownloadNow",
    // alert: "alert('Download is Coming Soon');",
    TextLoad: "ดาวน์โหลด",
  },
  {
    id: "4",
    GameName: "เซียนกระบี่สามภพ M",
    Image: "https://media-web.playpark.com/poster-games/mobile/los.png",
    // TagLine: "hot",
    Type: "( MMORPG )",
    LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
    TypeId: "PlayID",
    DescId: "Play with PlayID Account",
    DescGame: "เซียนกระบี่สามภพ Mobile เกมมือถือแนวจีนกำลังภายใน แบบ OPEN WORLD MMORPG พร้อมสวมบทบาทเป็นยอดฝีมือจาก 4 เทพศาสตราวุธมันส์ไร้ขีดจำกัด",
    LinkSite: "https://los.playpark.com/",
    TextSite: "เข้าสู่เว็บไซต์",
    LinkLoad: "https://los.playpark.com/th-th/LOSDownloadObt",
    // alert: "alert('Download is Coming Soon');",
    TextLoad: "ดาวน์โหลด",
  },
  {

    id: "1",
    GameName: "Real Yulgang Mobile",
    Image: "https://media-web.playpark.com/poster-games/mobile/ryg.jpg",
    TagLine: "hot ",
    Type: "( MMORPG )",
    LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
    TypeId: "PlayID",
    DescId: "Play with PlayID Account",
    DescGame: "Real Yulgang Mobile ครบเครื่องทั้งภาพและเสียง ลิขสิทธิ์แท้จากเวอร์ชั่น PC ฉบับดั้งเดิมโดย MGAME สู่เกมมือถือ สนุกไร้ขีดจำกัด สานฝันวันวานตำนานเกม Yulgang",
    LinkSite: "https://realyulgang.playpark.com/",
    TextSite: "เข้าสู่เว็บไซต์",
    LinkLoad: "https://rym.playpark.com/th-th/playparkhome",
    // alert: "alert('Download is Coming Soon');",
    TextLoad: "ดาวน์โหลด",
  },
  {
    id: "4",
    GameName: "TERA Classic SEA",
    Image: "https://media-web.playpark.com/poster-games/mobile/tera-classic.png",
    // TagLine: "hot",
    Type: "( MMORPG )",
    LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
    TypeId: "PlayID",
    DescId: "Play with PlayID Account",
    DescGame: "เกมแนว MMORPG Open-World ที่พัฒนามาจากเกมชื่อดังสุดคลาสสิคอย่าง TERA Online ผจญภัยแบบไร้ขีดจำกัดกับกราฟฟิคที่สวยงามอลังการ ระบบต่างๆ ภายในเกมสุดตื่นตาตื่นใจ การปรับแต่งสกิล และสร้างคอมโบแบบไร้ขีดจำกัด สานต่อตำนาน TERA",
    LinkSite: "https://teraclassic.playpark.com/th-th/",
    TextSite: "เข้าสู่เว็บไซต์",
    LinkLoad: "https://teraclassic.playpark.com/download",
    // alert: "alert('Download is Coming Soon');",
    TextLoad: "ดาวน์โหลด",
  },

  {
    id: "1",
    GameName: "StreetBallers SEA",
    Image: "https://media-web.playpark.com/poster-games/mobile/sb.jpg",
    TagLine: "hot",
    Type: "( CASUAL )",
    LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
    TypeId: "PlayID",
    DescId: "Play with PlayID, AppleID, Facebook, Google Account",
    DescGame: "เกมมือถือแนวสตรีทบาสเก็ตบอล มันส์กับหลากหลายโหมดเกม, สกิลเฉพาะของตัวละคร, ชุดแฟชั่น และตกแต่งสนามได้ดั่งใจ ระเบิดความมันส์ ดังก์แป้นแตกพร้อมกันที่ StreetBallers SEA!",
    LinkSite: "https://streetballers.playpark.com/",
    TextSite: "เข้าสู่เว็บไซต์",
    LinkLoad: "https://streetballers.playpark.com/IH-PRESTORE",
    // LinkLoad: "javascript:void(0)",
    // alert: "alert('Download is Coming Soon');",
    TextLoad: "ดาวน์โหลด",
  },
  {
    id: "3",
    GameName: "Wandering Ark SEA",
    Image: "https://media-web.playpark.com/poster-games/mobile/wa.png",
    TagLine: "soon",
    Type: "(CASUAL)",
    LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
    TypeId: "PlayID",
    DescId: "Play with PlayID Account",
    DescGame: "Wandering Ark สไตล์รูปแบบการเล่นที่ไม่เหมือนใคร ด้วยรูปแบบการเล่นแบบ Slingshot RPG กราฟิกตัวละครสไตล์ Pixel สุดน่ารัก",
    LinkSite: "https://wanderingark.playpark.com/",
    TextSite: "เข้าสู่เว็บไซต์",
    LinkLoad: "https://www.facebook.com/WanderingArkTHbyPlaypark/",
    // alert: "alert('Download is Coming Soon');",
    TextLoad: "Facebook",
  },
  {
    id: "4",
    GameName: "TS Online Mobile",
    Image: "https://media-web.playpark.com/poster-games/mobile/tsm.jpg",
    // TagLine: "soon",
    Type: "( MMORPG )",
    LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
    TypeId: "PlayID",
    DescId: "Play with PlayID Account",
    DescGame: "TS Online Mobile ผจญภัยป่วนมิติ กับปาโต้เยา และเรื่องราวยุคสามก๊ก สุดยอดเกม Turn-Based ในตำนานที่คุณคิดถึง จาก playpark.com",
    LinkSite: "https://tsonline.playpark.com/",
    TextSite: "เข้าสู่เว็บไซต์",
    LinkLoad: "http://onelink.to/pp-tsonline",
    // alert: "alert('Download is Coming Soon');",
    TextLoad: "ดาวน์โหลด",
  },
  {
    id: "4",
    GameName: "Nine Songs Of Fantasy",
    Image: "https://media-web.playpark.com/poster-games/mobile/nine-songs.jpg",
    // TagLine: "soon",
    Type: "( MMORPG )",
    LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
    TypeId: "PlayID",
    DescId: "Play with PlayID Account",
    DescGame: "Nine Songs of Fantasy : ตำนานเพลงรักเก้าสวรรค์ เกมโมบายล์แนวจีน MMORPG บนมือถือ ที่จะพาทุกคนเปิดตำนานผู้ถูกเลือกจากสวรรค์",
    LinkSite: "https://ninesongs.playpark.com/th-th/",
    TextSite: "เข้าสู่เว็บไซต์",
    LinkLoad: "https://ninesongs.playpark.com/th-th/",
    // alert: "alert('Download is Coming Soon');",
    TextLoad: "ดาวน์โหลด",
  },
];


// Sort the array based on custom logic
mm.sort((a, b) => {
  const idA = parseInt(a.id);
  const idB = parseInt(b.id);

  if (idA < 4 && idB < 4) {
    // If both items have id less than 4, sort them by id
    return idA - idB;
  } else if (idA < 4) {
    // Display items with id less than 4 first
    return -1;
  } else if (idB < 4) {
    // Display items with id less than 4 first
    return 1;
  } else {
    // Sort the remaining items alphabetically by GameName in ascending order
    return a.GameName.localeCompare(b.GameName);
  }
});
// const gameListContainer = document.getElementById("mobilegameListContainer");

mm.forEach(gamelist => {
  const gameItem = document.createElement("div");
  gameItem.className = "col-md-3 col-sm-6 col-xs-12";
  gameItem.innerHTML = `
          <div class="single_product">
            <div class="single_product_img">
              <img src="${gamelist.Image}" alt="${gamelist.GameName}" />
              <span class="${gamelist.TagLine}"></span>
              <div class="single_product_overlay all_overlay">
                <div class="text-headproduct">${gamelist.GameName} <br>${gamelist.Type}</div>
                <div class="tooltip-c">
                  <a href="${gamelist.LinkId}" target="_blank">${gamelist.TypeId}</a>
                  <span class="tooltiptext">${gamelist.DescId}</span>
                </div>
                <div class="row" style="padding: 10px 30px;">
                  <div class="col-12">
                    <p style="color:#ffffff;">${gamelist.DescGame}</p>
                    <a href="${gamelist.LinkSite}" class="pp-btn-game">${gamelist.TextSite}</a>
                    <a href="${gamelist.LinkLoad}" class="pp-btn-game" onclick="${gamelist.alert}">${gamelist.TextLoad}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
  playpark_mobilegame.appendChild(gameItem);
});

