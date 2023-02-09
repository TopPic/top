// /***************** style *****************/
var wm_pp_footer_ci_center_element = document.getElementById('wm_pp_footer_ci_center');
var wm_pp_footer_ci_center_dataID = wm_pp_footer_ci_center_element.getAttribute('data-wm-pp-footer-ci-center-id');

var wm_pp_footer_ci_center_datas= [
  ["au", "pc" , "&#169;2004-2005 T3 Entertainment CO.,LTD., HANBITSOFT INC. ALL RIGHTS RESERVED. ©2006 Playpark Co., Ltd. All rights reserved.©2006 Asiasoft Corporation Public Company Limited." ],
  ["es", "pc" , "&#169;2007 KOG corporation . All Rights Reserved. ©2012 Asiasoft Corporation Public Company Limited. All Rights Reserved."],
  ["pw", "pc" , "Perfect World / 完美世界 OL, Copyright 2018, Perfect Game Speed Company Limited. All rights reserved. 2020 PLAYPARK CO., LTD. All rights reserved." ],
  ["swm", "pc" , "Swordsman Online/笑傲江湖OL, Copyright 2018, Perfect Game Speed Company Limited All rights reserved. .2019 PLAYPARK CO., LTD. All Rights Reserved" ],
  ["tr", "pc" , "&#169; Smilegate Megaport. All rights reserved. &#169; RHAON Entertainment. All rights reserved.©2016 Asiasoft Corporation Public Company Limited. All Rights Reserved" ],
  ["yg", "pc" , "©2005. MGAME Corp. All rights reseved. ©2017 Asiasoft Corporation Public Company Limited. All Rights Reserved" ],
  ["el", "pc" , "Copyright © 2022 BLUEHOLE STUDIO INC. ALL RIGHTS RESERVED. Licensed and Published by Playpark Company Limited. ELYON is a registered trademark of Bluehole Studio Inc." ],
  ["pp", "pc" , "&#169; 2019 Asiasoft Corporation Public Company Limited. All Rights Reserved." ],
  ["as", "pc" , "©2018 Asiasoft Corporation Public Company Limited. All Rights Reserved." ],
  ["chm", "mobile" , "&#169; CMGE All Rights Reserved. &#169; 2022 Asiasoft Corporation Public Company Limited. All Rights Reserved." ],
  ["hym", "mobile" , "&#169; 2021 Chinesegamer International Corp. All Rights Reserved.©2021 ASIASOFT CORPORATION PUBLIC COMPANY LIMITED. ALL RIGHT RESERVED 'HuangYi Mobile(Wong Yi Mobile)' software is an adaption of the original novel series created by Huang Yi(Wong Yi). The copyright of the novel series is owned by WONGYI BOOKS HONG KONG LTD, all rights reserved. Any infringement is prohibited." ],
  ["rym", "mobile" , "熱血江湖 &#169; 2020. Jeon Keuk Jin/Yang Jae Hyun.&#169; 2020. Tigon Mobile. Co., Ltd. &#169; Asiasoft Corporation Public Company Limited &#169; MGAME Corp. All right reserved." ],
  ["tsm", "mobile" , "&#169; 2017 Chinesegamer International Corp. All Rights Reserved.©2017 ASIASOFT CORPORATION PUBLIC COMPANY LIMITED. ALL RIGHT RESERVED" ],
  ["ns", "mobile" , "&#169; 2022 Shenzhen Rapid Innovative Technology Co., Ltd. All Rights Reserved. &#169; 2022 Playpark Co., Ltd. All Rights Reserved. " ],
  ["tera", "mobile" , "Copyright&#169; 2022 Lantu Games Ltd. All Rights Reserved. licensed and published by Playpark Co., Ltd." ],
  ["los", "mobile" , "Copyright 2007-2022 linekong.com,All Rights Reserved. 2022 Playpark Co., Ltd. All Rights Reserved." ],
];

var wm_pp_footer_ci_center_as = '';

let wm_pp_footer_ci_center_css = "margin-bottom: 15px;";
  
for (var wm_pp_footer_ci_center_i=0 ; wm_pp_footer_ci_center_i<wm_pp_footer_ci_center_datas.length ; wm_pp_footer_ci_center_i++ ){
    
    if (wm_pp_footer_ci_center_datas[wm_pp_footer_ci_center_i][0] == wm_pp_footer_ci_center_dataID){
        var wm_pp_footer_ci_center_gName = wm_pp_footer_ci_center_datas[wm_pp_footer_ci_center_i][0];
        var wm_pp_footer_ci_center_gType = wm_pp_footer_ci_center_datas[wm_pp_footer_ci_center_i][1];
        var wm_pp_footer_ci_center_gText = wm_pp_footer_ci_center_datas[wm_pp_footer_ci_center_i][2];
         document.querySelector("#wm_pp_footer_ci_center").innerHTML += '<img src="https://media-web.playpark.com/ci-game/'+wm_pp_footer_ci_center_gType+'/footer_wp_ci_'+ wm_pp_footer_ci_center_gName + '.png" style= " ' + wm_pp_footer_ci_center_css + ' " class="img-fluid"><div>' + wm_pp_footer_ci_center_gText + wm_pp_footer_ci_center_as +'</div>';
        break;
    }
}

var wm_pp_footer_ci_center_datas_mis= [
  
  ["mis_text_white", "pc" , "&#169;2022 Playpark Company Limited. All Rights Reserved." ],
  ["mis_text_black", "pc" , "&#169;2022 Playpark Company Limited. All Rights Reserved." ],
];

for (var wm_pp_footer_ci_center_i=0 ; wm_pp_footer_ci_center_i<wm_pp_footer_ci_center_datas_mis.length ; wm_pp_footer_ci_center_i++ ){
    
  if (wm_pp_footer_ci_center_datas_mis[wm_pp_footer_ci_center_i][0] == wm_pp_footer_ci_center_dataID){
      // var wm_pp_footer_ci_center_gName = wm_pp_footer_ci_center_datas_mis[wm_pp_footer_ci_center_i][0];
      // var wm_pp_footer_ci_center_gType = wm_pp_footer_ci_center_datas_mis[wm_pp_footer_ci_center_i][1];
      var wm_pp_footer_ci_center_gText = wm_pp_footer_ci_center_datas_mis[wm_pp_footer_ci_center_i][2];
       document.querySelector("#wm_pp_footer_ci_center").innerHTML += '<div>' + wm_pp_footer_ci_center_gText + wm_pp_footer_ci_center_as +'</div>';
      break;
  }
}

var style = document.createElement('style');
style.innerHTML = `
.mis_text_white{
  color: #fff; 
  font-weight: 600; 
  text-align: center;
}
.mis_text_black{
  color: #000; 
  font-weight: 600; 
  text-align: center;
}
`;
document.head.appendChild(style);