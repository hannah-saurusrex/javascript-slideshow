var slideshow = document.querySelector('.slideshow'); // grab the slideshow div from the html doc
var count = 0; // set count to zero

var images = ['https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprd3833704.jpg', 
'https://ewscripps.brightspotcdn.com/dims4/default/5631ebd/2147483647/strip/true/crop/640x360+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2018%2F05%2F07%2FHangingLake_DanGarnerUSFS_1525726743167_86114360_ver1.0_640_480.jpg', 
'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg']; // this is an array of the images we're going
//to cycle through
var limit = images.length-1;

window.addEventListener('load', () => { // when the window loads, perform this function
    setInterval( () => {
        if (count == limit) {
            count = 0;
        } else {
            count++; // iterate through the images
        }
        slideshow.style.backgroundImage = `url(${images[count]})`; // grabs the images array, and performs the count action on them
    }, 2000); // this sets the speed at which we'll cycle through the images
});