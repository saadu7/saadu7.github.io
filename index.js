document.getElementById('background-audio').volume = 0.005
const fName = document.querySelector("#ur-fname")
const lName = document.querySelector("#ur-lname")

fName.addEventListener("mouseenter", function(){
    fName.textContent = "saad"
})

fName.addEventListener("mouseleave", function(){
    fName.textContent = "سعد"
})

lName.addEventListener("mouseenter", function(){
    lName.textContent = "usmani"
    
})

lName.addEventListener("mouseleave", function(){
    lName.textContent = "عثمانی"
})