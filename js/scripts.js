// a = parseInt(document.getElementById('degree1').value);
// b = parseInt(document.getElementById('degree2').value);
// c = parseInt(document.getElementById('degree3').value);

function size (a, b, c) {
  if ((a + b + c > 180) || (a + b + c < 180)) {
    $('div.ans').text('this is not a triangle');
  } else if ((a == b) && (a == c) && (c == b)) {
    $('div.ans').text('this is an equalaterial triangle');
  } else if ((a == b) || (a == c) || (c == b))  {
    $('div.ans').text('this is an isosceles triangle');
  } else {
    $('div.ans').text('this is a scalene triangle');
  };
};

$(function() {
  $('#check').click(function() {
    size(parseInt($('input#degree1').val()), parseInt($('input#degree2').val()), parseInt($('input#degree3').val())));
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
