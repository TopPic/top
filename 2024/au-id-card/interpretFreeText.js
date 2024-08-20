
function interpretFreeText(value, language) {
  // Define translations for FreeText values
  const translations = {
    en: {
      '0' : 'Correct information',
      '1' : 'No factor found',
      '2' : 'Please provide an e-mail address',
      '3' : 'Please enter valid e-mail address',
      '4' : 'Please enter provide a valid mobile phone number',
      '5' : 'Please enter provide a valid mobile phone number',
      '6' : 'Please enter the numbers information',
      '7' : 'Please enter valid number information',
      '8' : 'Please enter the alphabet A-Z information',
      '9' : 'Please enter valid alphabet A-Z information',
      '10': 'The provided email is already is in use.',
      '11': 'This mobile number is already is in use.',
      '12': 'Number have duplicate(s) in the system.',
      '13': 'The characters have duplicates in the system.',
    },
    th: {
      '0' : 'ข้อมูลถูกต้อง',
      '1' : 'ไม่พบตัวแปร',
      '2' : 'ข้อมูลประเภท อีเมล เป็นค่าว่าง',
      '3' : 'ข้อมูลประเภท อีเมล ไม่ถูกต้อง',
      '4' : 'ข้อมูลประเภท เบอร์โทรศัพทร์ เป็นค่าว่าง',
      '5' : 'ข้อมูลประเภท เบอร์โทรศัพทร์ ไม่ถูกต้อง',
      '6' : 'ข้อมูลประเภท ตัวเลข เป็นค่าว่าง',
      '7' : 'ข้อมูลประเภท ตัวเลข ไม่ถูกต้อง',
      '8' : 'ข้อมูลประเภท ตัวอักษร เป็นค่าว่าง',
      '9' : 'ข้อมูลประเภท ตัวอักษร ไม่ถูกต้อง',
      '10': 'ข้อมูลประเภท อีเมล ซ้ำในระบบ',
      '11': 'ข้อมูลประเภท เบอร์โทรศัพท์ ซ้ำในระบบ',
      '12': 'ข้อมูลประเภท ตัวเลข ซ้ำในระบบ',
      '13': 'ข้อมูลประเภท ตัวอักษร ซ้ำในระบบ',
    },
    id: {
      '0' : 'informasi yang benar',
      '1' : 'tidak ada faktor yang ditemukan',
      '2' : 'Silakan masukkan e-mail',
      '3' : 'Silakan masukkan alamat email yang valid',
      '4' : 'Silakan masukkan nomer telepon',
      '5' : 'Silakan masukkan nomor telepon yang valid',
      '6' : 'Silakan masukkan informasi angka',
      '7' : 'Silakan masukkan informasi nomor yang valid',
      '8' : 'Silakan masukkan informasi alfabet AZ',
      '9' : 'Silakan masukkan informasi alfabet AZ alfabet yang valid',
      '10': 'E-mail ini telah didaftarkan sebelumnya',
      '11': 'Nomor telepon ini telah didaftarkan sebelumnya',
      '12': 'Nomor ini telah didaftarkan sebelumnya',
      '13': 'Alfabet ini telah didaftarkan sebelumnya',
    },
    zh: {
      '0' : '',
      '1' : '',
      '2' : '',
      '3' : '',
      '4' : '',
      '5' : '',
      '6' : '',
      '7' : '',
      '8' : '',
      '9' : '',
      '10': '',
      '11': '',
      '12': '',
      '13': '',
    },
  };

  // Check if the provided language exists in the translations object
  if (translations.hasOwnProperty(language)) {
    const translation = translations[language][value];
    if (translation) {
      return translation;
    }
  }

  // If the language or translation is not found, return the original value
  return value;
}