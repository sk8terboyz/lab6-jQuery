
var slide = false;

$("#fade").on("click", function() {
    $(".box").fadeToggle("slow");
})

$("#slide").on("click", function() {
    $(".box").slideToggle(1500);
    console.log("pizza");
})