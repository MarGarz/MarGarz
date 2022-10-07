var RecipeUrl = 'https://margarz.github.io/js/RecipeInfo.json'
var timeID;
var drinkCount = 1;
var slideTime = 3000;
var animOut = 1000;

setInterval(NewDrinkPage, 10000);


    
function NewDrinkPage(){
    $.getJSON(RecipeUrl, function(data){
    
        
    $("p,h1").fadeOut(animOut, function(){
        $("p").text(data[drinkCount].tasteCat); //category
        $("h1").text(data[drinkCount].drinkName); //drink name
        $("p,h1").fadeIn(slideTime-animOut);
    }); 
    
    $("img").fadeOut(animOut, function(){
        $("img").attr("src",data[drinkCount].imgAddrs);//feature img
        $("img").fadeIn(slideTime-animOut);
    });
    
    if(drinkCount >= data.length-1){
        drinkCount = 1;
    }
    else{
        drinkCount = drinkCount + 1;
    }
    
});
    
}
