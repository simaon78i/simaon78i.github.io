// Adding event listeners to the background color change buttons
const colorChangeButtons = document.querySelectorAll('.color-change-button');
var isClick=false;
colorChangeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the color from the button's data-color attribute
        const color = button.getAttribute('data-color');
        
        // Change the background color of the body
        document.body.style.backgroundColor = color;
    });
});

var batmanPic = document.getElementById("pictureOfBatman");
var capAmericaPic = document.getElementById("pictureOfCaptainAmerica");
var ironManPic = document.getElementById("ironManPic");

function fromOtoR() {
    batmanPic.src = "assets/images/batManImage2.jpg";
}

function fromRtoO() {
    batmanPic.src = "assets/images/batManImage.webp";
}

function makeCapBigger() {
    const img = document.querySelector('#pictureOfCaptainAmerica');
    img.style.transform = 'scale(1.2)';
}

function makeCapSmaller() {
    const img = document.querySelector('#pictureOfCaptainAmerica');
    img.style.transform = 'scale(1)';
}

// Function to simulate armor activation on click
function activateArmor() {
    ironManPic.classList.add("armor-active");  // Adds glowing and scaling effect
    ironManPic.src = "assets/images/armor.webp"; // Change to armored image (you can use your own image)
    // Optional: Play sound or animation when armor is activated (if desired)
    var audio = new Audio("assets/sounds/armorMusic.mp3"); // Path to your sound file
    audio.play();
}

// Function to reset to original Iron Man image
function resetArmor() {
    ironManPic.classList.remove("armor-active");  // Removes glow and scale effect
    ironManPic.src = "assets/images/ironManImage.jpg"; // Reverts to the original Iron Man image
}

function changeColor(event){
    this.style.color="yellow";
    if(event.type==="click"){
        isClick=true;
    }
    if(isClick){
        var audio=new Audio("assets/sounds/buttons.wav");
        audio.play();
    }
}

function resetColor(){
    this.style.color="";
}
document.querySelectorAll("a").forEach(link=>{link.addEventListener("click",changeColor);
                                    link.addEventListener("mouseover",changeColor);
                                    link.addEventListener("mouseout",resetColor);});

batmanPic.addEventListener("mouseover", fromOtoR);
batmanPic.addEventListener("mouseout", fromRtoO);
capAmericaPic.addEventListener("mouseover", makeCapBigger);
capAmericaPic.addEventListener("mouseout", makeCapSmaller);
// Add click event listener to Iron Man image
ironManPic.addEventListener("click", activateArmor);
// Add reset function on double-click (optional)
ironManPic.addEventListener("dblclick", resetArmor);
