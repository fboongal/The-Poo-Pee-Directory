//change the id of the button to general_button
$('.general_button').click(function(){
  let tabID = $(this).data('location');
  $('.general_button').removeClass('active');
  $(this).addClass('active');
  $('.tab-pane').removeClass('active');
  $('[data-location-content="' + tabID + '"]').addClass('active');
})

let TAOw = 0;
let TAOm = 0;

//using buttons for specific_button
$('.TAO-Women').click(function(){
  let tabID = $(this).data('location');
  $('.TAO-Women').removeClass('active');
  $(this).addClass('active');
  if (TAOw == 0) {
    $('.exTAO-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    TAOw = 1;
  } else {
    $('.exTAO-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    TAOw = 0;
  }
})

$('.TAO-Men').click(function(){
  let tabID = $(this).data('location');
  $('.TAO-Men').removeClass('active');
  $(this).addClass('active');
  if (TAOm == 0) {
    $('.exTAO-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    TAOm = 1;
  } else {
    $('.exTAO-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    TAOm = 0;
  }
})



