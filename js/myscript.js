//CAROUSEL SCRIPT

// create array of all image elements
var itemlist = document.getElementsByClassName("mycarousel_item");
//we have 5 images into the array
//first image is in position 0
//last image is in position 4
//itemlist.length is 5
console.log(itemlist);

//default value 0 for determinate array position 
var position = 0;

function Down (){
    //by default position shoud be 0
    console.log(position);
    //by default if (0 < 5)
    if (position < itemlist.length){
        // hide current position image
        itemlist[position].classList.add("d-none");
        itemlist[position].classList.remove("d-block");
        //position increment for next image 0 -> 1
        position++;
        //by default is false. this checks if we are going further than position 4 (if true, we are on last image)
        if (position > itemlist.length - 1){
            //resets position to 0 (first image)
            position = 0;
        }
        //show incremented position image 
        itemlist[position].classList.add("d-block");
        itemlist[position].classList.remove("d-none");
        
        //DEBUG
        if(position == 0){
            console.log(position+" first image");
        }
        if(position == 4){
            console.log(position+" last image");
        }
    }
    //by default this shoud be 1
    console.log(position);
}

function Up (){
    //by default position should be 0
    console.log(position);
    //by defalut if (0 < 5)
    if (position < itemlist.length){
        //hide current position image
        itemlist[position].classList.add("d-none");
        itemlist[position].classList.remove("d-block");
        //position decrement for previous image
        position--;
        //by default is true. this checks if we are going in negative like position -1 
        if (position < 0){
            // set position to last image instead of going in negative
            position = itemlist.length - 1;
        }
        // show decremented position image
        itemlist[position].classList.add("d-block");
        itemlist[position].classList.remove("d-none");
        
        //DEBUG
        if(position == 0){
            console.log(position+" first image");
        }
        if(position == 4){
            console.log(position+" last image");
        }
    }
    //by default this shoud be 4
    console.log(position);
}

//this method allows you to add more images to carousel without touching js and css


