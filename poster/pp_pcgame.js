// ********************
// *******Readme*******
// ********************
// id 1 == hot
// id 2 == new
// id 3 == soon
// id 4 == คือไม่มีแท็ก
// ถ้ายังไม่เปิดดาวน์โหลด ตัวแปร "LinkLoad" ให้ใส่ javascript:void(0) แล้วเปิดคอมเม้น "alert"
var app = new Vue({
    el: '#PP_pcGame',
    data: {
        games: [
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
                id: "1",
                GameName: "ELYON SEA",
                Image: "https://media-web.playpark.com/poster-games/pc/elyon.png",
                TagLine: "hot",
                Type: "( MMORPG )",
                LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
                TypeId: "PlayID",
                DescId: "Play with PlayID Account",
                DescGame: "ELYON​ ที่สุดของ PC แนว Open-World Action MMORPG High Quality ฟอร์มยักษ์แห่งปี ความขัดแย้ง​ที่จะนำพาไปสู่สงคราม และการผจญภัยแบบไร้ขีดจำกัด",
                LinkSite: "https://elyon.playpark.com/",
                TextSite: "เข้าสู่เว็บไซต์",
                LinkLoad: "https://www.playpark.com/th-th/elyon-download/",
                // alert: "alert('Download is Coming Soon');",
                TextLoad: "ดาวน์โหลด",
            },

            {
                id: "1",
                GameName: "Tales Runner",
                Image: "https://media-web.playpark.com/poster-games/pc/tr.png",
                TagLine: "hot",
                Type: "( MMORPG )",
                LinkId: "https://secure2.playpark.com/register/registSelect.aspx?game=PP",
                TypeId: "PlayID",
                DescId: "Play with PlayID Account",
                DescGame: "เกมวิ่งอันดับ 1 ของไทย มีด่านสนามจากโลกนิทานให้เลือกวิ่งมากกว่า 100 สนาม",
                LinkSite: "https://talesrunner.playpark.com/",
                TextSite: "เข้าสู่เว็บไซต์",
                LinkLoad: "https://www.playpark.com/th-th/tales-runner-download/",
                // alert: "alert('Download is Coming Soon');",
                TextLoad: "ดาวน์โหลด",
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
                GameName: "Elsword",
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
        ],
    },
    computed: {
        ordered: function () {
            return _.orderBy(this.games, ['id', 'GameName'], ['ASC', 'ASC']);
        },
    }
});

