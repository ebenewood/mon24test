// $(function() {
if (document.getElementById('yearInput') != null) {
  z = parseInt(document.getElementById("yearInput").value);
} else {
  z = null;
};
  function eval (x) {
    z = parseInt(document.getElementById("yearInput").value);
    if ((x % 400 == 0) && (x % 4 == 0)) {
        $('div.yes').text('this is a leap year');
      } else {
        $('div.yes').text('this ain\'t no leap year');
      };
    };
  // event.preventDefault();
// });
// function yearGet () {
//   var i = document.getElementById("yearInput").value;
// };
// parseInt(document.getElementById("yearInput").value);
