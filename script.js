 
    let btn = document.querySelector(".menu-btn");
    let icon = btn.querySelector(".fa-bars");

    btn.onclick = function (){
        $('.navbar .menu') .toggleClass("active");
        if(icon.classList.contains("fa-bars")){
            icon.classList.replace("fa-bars", "fa-times");
        }
        else{
            icon.classList.replace("fa-times", "fa-bars");
        }
    }

var $accordionIO = $('.accordion');
$accordionIO.prev('div').hide();
$(".accordion").click(function() {
//Inner 
var jqInner = $(this).next();
if (jqInner.is(":visible")) {
  jqInner.slideUp()
  $(this).find('.plus').html('+');
} else

{
  jqInner.slideDown()
  $(this).find('.plus').html('-');
}
})