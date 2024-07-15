let translations = {};

function fetchTranslations() {
    $.getJSON('https://www.playpark.net/theme/data/language.json', function(data) {
        translations = data;
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        const defaultLang = langParam || 'en';
        changeLanguage(defaultLang); // Default or URL parameter language
    });
}

function changeLanguage(lang) {
    $.each(translations[lang], function(key, value) {
        $('#' + key).text(value);
    });
    $('#languageSwitcher').val(lang); // Update the select dropdown
}


    fetchTranslations();
    $('#languageSwitcher').on('change', function() {
        changeLanguage(this.value);
    
    });
