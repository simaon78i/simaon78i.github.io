var batmanPic=document.getElementById("pictureOfBatman");
var capAmericaPic = document.getElementById("pictureOfCaptainAmerica");
var ironManPic = document.getElementById("ironManPic");
function fromOtoR(){
   batmanPic.src="assets/images/batManImage2.jpg";
}
function fromRtoO(){
   batmanPic.src="assets/images/batManImage.webp";
}
function makeCapBigger(){
   const img = document.querySelector('#pictureOfCaptainAmerica');
   img.style.transform = 'scale(1.2)';
}
function makeCapSmaller(){
   const img = document.querySelector('#pictureOfCaptainAmerica');
   img.style.transform = 'scale(1)';
}
   // Function to simulate armor activation on click
function activateArmor() {
       ironManPic.classList.add("armor-active");  // Adds glowing and scaling effect
       ironManPic.src =""; // Change to armored image (you can use your own image)
       // Optional: Play sound or animation when armor is activated (if desired)
       var audio = new Audio('armor-activation-sound.mp3'); // Path to your sound file
       audio.play();
}

// Function to reset to original Iron Man image
function resetArmor() {
   ironManPic.classList.remove("armor-active");  // Removes glow and scale effect
   ironManPic.src = "assets/images/ironManImage2.webp"; // Reverts to the original Iron Man image
}

batmanPic.addEventListener("mouseover",fromOtoR);
batmanPic.addEventListener("mouseout",fromRtoO);
capAmericaPic.addEventListener("mouseover",makeCapBigger);
capAmericaPic.addEventListener("mouseout",makeCapSmaller);
// Add click event listener to Iron Man image
ironManPic.addEventListener("click", activateArmor);
// Add reset function on double-click (optional)
ironManPic.addEventListener("dblclick", resetArmor);