
  // $('#myCollapsible').collapse({
  //   toggle: false
  // })
  $(document).ready(function() {
    $('#toggle').click(function() {
        $('.container').slideToggle();
    });
})

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }


$(document).ready(function() {
  $('.accordion-item active .accordion-body').slideDown();
  $('.accordion-header').click(function() {
      $(this).parent().toggleClass('active');
      $(this).parent().children('.accordion-body').slideToggle();
  });
});
$(document).ready(function() {
  $('.accordion-item active1 .accordion-body1').slideDown();
  $('.accordion-header1').click(function() {
      $(this).parent().toggleClass('active');
      $(this).parent().children('.accordion-body1').slideToggle();
  });
});