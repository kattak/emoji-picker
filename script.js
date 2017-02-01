// console.log($('.emojibox'));
$(document).ready(function(){

//attempt to layout emoji divs

var emojis = "abcd".split("");

//Create a div for each emoji
emojis.forEach(function(elem,i){
  var puppy = "🐶";
//  var emojiary = "🐶😀🍉🐓🏝️".split("");
//  emojiary does not work

	 //add div to emojibox container div
    var tmpdiv = document.createElement("div");

    //append emoji div
    var embox =  document.getElementById("emojibox")
    embox.appendChild(tmpdiv);

    //set div's class and id
    tmpdiv.className = "emoji unselected";
    tmpdiv.id = "emoji" + i;

    //try adding text in div
    tmpdiv.innerHTML = puppy;
})


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
