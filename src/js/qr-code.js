// function qrValue() {
//   // let txt = $('#qr_source').text();
//   var varValue = document.getElementById('qr_source').value;

//   $('textarea').keyup(function () {
//     var newText = this.value;
//     // txt = $('#qr_source').text();
//     // let newText = txt;
//     // console.log($('#qr_source').html());
//     // console.log(varValue);
//     // newText = newText.replace(this.name, this.value);
//     $('#qr_source').text(newText);
//     qrSrc();
//     console.log(qrCode);
//     $('#qrImg').attr('src', qrCode);
//   });
// }

// let qrCode = '';

// function qrSrc() {
//   const textMsg = $('#qr_source').text();
//   console.log(textMsg);
//   const safeText = encodeURIComponent(textMsg);
//   qrCode =`https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${safeText}`;
//   return qrCode;
// }

// function createQrBlob() {
//   // qrValue();
// }

// // If Node.js then export as public
// if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
//   module.exports = {
//     createQrBlob,
//   };
// }

