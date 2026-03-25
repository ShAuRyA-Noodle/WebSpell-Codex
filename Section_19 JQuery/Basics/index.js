// console.log('Shaurya says Hi !');

// jquery("h1").css("color" , "red");
// $("h1").css("color" , "red");

// console.log($("h1").css("font-size"));
$("h1").addClass("big color");
// $("h1").removeClass("big");

// $("button").text("Dont touch me :(");
// $("button").html("<em>Hello Cutie </em>");


// console.log($("img").attr("src"));

// $("a").attr("href" , "https://store.playstation.com/en-in/pages/latest")

$("h1").click(function () {
    $("h1").css("color", "pink")
});


// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "crimson";
//   });
// }

// $("button").on("click", function () {
//   $("h1").css("color", "darkgreen");
// });


$("input").keypress(function (event) {
    console.log(event.key);
});

$("button").on("click", function () {
    //   $("h1").hide();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp(); 
    // $("h1").slideDown(); 
    // $("h1").slideToggle();
    $("h1").animate({
        opacity: 0.3,
        marginLeft: "50px",
        fontSize: "60px"
    });
});


$("input").keypress(function (event) {
    $("h1").html(event.key);
});



$("h1").before("<p>This text appears BEFORE the heading</p>");
$("h1").after("<p>This text appears AFTER the heading</p>");
$("h1").prepend("🔥 ");
$("h1").append(" 🚀");


// $("button").remove();




