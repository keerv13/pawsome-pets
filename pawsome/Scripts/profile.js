//profile.js

var dog_image= document.querySelector('.dog_image');
var Images =['Dog.png','Pet1_1.png','Pet1_2.png','Pet1_3.png'];
var i = 0;

function prev(){
    if(i <= 0)i= Images.length;
    i--;
    return setImg();

}

function next(){
    if (i >= Images.length-1)i=-1;
    i++;
    return setImg();

}

function setImg(){
    return dog_image.setAttribute('src','Images/'+Images[i]);
}