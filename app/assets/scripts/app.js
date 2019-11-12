var slideshow = document.querySelector('.slideshow');
var count = 0;

var images = ['https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprd3833704.jpg', 
'https://ewscripps.brightspotcdn.com/dims4/default/5631ebd/2147483647/strip/true/crop/640x360+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2018%2F05%2F07%2FHangingLake_DanGarnerUSFS_1525726743167_86114360_ver1.0_640_480.jpg', 
'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg'];
var limit = images.length-1;

window.addEventListener('load', () => {
    setInterval( () => {
        if (count == limit) {
            count = 0;
        } else {
            count++;
        }
        slideshow.style.backgroundImage = `url(${images[count]})`;
    }, 2000);
});