$(".goku").hide();
$(".frieza").hide();
$(".vegeta").hide();
$(".broly").hide();
$("button").click(function() {
    var superpower = $(".superpower").val();
    var superpowerNumber= parseInt(superpower);
    var dragon = $(".dragon").val();
    if(superpowerNumber > 10 && dragon=== "protector"){
        $(".goku").show();
    }
    else if(superpowerNumber > 10 && dragon=== "revenge"){
        $(".broly").show();
    }
    else if(superpowerNumber < 10 && dragon=== "protector"){
        $(".vegeta").show();
    }
    else if(superpowerNumber < 10 && dragon==="revenge"){
        $(".frieza").show();
    }
    else {
        var wrong=$(".wrong");
        }
});
