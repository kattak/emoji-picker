// console.log($('.emojibox'));
$(document).ready(function(){

  $(".unselected").click(function(){
    console.log("clicked!");
    $(this).toggleClass('selected unselected');
    $selectedEmoji = $(this);
    addTextField($selectedEmoji);
    console.log(this);
  });


  // function selectNone(){
    $('#clear').click(function(){
    $('.selected').removeClass('selected').addClass('unselected');
     console.log('hit');
  });


  function addTextField($emoji){
  	console.log("hi");
  	console.log($emoji.html());
  }

  function hi(){
    console.log("hi");
  };

});
