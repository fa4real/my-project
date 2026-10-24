

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnails");

thumbnails.forEach(function(thumbnails){
    thumbnails.addEventListener("click", function(){
        const oldImageSrc = mainImage.getAttribute("src");

        const clickImageSrc = thumbnails.getAttribute("src");

        mainImage.src = clickImageSrc;
        thumbnails.src = oldImageSrc;

       
    })

})




let countDisplay =  document.getElementById("count");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let count = 1;

increaseBtn.addEventListener("click", function() {
    count++
    countDisplay.textContent = count;


})
decreaseBtn.addEventListener("click", function() {
    if (count > 1) {
        count--
        countDisplay.textContent = count;

    }
})