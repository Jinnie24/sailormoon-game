


var sailorMoon = $("#sailor-moon");
sailorMoon.attr("data-HPvalue", 130);
//sailorMoon.attr("data-powerAttack", powerAttack);
sailorMoon.addClass("data-team1");
sailorMoon.addClass("character");




var sailorJupiter = $("#sailor-jupiter");
sailorJupiter.attr("data-HPvalue", 115);
//sailorJupiter.attr("data-powerAttack", powerAttack);
sailorJupiter.addClass("data-team1");
sailorJupiter.addClass("character");


var sailorMercury = $("#sailor-mercury");
sailorMercury.attr("data-HPvalue", 100);
//sailorMercury.attr("data-powerAttack", powerAttack);
sailorMercury.addClass("data-team1");
sailorMercury.addClass("character");


var sailorMars = $("#sailor-mars");
sailorMars.attr("data-HPvalue", 135);
//sailorMars.attr("data-powerAttack", powerAttack);
sailorMars.addClass("data-team1");
sailorMars.addClass("character");


var sailorVenus = $("#sailor-venus");
sailorVenus.attr("data-HPvalue", 120);
//sailorVenus.attr("data-powerAttack", powerAttack);
sailorVenus.addClass("data-team1");
sailorVenus.addClass("character");


var sailorNeptune = $("#sailor-neptune");
sailorNeptune.attr("data-HPvalue", 100);
//sailorNeptune.attr("data-powerAttack", powerAttack);
sailorNeptune.addClass("data-team2");
sailorNeptune.addClass("character");



var sailorPluto = $("#sailor-pluto");
sailorPluto.attr("data-HPvalue", 150);
//sailorPluto.attr("data-powerAttack", powerAttack);
sailorPluto.addClass("data-team2");
sailorPluto.addClass("character");


var sailorUranus = $("#sailor-uranus");
sailorUranus.attr("data-HPvalue", 120);
//sailorUranus.attr("data-powerAttack", powerAttack);
sailorUranus.addClass("data-team2");
sailorUranus.addClass("character");


var sailorSaturn = $("#sailor-saturn");
sailorSaturn.attr("data-HPvalue", 110);
//sailorSaturn.attr("data-powerAttack", powerAttack);
sailorSaturn.addClass("data-team2");
sailorSaturn.addClass("character");


var tuxedoMask = $("#tuxedo-mask");
tuxedoMask.attr("data-HPvalue", 160);
//tuxedoMask.attr("data-powerAttack", powerAttack);
tuxedoMask.addClass("data-team2");
tuxedoMask.addClass("character");


console.log(sailorMercury);
console.log(tuxedoMask);

var hero = 0, enemy;
var heroesArr = [sailorMoon, sailorJupiter, sailorMars, sailorMercury, sailorVenus]; 
var heroes2Arr = [sailorNeptune, sailorPluto, sailorSaturn, sailorUranus, tuxedoMask];
var isTeamOne, isTeamTwo;
var HPvalues = [];
var enemyPA, heroPA;
var heroIsEmpty;
var enemyIsEmpty = true;
var enemisDef = 0;
var loses = 0;


$(document).ready(function() {

    
    
    //this code should add text with HP value to span for every character
    
    for(var i=1; i<11; i++){
        hp = $(".character").eq(i-1).attr("data-HPvalue");
        console.log(hp);
        $("span").eq(i).html(" HP: " + hp);
    }
    
    $("#rules").on("click", function(){
        alert("Rules\nYou need to choose a character by clicking on the fighter's picture. You will fight as that character for the rest of the game.\nHP - Health Points. Counter Attack Power - base attack power will be set random.\nComing features: 1. Attack Power - damage to the enemy, each attack will increase the Attack Powerby its base power. 2. Defend - base power to defend attack.");
    });

    if(hero===0) {
        
        $(".character").on("click", function(){
            
            $('#chosen-character').empty();
            hero = this;
            
            heroSet(hero);
            console.log(enemyIsEmpty);
            if(enemyIsEmpty) {
                enemySet(hero);
            }
            
            
            
            if (parseInt($(hero).attr('data-HPvalue'))> 0) {
                console.log(parseInt($(hero).attr('data-HPvalue')));
                $("#attack").on("click", function(){
                    
                    console.log(hero);
                    var tempHP = parseInt($(enemy).attr('data-HPvalue')) - heroPA;
                    console.log(tempHP);
                    $(enemy).attr('data-HPvalue', tempHP);
                    console.log($(enemy).attr('data-HPvalue'));
                    alert("Damage made: " + heroPA);
                    $("#enemy-character span").html(" HP: " + $(enemy).attr('data-HPvalue'));

                    tempHP = parseInt($(hero).attr('data-HPvalue')) - enemyPA;
                    console.log(tempHP);
                    $(hero).attr('data-HPvalue', tempHP);
                    console.log($(hero).attr('data-HPvalue'));
                    alert("Damage taken: " + enemyPA);
                    $("#chosen-character span").html(" HP: " + $(hero).attr('data-HPvalue'));
                   if (parseInt($(enemy).attr('data-HPvalue'))<= 0) {
                        alert("This enemy is defeated!"); 
                        $("#enemy-character").empty();
                        console.log($('#enemy-character'));
                        enemySet(hero);
                        enemisDef++;                    
                        
                    } else if (parseInt($(hero).attr('data-HPvalue'))<= 0) {
                        alert("You lose");
                        $("#chosen-character").empty();         
                        loses++;
                         
                    }
                    $(hero).shake({distance:10,times:1,speed:200,direction:'up'});
                    $(enemy).shake({distance:10,times:2,speed:100, direction:'up'});

                    var htmlResults = "Enemies defeted - " + enemisDef + " Loses - " + loses;
                    $("#results").html(htmlResults);
                });
                
            }
        });
    }
    
    function heroSet(hero) {
        if ($(enemy).hasClass("data-team1") && $(hero).hasClass("data-team1") || $(enemy).hasClass("data-team2") && $(hero).hasClass("data-team2")){
            alert("Choose character from your team!");
            
            heroIsEmpty = true;
            return;
        }
        heroPA = (Math.floor(Math.random() * 15) + 1);
            console.log("this works too");

            
            
            
            heroIsEmpty = false;
            $(hero).appendTo("#chosen-character");   
            
       
    }
    
    
    function enemySet(hero) {
        $("#enemy-character").empty();
        enemyPA = (Math.floor(Math.random() * 10) + 1);
        if (heroIsEmpty) {
            
            console.log("problem is here");
            return;
        }
        if ($(hero).hasClass("data-team1")){
            
            enemy = heroes2Arr[Math.floor(Math.random() * heroes2Arr.length)];
            $(enemy).appendTo("#enemy-character");
       
        }
        if ($(hero).hasClass("data-team2")){
            enemy = heroesArr[Math.floor(Math.random() * heroesArr.length)];
            $(enemy).appendTo("#enemy-character");
        }
        console.log(enemy);
        console.log("enemy set");
        enemyIsEmpty = false;
        
        
        
        
    }
});