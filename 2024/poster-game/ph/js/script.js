document.addEventListener("DOMContentLoaded", function () {
    fetch("https://media-web.playpark.com/all-js/pp-poster-2025/ph/all-games.json") // โหลด JSON
        .then(response => response.json())
        .then(data => {
            const pcContainer = document.getElementById("pc-game-container");
            const mobileContainer = document.getElementById("mobile-game-container");
            const playEarnContainer = document.getElementById("play-earn-container");

            const pcDataType = pcContainer.getAttribute("data");
            const mobileDataType = mobileContainer.getAttribute("data");
            const playEarnDataType = playEarnContainer.getAttribute("data");

            pcContainer.innerHTML = "";
            mobileContainer.innerHTML = "";
            playEarnContainer.innerHTML = "";

            // กำหนดลำดับความสำคัญของ status
            const statusPriority = { "hot": 1, "new": 2, "soon": 3, "": 4 };

            // จัดเรียงเกมตาม priority -> status -> name (A-Z)
            const sortedGames = data.games.sort((a, b) => {
                let priorityA = a.priority !== "" ? a.priority : 999; 
                let priorityB = b.priority !== "" ? b.priority : 999;

                if (priorityA !== priorityB) {
                    return priorityA - priorityB;
                }

                let statusA = statusPriority[a.status] || 4;
                let statusB = statusPriority[b.status] || 4;

                if (statusA !== statusB) {
                    return statusA - statusB;
                }

                return a.name.localeCompare(b.name);
            });

            // วนลูปแสดงผลเกมที่ถูกจัดเรียงแล้ว
            sortedGames.forEach(game => {
                let statusClass = game.status ? `<span class="${game.status}"></span>` : "";

                let playIDButton = game.links.playID
                    ? `<div class="tooltip-c">
                          <a href="${game.links.playID.url}" target="_blank">PlayID</a>
                          <span class="tooltiptext">${game.links.playID.tooltip}</span>
                       </div>`
                    : "";

                let websiteButton = game.links.website
                    ? `<a href="${game.links.website}" target="_blank"
                         style="padding:5px 15px; background: #ffffff; color: black; text-align: center;">Website</a>` 
                    : "";

                let downloadButton = game.links.download
                    ? `<a href="${game.links.download}" target="_blank"
                         style="padding:5px 15px; background: #ffffff; color: black; text-align: center;">Download</a>` 
                    : "";

                let facebookButton = game.links.facebook
                    ? `<a href="${game.links.facebook}" target="_blank"
                         style="padding:5px 15px; background: #ffffff; color: black; text-align: center;">Facebook</a>` 
                    : "";

                let buttonSection = "";

                // เช็ค data="load" และ data="index"
                if ((game.type === "PC" && pcDataType === "load") || 
                    (game.type === "Mobile" && mobileDataType === "load") || 
                    (game.type === "Play & Earn" && playEarnDataType === "load")) {
                    
                    // ถ้าเป็น data="load" ให้แสดงแค่ 1 ปุ่ม (Download > Website > Facebook)
                    buttonSection = downloadButton || websiteButton || facebookButton;
                } else {
                    // ถ้าเป็น data="index" ให้แสดงปุ่มทั้งหมด
                    buttonSection = `${websiteButton} ${downloadButton} ${facebookButton}`;
                }

                let gameHTML = `
                    <div class="col-md-3 col-sm-6 col-xs-12 padding-mobile">
                        <div class="single_product">
                            <div class="single_product_img">
                                <img src="${game.image}" alt="${game.name}" />
                                ${statusClass}  
                                <div class="single_product_overlay all_overlay">
                                    <div class="text-headproduct">${game.name}<br>(${game.genre})</div>
                                    ${playIDButton} <!-- tooltip-c (PlayID) -->
                                    <div class="row description">
                                        <div class="col-12">
                                            <p style="color:#ffffff;">${game.description}</p>
                                            ${buttonSection}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

                // แยกแสดงในแต่ละหมวด
                if (game.type === "PC") {
                    pcContainer.innerHTML += gameHTML;
                } else if (game.type === "Mobile") {
                    mobileContainer.innerHTML += gameHTML;
                } else if (game.type === "Play & Earn") {
                    playEarnContainer.innerHTML += gameHTML;
                }
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});
