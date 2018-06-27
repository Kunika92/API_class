function bindFormData() {
  // console.log('hello');
  const fname = $('#fname').val();
  const lname = $('#lname').val();
  const title = $('#title').val();
  const url = $('#url').val();

  const cardValue = `BEGIN:VCARD
VERSION:3.0
N:${lname};${fname}
FN:${fname} ${lname}
TITLE:${title}
TEL;CELL:6046822787
EMAIL;WORK;INTERNET:email@vanarts.com
URL:${url}
END:VCARD`;
    // console.log(encodeURIComponent(cardValue));
  $('#qr_code').attr('src', `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${encodeURIComponent(cardValue)}`);
  // return false;
}

function buildVcardQr() {
  const imgSrc = $('#qr_code').attr('src');
  $('#qrForm').bind('submit', () => {
    bindFormData();
    return false;
  });
  $('#reset').click(function () {
    $(this).closest('form').find('input[type=text]').val('');
    $('#qr_code').attr('src', imgSrc);
    return false;
  });
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    buildVcardQr,
  };
}
