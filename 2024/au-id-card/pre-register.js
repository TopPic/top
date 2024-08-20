// ใส่ตัวเลือกธงประเทศลงใน input ถ้ามี #Mobile
// const phoneInputField = document.querySelector("#Mobile");
// const phoneInput = window.intlTelInput(phoneInputField, {

//   geoIpLookup: function (callback) {

//     $.get('https://ip2location.playpark.com/detectip.ashx', function () {}, "json").always(function (resp) {
//       console.log(resp);
//       var countryCode = (resp && resp.countryCode) ? resp.countryCode : "sg";
// 	  $("#countryByIP").val(resp.countryCode);
//       callback(countryCode);
//     });
//   },
//   onlyCountries: ["th", "sg", "my", "id", "ph", "vn"],
//   initialCountry: "auto",
//   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
// });


// function getAllUrlParameters() {
//     const params = new URLSearchParams(window.location.search);
//     let paramString = '';
//     for (const [key, value] of params.entries()) {
//         paramString += `${key}=${value}&`;
//     }
//     // Remove the trailing '&' if paramString is not empty
//     if (paramString.endsWith('&')) {
//         paramString = paramString.slice(0, -1);
//     }
//     return paramString;
// }


function submitForm() {

    // Get the modal element
    // var myModal1 = document.getElementById('exampleModal1');
    //   var myModal2 = document.getElementById('exampleModal2');


    //   const mobileInput = $('#Mobile');

    //   // Check if the input is not required and is empty
    //   if (!mobileInput.prop('required') && !mobileInput.val()) {
    //     mobileInput.val("-");
    //   }

    //   //ถ้ามีค่าของธงประเทศให้ทำ ...
    //   if (phoneInputField != null) {
    //     const phoneNumber2 = phoneInput.getSelectedCountryData();
    //     let flag = $('#flagps').val();
    //     $('input[name="' + flag + '"]').val(encodeURIComponent(phoneNumber2.name));
    //   }

    // Clear error messages
    const errorMessages = document.getElementsByClassName('error-message');
    Array.from(errorMessages).forEach(function (element) {
        element.textContent = '';
        element.style.display = 'none';
    });

    // สร้าง url
    const eventid = document.getElementById('eventid').value;
    const language = document.getElementById('lang').value;
    //   const redirectto = document.getElementById('redirectto').value;

    //   var lower =  $("#email").val();
    //   $("#email").val(lower.toLowerCase());

    let url = `https://secure2.playpark.com/PreRegisterAPI/PreRegisterAPI.ashx?eventid=${eventid}`;

    const freeTextInputs = document.querySelectorAll('input[name^="FreeText"]');
    freeTextInputs.forEach(input => {
        const paramName = input.name;
        let paramValue = '';

        if (input.type === 'radio' || input.type === 'checkbox') {
            if (input.checked) {
                paramValue = encodeURIComponent(input.value);
            }
        } else {
            paramValue = encodeURIComponent(input.value);
        }
        if (paramValue !== '') {
            url += `&${paramName}=${paramValue}`;
        }
    });
    // console.log(url);

    // Perform the API call using the constructed URL
    fetch(url, {
        method: 'POST',
    })
        .then(response => response.json())
        .then(data => {
            // console.log('Response:', data);
            const code = data.code;
            const result = data.result[0];

            if (code !== 0) {
                for (let i = 1; i <= 10; i++) {
                    const freeTextKey = `FreeText${i}`;
                    const freeTextValue = result[freeTextKey];

                    if (freeTextValue && freeTextValue !== '0') {
                        const fieldName = `FreeText${i}`;
                        const fieldValue = interpretFreeText(freeTextValue, language);
                        const errorElement = document.getElementById(`error${fieldName}`);
                        errorElement.textContent = fieldValue;
                        errorElement.style.display = 'block';
                    }
                }
            } else {

                Swal.fire({
                    title: "ลงทะเบียนสำเร็จ",
                    text: "That thing is still around?",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload(); // Reload the page
                    }
                });

                // Use Bootstrap's Modal class to show the modal
                // var modal1 = new bootstrap.Modal(myModal1);
                // var modal2 = new bootstrap.Modal(myModal2);
                // submitButton()
                // modal2.show();


                // const iframeContainer = document.getElementById("iframeContainer");
                // const iframe = document.createElement("iframe");
                // iframe.src = redirectto + "?" + getAllUrlParameters();
                // iframe.width = "100%";
                // iframe.height = "500";
                // iframeContainer.appendChild(iframe);
                // $("iframe").attr("allowTransparency", "true");

                // setTimeout(function () {
                //     // modal2.hide();
                //     modal1.show();
                // }, 3000);


            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur during the request
        });
}
