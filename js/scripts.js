// a = parseInt(document.getElementById('degree1').value);
// b = parseInt(document.getElementById('degree2').value);
// c = parseInt(document.getElementById('degree3').value);

// var imgScal = "<img src='img/scal.jpg'>"
// var imgIsos = "<img src='img/isos.jpg'>"
// var imgEqua = "<img src='img/equa.jpg'>"
// var imgEqua = "<img src='img/not.jpg'>"

var ansArray = [
  'this is not a triangle',
  'this is an equalaterial triangle',
  'this is an isosceles triangle',
  'this is a scalene triangle'
  ];

function size (a, b, c) {
  if ((a + b + c > 180) || (a + b + c < 180)) {
    ans = ansArray[0];
    return ans;
  } else if ((a == b) && (a == c) && (c == b)) {
    ans = ansArray[1];
    return ans;
  } else if ((a == b) || (a == c) || (c == b))  {
    ans = ansArray[2];
    return ans;
  } else {
    ans = ansArray[3];
    return ans;
  };
};

// function size (a, b, c) {
//   if ((a + b + c > 180) || (a + b + c < 180)) {
//     $('div.ans').text('this is not a triangle');
//   } else if ((a == b) && (a == c) && (c == b)) {
//     $('div.ans').text('this is an equalaterial triangle');
//   } else if ((a == b) || (a == c) || (c == b))  {
//     $('div.ans').text('this is an isosceles triangle');
//     $('')
//   } else {
//     $('div.ans').text('this is a scalene triangle');
//     $('div.img').append(imgScal);
//   };
// };

$(function() {
  $('#check').click(function() {
    size(parseInt($('input#degree1').val()), parseInt($('input#degree2').val()), parseInt($('input#degree3').val()));
    $('div.ans').text(ans);
  });
});


// =====
// $(function() {
//
//   function get () {
//     parseInt(document.getElementById("yearInput").value);
//   };
//   function eval (x) {
//     if ((x % 400 == 0) && (x % 4 == 0)) {
//         $('div.yes').text('this is a leap year');
//       } else {
//         $('div.yes').text('this ain\'t no leap year');
//       };
//     };
//
//   eval(get());
// // event.preventDefault();
// });
// function yearGet () {
//   var i = document.getElementById("yearInput").value;
// };
// parseInt(document.getElementById("yearInput").value);
