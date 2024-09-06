console.log ("Hello");

console.dir(document);

// we are going to create a place to store images
let images=[
    {
        src: "https://cdn.pixabay.com/photo/2022/10/11/12/38/dog-7514202_640.jpg",
        alt:" A cute watch dog",
        width: 300,
        height: 200,
    },
    {
        src: "https://cdn.pixabay.com/photo/2023/04/19/09/25/dog-7937282_640.jpg",
        alt:" A curious dog",
        width: 300,
        height: 200,

    },
];
//==========
//! this is help for the arrow key stretch goal
//I need a golabl vaiable to keep track of the index value
//===========================

// step 1: I need to select the dom elcmet that will contain my images
// slecte the thumbnail container
// select the main image container

//step2 : write a function to create image in the thumbnails.
function createThumbnails(oneThumbnailContainer){
    //we need a loop to run through the array of images and create and instance for each image.
    //used forEach/for loop
    oneThumbnailContainer.forEach(function(thumbnail,index) {

        //a documnet method to create a DOM to contain my image infp (<img>)
        //assign a vaule to my img attributes(src,alt,width,height e.g img.src="value")
        // optional: give each image a class name
        //append the new images to DOM container.
        //add an eventListerner to each image, so when user clicks the big image shows on the screen.
        //function eventHandler (){
        //when the ...
        createLargeImage(thumbnail[index]);
        //}
        //! thumbnail.addEventListerner ("click",eventHandler)

    });
}

//step 3: write a function create the big image
function createLargeImage(largeImage){
    //!i might fine a problem here. images will keep adding one after the other
    //! solution: set the innerHtml=" " (to be empty)
    //create an img element
    //(optional) you could give the lage img a classname
    //set the src value
    //set the alt value
    //apprehend the large img to the DOM
}

//this code i found on github and it work. i need help understanding it.