function buildVcard() {
  $('#target').bind('submit', () => {
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

    // $('textarea').append("hello<br>");
    // $('textarea').append(`${fname}<br>`);
    $('textarea').append(cardValue);
    // console.log(cardValue);
    return false;
  });
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    buildVcard,
  };
}
