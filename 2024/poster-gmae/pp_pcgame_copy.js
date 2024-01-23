// ********************
// *******Readme*******
// ********************
// id 0 คือ อยู๋หน้าสุด และเรียงตามตัวอักษร
// id 1 คือ hot
// id 2 คือ new
// id 3 คือ soon
// id 4 คือ คือไม่มีแท็ก
// ถ้ายังไม่เปิดดาวน์โหลด ตัวแปร "LinkLoad" ให้ใส่ javascript:void(0) แล้วเปิดคอมเม้น "alert"

const pc_gamesArray = [
    {
        id: "1",
        GameName: "Audition",
        Image: "https://media-web.playpark.com/poster-games/pc/au.png",
        TagLine: "hot ",
        Type: "( MMORPG )",
        LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
        TypeId: "PlayID",
        DescId: "Play with PlayID Account",
        DescGame: "เกมแดนซ์ออนไลน์สุดฮิตอันดับ 1 ของเมืองไทย เต้นมันส์กับเพลงโปรดจากศิลปินดังได้ตลอด 24 ชั่วโมง",
        LinkSite: "https://audition.playpark.com/",
        TextSite: "เข้าสู่เว็บไซต์",
        LinkLoad: "https://www.playpark.com/th-th/audition-download/",
        // alert: "alert('Download is Coming Soon');",
        TextLoad: "ดาวน์โหลด",
    },
    {
        id: "4",
        GameName: "Flyff Online",
        Image: "https://media-web.playpark.com/poster-games/pc/flyff-u.jpg",
        // TagLine: "hot",
        Type: "( MMORPG )",
        LinkId: "https://register.playpark.net/register/registSelect.aspx?game=PP",
        TypeId: "PlayID",
        DescId: "Play with PlayID Account",
        DescGame: "Flyff is a colorful MMORPG where you can explore, fight monsters, and fly through the skies using brooms or wings. Dive into quests and join a vibrant community for an immersive gaming experience. One FUN universe, On any device.",
        LinkSite: "https://flyffu.playpark.com/",
        TextSite: "เข้าสู่เว็บไซต์",
        LinkLoad: "https://universe.flyff.com/",
        // alert: "alert('Download is Coming Soon');",
        TextLoad: "ดาวน์โหลด",
    },
    {
        id: "4",
        GameName: "Grand Chase Classic",
        Image: "https://media-web.playpark.com/poster-games/pc/gcc.jpg",
        // TagLine: "hot",
        Type: "( MMORPG )",
        LinkId: "https://register.playpark.net/register/registSelect.aspx?game=PP",
        TypeId: "PlayID",
        DescId: "Play with PlayID Account",
        DescGame: "GrandChase beckons adventurers to an anime-inspired realm! Craft your hero, gear up, and defend Aernas in this thrilling action-RPG. Solo dungeons or daring raids with friends, it's an epic quest for glory!",
        LinkSite: "http://gcc.playpark.com/",
        TextSite: "เข้าสู่เว็บไซต์",
        LinkLoad: "https://www.facebook.com/GCCbyPlayPark",
        // alert: "alert('Download is Coming Soon');",
        TextLoad: "Facebook",
    },
    {
        id: "1",
        GameName: "Yulgang",
        Image: "https://media-web.playpark.com/poster-games/pc/yg.png",
        TagLine: "hot",
        Type: "( MMORPG )",
        LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
        TypeId: "PlayID",
        DescId: "Play with PlayID Account",
        DescGame: "ยุทธภพครบสลึง จากการ์ตูนดัง สู่เกม MMORPG ยอดฮิต กว่า 7 ล้านไอดี",
        LinkSite: "https://yulgang.playpark.com/",
        TextSite: "เข้าสู่เว็บไซต์",
        LinkLoad: "https://www.playpark.com/th-th/yulgang-download/",
        // alert: "alert('Download is Coming Soon');",
        TextLoad: "ดาวน์โหลด",
    },
    {
        id: "4",
        GameName: "ELSWORD",
        Image: "https://media-web.playpark.com/poster-games/pc/es.png",
        Type: "( MMORPG )",
        LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
        TypeId: "PlayID",
        DescId: "Play with PlayID Account",
        DescGame: "เกม Stylish Action Online ที่นิยมหลายประเทศทั่วโลก ได้รับการยกย่องว่าเป็นเกมที่มันส์ที่สุด",
        LinkSite: "https://elsword.playpark.com/",
        TextSite: "เข้าสู่เว็บไซต์",
        LinkLoad: "https://www.playpark.com/th-th/elsword-download/",
        // alert: "alert('Download is Coming Soon');",
        TextLoad: "ดาวน์โหลด",
    },
];


// Sort the array based on custom logic
pc_gamesArray.sort((a, b) => {
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
// const gameListContainer = document.getElementById("gameListContainer");

pc_gamesArray.forEach(gamelist => {
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
    playpark_pcgame.appendChild(gameItem);
});

