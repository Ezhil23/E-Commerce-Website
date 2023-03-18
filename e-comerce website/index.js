let smallImage=document.getElementById("smallImage");
let mainImage=document.getElementsByClassName("mainImage");

smallImage[0].onClick = function(){
     mainImage.src =smallImage[0].src;
 }
 smallImage[1].onClick = function(){
     mainImage.src =smallImage[1].src;
 }
 smallImage[2].onClick = function(){
     mainImage.src =smallImage[2].src;
 }
 smallImage[3].onClick = function(){
     mainImage.src =smallImage[3].src;
 }

 