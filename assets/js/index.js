
var slide = false;
var boxNum = 0

// Fade box(es) in and out (can alternate if boxes are added while others are up)
$("#fade").on("click", function() {
    $(".box").fadeToggle("slow");
    $(".boxAdded").fadeToggle("slow");
})

// Slide the box(es) up or down (can alternate if boxes are added while others are up)
$("#slide").on("click", function() {
    $(".box").slideToggle(1500);
    $(".boxAdded").slideToggle(1500);
})

// Adds a new box into the box-area below the previous one
$("#add").on("click", function() {
    var newBox = $("<div class='boxAdded'></div>")
    $(".box-area").append(newBox);
    boxNum++;
})

// Removes all extra boxes
$("#delete").on("click", function() {
    if(boxNum > 0) {
        $(".boxAdded").remove();
        boxNum--;
    } else {
        alert("You have no boxes left to remove.");
    }
})

// Change the box(es) to different colors
// All extra boxes added will be given the same color
$("#color").on("click", function() {
    if(boxNum > 0) {
        $(".boxAdded").css("background-color", randomColor());
    }
    $(".box").css("background-color", randomColor());
})

// Move the box(es) in set movements
// I want to make this a triangle (go left, down, back to starting point)
$("#free").on("click", function() {
    $(".box").animate({ left: "1600px" }, 2000);
    $(".box").animate({ top: "100px" }, 2000);
    $(".box").animate({ left: "0px" }, 2000);
    $(".box").animate({ top: "0px" }, 2000);
    if(boxNum > 0) {
        $(".boxAdded").animate({ left: "1600px" }, 2000);
        $(".boxAdded").animate({ top: "100px" }, 2000);
        $(".boxAdded").animate({ left: "0px" }, 2000);
        $(".boxAdded").animate({ top: "0px" }, 2000);
    }
})


// Random color function
// returns a string of hex color styles
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = "#";
    for(var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}