function submitForm() {
    // Clear error messages
    const errorMessages = document.getElementsByClassName('error-message');
    Array.from(errorMessages).forEach(function (element) {
        element.textContent = '';
        element.style.display = 'none';
    });

    // สร้าง url
    const eventid = document.getElementById('eventid').value;
    const language = document.getElementById('lang').value;

    let url = `https://secure2.playpark.com/PreRegisterAPI/PreRegisterAPI.ashx?eventid=${eventid}`;
    const freeTextInputs = document.querySelectorAll('input[name^="FreeText"]');
    freeTextInputs.forEach(input => {
        const paramName = input.name;
        let paramValue = encodeURIComponent(input.value);
        if (paramValue) {
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
                    text: "",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload(); // Reload the page
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur during the request
        });
}
