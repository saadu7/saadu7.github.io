lucide.createIcons();   // used to create Lucide icons
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

document.getElementById("yarndings-m").addEventListener("mouseenter", function(){
    document.getElementById("yarndings-m").textContent = "actual Yarndings translation *"
    document.getElementById("yarndings-m").classList.remove('text-sm')
    document.getElementById("yarndings-m").classList.add('text-xxxs')
})

document.getElementById("yarndings-m").addEventListener("mouseenter", function(){
    document.getElementById("yarndings-m").textContent = "*"
    document.getElementById("yarndings-m").classList.remove('text-xxxs')
    document.getElementById("yarndings-m").classList.add('text-sm')
})

document.querySelectorAll('.grid > div').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.classList.add('scale-105', 'transition-transform');
    })
    box.addEventListener('mouseleave', () => {
        box.classList.remove('scale-105', 'transition-transform');
    })
})

document.querySelectorAll('.flex-col > i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        console.log("yo")
        icon.classList.add('scale-105', 'transition-transform')
        icon.classList.add('text-[#6487B1]', 'transition-colors')
    })
    icon.addEventListener('mouseleave', () => {
        console.log("yo2")
        icon.classList.remove('scale-105', 'transition-transform')
        icon.classList.remove('text-[#6487B1]', 'transition-colors')
    })
})

document.querySelectorAll('.grid > div').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.classList.add('scale-105', 'transition-transform');
    })
    box.addEventListener('mouseleave', () => {
        box.classList.remove('scale-105', 'transition-transform');
    })
})

document.querySelectorAll('.text-5xl > span').forEach(letter => {
    letter.addEventListener('mouseenter', () => {
        letter.classList.remove('yarndings-20-regular')                         // if we use toggle, adds class if not present, otherwise removes
        letter.classList.add('jomhuria-regular', 'uppercase', 'scale-120')
    })
    letter.addEventListener('mouseleave', () => {
        letter.classList.remove('jomhuria-regular', 'uppercase', 'scale-120')
        letter.classList.add('yarndings-20-regular')
    })
})
// document.querySelector("#audio").addEventListener("click", function(){
    
// })