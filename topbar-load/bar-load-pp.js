const ppBarLoadEm = document.getElementById('pp_bar_link');
const dateBarLoad = ppBarLoadEm.getAttribute('data-bar-load-pp');

const ppBarLoadLink = [
  ["dl_bar_th", "https://teraclassic.playpark.com/wp-content/uploads/2023/01/tera-logo-app.png", "Tera Classic SEA", "The Best MMORPG Open-World", "https://www.youtube.com/watch?v=yOqYngTZ7T8&t=930s"],
  ["dl_bar_enmy", "https://teraclassic.playpark.com/wp-content/uploads/2023/01/tera-logo-app.png", "Tera Classic SEA", "The Best MMORPG Open-World", "https://app.adjust.com/wt89hgl?engagement_type=fallback_click&fallback=https%3A%2F%2Fteraclassic.playpark.com%2F&redirect_android=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.playpark.tcmaos&redirect_ios=https%3A%2F%2Fapps.apple.com%2Fth%2Fapp%2Ftera-classic-sea%2Fid1614781162"],
];

const linkData = ppBarLoadLink.find(link => link[0] === dateBarLoad);

if (linkData) {
  const [ppEmId, ppEmImg, ppEmGName, ppEmDesc, ppEmLink] = linkData;

  document.querySelector("#pp_bar_img").innerHTML = `<img class="img-responsive" src="${ppEmImg}" alt="${ppEmGName}">`;
  document.querySelector("#pp_bar_gName").innerHTML = ppEmGName;
  document.querySelector("#pp_bar_desc").innerHTML = ppEmDesc;
  document.querySelector("#pp_bar_link").innerHTML = `<a href="${ppEmLink}" target="_blank" class="open-link-pp" id="${ppEmId}">INSTALL</a>`;
}

// เอาไว้ปิดเมื่อไม่ได้ใช่งาน
// document.querySelector("#fixed-top-pp-wm").style.display = "none";


// var pp_barLoad_em = document.getElementById('pp_bar_link');
// var date_barLoad = pp_barLoad_em.getAttribute('data-bar-load-pp');
// var pp_barLoad_em = document.getElementById('pp_bar_link'), date_barLoad = pp_barLoad_em.getAttribute('data-bar-load-pp');
// var pp_barLoad_link = [
//     [
//         "dl_bar_th",
//         "https://teraclassic.playpark.com/wp-content/uploads/2023/01/tera-logo-app.png",
//         "Tera Classic SEA", "The Best MMORPG Open-World",
//         "https://app.adjust.com/xypp43q?engagement_type=fallback_click&fallback=https%3A%2F%2Fteraclassic.playpark.com%2F&redirect_android=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.playpark.tcmaos&redirect_ios=https%3A%2F%2Fapps.apple.com%2Fth%2Fapp%2Ftera-classic-sea%2Fid1614781162"
//     ],
//     [
//         "dl_bar_enmy",
//         "https://teraclassic.playpark.com/wp-content/uploads/2023/01/tera-logo-app.png",
//         "Tera Classic SEA", "The Best MMORPG Open-World",
//         "https://app.adjust.com/wt89hgl?engagement_type=fallback_click&fallback=https%3A%2F%2Fteraclassic.playpark.com%2F&redirect_android=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.playpark.tcmaos&redirect_ios=https%3A%2F%2Fapps.apple.com%2Fth%2Fapp%2Ftera-classic-sea%2Fid1614781162"
//     ],
//     [
//         "dl_bar_zhmy",
//         "https://teraclassic.playpark.com/wp-content/uploads/2023/01/tera-logo-app.png",
//         "Tera Classic SEA", "The Best MMORPG Open-World",
//         "https://app.adjust.com/wt89hgl?engagement_type=fallback_click&fallback=https%3A%2F%2Fteraclassic.playpark.com%2F&redirect_android=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.playpark.tcmaos&redirect_ios=https%3A%2F%2Fapps.apple.com%2Fth%2Fapp%2Ftera-classic-sea%2Fid1614781162"
//     ],
//     // [
//     //     "dl_bar_vn",
//     //      "https://www.playpark.com/vi-vn/"
//     // ],
//     [
//         "dl_bar_id",
//         "https://teraclassic.playpark.com/wp-content/uploads/2023/01/tera-logo-app.png",
//         "Tera Classic SEA",
//         "The Best MMORPG Open-World",
//         "https://app.adjust.com/yzdtsx4?engagement_type=fallback_click&fallback=https%3A%2F%2Fteraclassic.playpark.com%2F&redirect_android=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.playpark.tcmaos&redirect_ios=https%3A%2F%2Fapps.apple.com%2Fth%2Fapp%2Ftera-classic-sea%2Fid1614781162"
//     ],
//     [
//         "dl_bar_sg",
//         "https://teraclassic.playpark.com/wp-content/uploads/2023/01/tera-logo-app.png",
//         "Tera Classic SEA",
//         "The Best MMORPG Open-World",
//         "https://app.adjust.com/k78agdb?engagement_type=fallback_click&fallback=https%3A%2F%2Fteraclassic.playpark.com%2F&redirect_android=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.playpark.tcmaos&redirect_ios=https%3A%2F%2Fapps.apple.com%2Fth%2Fapp%2Ftera-classic-sea%2Fid1614781162"
//     ],
//     [
//         "dl_bar_ph",
//         "https://teraclassic.playpark.com/wp-content/uploads/2023/01/tera-logo-app.png",
//         "Tera Classic SEA",
//         "The Best MMORPG Open-World",
//         "https://app.adjust.com/js9pi9m?engagement_type=fallback_click&fallback=https%3A%2F%2Fteraclassic.playpark.com%2F&redirect_android=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.playpark.tcmaos&redirect_ios=https%3A%2F%2Fapps.apple.com%2Fth%2Fapp%2Ftera-classic-sea%2Fid1614781162"
//     ],
//     // [
//     //     "dl_bar_global",
//     //     "https://www.playpark.com/en-global/"
//     // ],
// ];

// for (var i = 0; i < pp_barLoad_link.length; i++) {
//     if (pp_barLoad_link[i][0] == date_barLoad) {
//         // var [pp_em_id, pp_em_img, pp_em_gName, pp_em_desc, pp_em_link] = pp_barLoad_link[i];
//         var pp_em_id = pp_barLoad_link[i][0];
//         var pp_em_img = pp_barLoad_link[i][1];
//         var pp_em_gName = pp_barLoad_link[i][2];
//         var pp_em_desc = pp_barLoad_link[i][3];
//         var pp_em_link = pp_barLoad_link[i][4];
//         document.querySelector("#pp_bar_img").innerHTML += '<img class="img-responsive" src="' + pp_em_img + '" alt="' + pp_em_gName + '">';
//         document.querySelector("#pp_bar_gName").innerHTML += pp_em_gName;
//         document.querySelector("#pp_bar_desc").innerHTML += pp_em_desc;
//         document.querySelector("#pp_bar_link").innerHTML += '<a href=" ' + pp_em_link + ' " target="_blank" class="open-link-pp" id="' + pp_em_id + '">INSTALL</a>';
//         break;
//     }
// }






