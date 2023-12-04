// Define the multi-language text in a JSON object
const languageText = {
  en: {
    game: 'Games',
    services: 'Services',
    memberSystem: 'Member System',
    registerID: 'Register ID',
  },
  th: {
    game: 'เกม',
    services: 'บริการ',
    memberSystem: 'ระบบสมาชิก',
    registerID: 'สมัครไอดี',
  },
};

// Get the reference to the target element
const PPTHtopbar2024WP1 = document.getElementById("ppth-topbar-2024-placeholder");

// Use the IP detection API to get the user's country
fetch('https://ip2location.playpark.com/detectip.ashx')
  .then((response) => response.json())
  .then((data) => {
    // Determine the selected language based on the country code
    const selectedLanguage = data.countryCode === 'TH' ? 'th' : 'en';

    // Create the HTML content with the selected language
    const mainwp = `
      <div id="ppth-topbar-2024-content">
        <div class="frame-parent">
          <div class="frame-group">
            <div class="topbar-list-btn-left">
              <a class="playpark-parent">
                <img class="logo-lg" alt="" src="./public/PP-logo.png" />
                <img class="logo-sm" alt="" src="./public/PP-logosm.png" />
              </a>
              <a class="vector-parent" id="open_bar">
                <div class="register">${languageText[selectedLanguage].game}</div>
                <img class="vector-icon" alt="" src="./mainbar/public/vector.svg" />
              </a>
              <a href="#" class="vector-parent">
                <div class="register">${languageText[selectedLanguage].services}</div>
              </a>
            </div>
            <div class="topbar-list-btn-right">
              <a href="#" class="vector-parent">
                <img class="vector-icon1" alt="" src="./mainbar/public/Vectorqqq.svg" />
                <div class="register topbar-btn-name">${languageText[selectedLanguage].memberSystem}</div>
              </a>
              <a href="#" class="vector-parent">
                <img class="vector-icon1" alt="" src="./mainbar/public/Vectoruuuu.svg" />
                <div class="register topbar-btn-name">${languageText[selectedLanguage].registerID}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Append the HTML string to the target element
    PPTHtopbar2024WP1.innerHTML = mainwp;
	
	
	
	
    // Get the close button and menu element by their IDs
    var PPTHtopbar2024CloseButton = document.getElementById('close');
    var PPTHtopbar2024OpenButton = document.getElementById('open_bar');
    var PPTHtopbar2024MenuElement = document.getElementById('barmenu_wp');
    var PPTHtopbar2024Backdrop = document.getElementById('backdrop');

    // Add a click event listener to the close button
    PPTHtopbar2024CloseButton.addEventListener('click', function () {
      // Toggle the 'show' class on the menu element
      PPTHtopbar2024MenuElement.classList.toggle('show');
      PPTHtopbar2024Backdrop.classList.toggle('show');
    });

    // Add a click event listener to the close button
    PPTHtopbar2024Backdrop.addEventListener('click', function () {
      // Toggle the 'show' class on the menu element
      PPTHtopbar2024MenuElement.classList.toggle('show');
      PPTHtopbar2024Backdrop.classList.toggle('show');
    });


    // Add a click event listener to the close buttons
    PPTHtopbar2024OpenButton.addEventListener('click', function () {
      // Toggle the 'show' class on the menu element
      PPTHtopbar2024MenuElement.classList.toggle('show');
      PPTHtopbar2024Backdrop.classList.toggle('show');
    });

  })
  /*.catch((error) => {
    console.error('Error fetching IP data:', error);
    // Fallback to English if there's an error or the country code is not available
    const mainwp =  English version of HTML content ;
    PPTHtopbar2024WP1.innerHTML = mainwp;
  });*/



    const PPTHtopbar2024WP2 = document.getElementById("ppth-topbar-2024-placeholder2");


    const html = `
<div id="ppth-topbar-2024-main">
  <div id="backdrop" class=""></div>
  <div class="frame-parent " id="barmenu_wp">
    <div class="frame-wrapper">
       <div class="vector-wrapper" id="close">
          <img class="vector-icon" alt="" src="./public/vector.svg">
        </div>
    
    </div> 
       
       <iframe src="redirect.html" frameBorder="0" style="height: 100%;width: 100%"></iframe>
     
  </div>
</div>
        `;

    // document.body.innerHTML += html;
    PPTHtopbar2024WP2.innerHTML = html;


    // JavaScript to toggle active container when menu items are clicked
   // const PPTHtopbar2024GameContainerBTN = document.getElementById('game_container');
    //  const serviceContainer = document.getElementById('service_container');
  //  const PPTHtopbar2024MenuGameList = document.getElementById('menu_gamelist');
    //  const menuServiceList = document.getElementById('menu_servicelist');
    /*
    	menuGameList.addEventListener('click', () => {
            gameContainerBTN.classList.add('container_active');
            serviceContainer.classList.remove('container_active');

            menuGameList.classList.add('button_active');
            menuServiceList.classList.remove('button_active');
        });

        menuServiceList.addEventListener('click', () => {
            serviceContainer.classList.add('container_active');
            gameContainerBTN.classList.remove('container_active');

            menuServiceList.classList.add('button_active');
            menuGameList.classList.remove('button_active');
        });
*/

    // import game data

 //   import PPTHtopbar2024GamejsonData from './data.js'; // Import the JSON data from data.js

   // const PPTHtopbar2024GameContainer = document.getElementById('game_container');

    // Loop through the JSON data and generate HTML content using template literals
   /* PPTHtopbar2024GamejsonData.forEach(item => {
      const PPTHtopbar2024GameListContent = `
                <a href="${item.destination}" id="${item.buttonID}" class="x0w-1-parent game-name-container">
                    <img class="x0w-1-icon game-icon" alt="" src="${item.imageurl}" />
                    <div class="samkok-tactics-m-parent">
                        <div class="samkok-tactics-m gamename">${item.gamename}</div>
                        <div class="vector-parent">
                            <img class="vector-icon1 icon-game-pc" alt="" src="./public/vector1.svg" style="display: ${item.type === 'p' || item.type === 'pm' ? 'block' : 'none'}" />
                            <img class="vector-icon2 icon-game-m" alt="" src="./public/vector2.svg" style="display: ${item.type === 'm' || item.type === 'pm' ? 'block' : 'none'}" />
                        </div>
                    </div>
                </a>
            `;
      PPTHtopbar2024GameContainer.innerHTML += PPTHtopbar2024GameListContent;
    });*/


    // import service data
    /*
    // Import the JSON data from data.js
      import jsonDataServ from './dataserv.js';

    // Function to generate HTML content based on cat value
    function generateHTML(data) {
      data.forEach(item => {
        // Create an HTML template using ES6 template literals
        const htmlTemplate = `
          <a href="#" class="play-mall-parent serv-wp">
            <div class="samkok-tactics-m serv-name">${item.servicename}</div>
            <i class="lorem-ipsum-is serv-desc">${item.servicedesc}</i>
          </a>
        `;

        // Determine the target container based on the "cat" value
        const targetContainerId = `serv_cat_${item.cat}`;
        const targetContainer = document.getElementById(targetContainerId);

        if (targetContainer) {
          // Append the HTML content to the container using innerHTML
          targetContainer.innerHTML += htmlTemplate;
        }
      });
    }


      // Call the function with your JSON data
      generateHTML(jsonDataServ);*/

