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

document.getElementById("git").addEventListener("mouseenter", function(){
    document.getElementById("git").classList.add('scale-120', 'transition-transform')
    document.getElementById("git").classList.add('text-[#6487B1]', 'transition-colors')
})

document.getElementById("git").addEventListener("mouseleave", function(){
    document.getElementById("git").classList.remove('scale-120', 'transition-transform')
    document.getElementById("git").classList.remove('text-[#6487B1]', 'transition-colors')
})

document.getElementById("lnk").addEventListener("mouseenter", function(){
    document.getElementById("lnk").classList.add('scale-120', 'transition-transform')
    document.getElementById("lnk").classList.add('text-[#6487B1]', 'transition-colors')
})

document.getElementById("lnk").addEventListener("mouseleave", function(){
    document.getElementById("lnk").classList.remove('scale-120', 'transition-transform')
    document.getElementById("lnk").classList.remove('text-[#6487B1]', 'transition-colors')
})

document.getElementById("ml").addEventListener("mouseenter", function(){
    document.getElementById("ml").classList.add('scale-120', 'transition-transform')
    document.getElementById("ml").classList.add('text-[#6487B1]', 'transition-colors')
})

document.getElementById("ml").addEventListener("mouseleave", function(){
    document.getElementById("ml").classList.remove('scale-120', 'transition-transform')
    document.getElementById("ml").classList.remove('text-[#6487B1]', 'transition-colors')
})



document.getElementById("git").addEventListener("click", function(){
    document.getElementById("git").classList.remove('scale-120', 'transition-transform')
    document.getElementById("git").classList.remove('text-[#6487B1]', 'transition-colors')
})

document.getElementById("lnk").addEventListener("click", function(){
    document.getElementById("lnk").classList.add('scale-120', 'transition-transform')
    document.getElementById("lnk").classList.add('text-[#6487B1]', 'transition-colors')
})

document.getElementById("ml").addEventListener("click", function(){
    document.getElementById("ml").classList.add('scale-120', 'transition-transform')
    document.getElementById("ml").classList.add('text-[#6487B1]', 'transition-colors')
})


document.getElementById("yarndings-m").addEventListener("mouseenter", function(){
    document.getElementById("yarndings-m").textContent = "actual Yarndings translation *"
    document.getElementById("yarndings-m").classList.remove('text-sm')
    document.getElementById("yarndings-m").classList.add('text-xxxs')
    setTimeout(function(){}, 2500)
})

document.getElementById("yarndings-m").addEventListener("mouseleave", function(){
    setTimeout(function(){
        document.getElementById("yarndings-m").textContent = "*"
        document.getElementById("yarndings-m").classList.remove('text-xxxs')
        document.getElementById("yarndings-m").classList.add('text-sm')
    }, 2500)
})

document.getElementById("urdu-m").addEventListener("mouseenter", function(){
    document.getElementById("urdu-m").textContent = "name in native Urdu translated *"
    document.getElementById("urdu-m").classList.remove('text-sm')
    document.getElementById("urdu-m").classList.add('text-xxxs')
    setTimeout(function(){}, 1500)
})

document.getElementById("urdu-m").addEventListener("mouseleave", function(){
    setTimeout(function(){
        document.getElementById("urdu-m").textContent = "*"
        document.getElementById("urdu-m").classList.remove('text-xxxs')
        document.getElementById("urdu-m").classList.add('text-sm')
    }, 1500)
})

document.querySelectorAll('.grid > div').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.classList.add('scale-105', 'transition-transform');
    })
    box.addEventListener('mouseleave', () => {
        box.classList.remove('scale-105', 'transition-transform');
    })
})

document.querySelectorAll('.group').forEach(header => {     // cool bounce animation for the lil guy
    header.addEventListener('mouseenter', () => {
      const icon = header.querySelector('img');
      icon.classList.add('animate-bounce');
    });
    header.addEventListener('mouseleave', () => {
      const icon = header.querySelector('img');
      icon.classList.remove('animate-bounce');
    });
  });

// document.querySelectorAll('.flex > span').forEach(icon => {               // not working for some odd reason
//     icon.addEventListener('mouseenter', () => {
//         console.log("yo")
//         icon.classList.add('scale-105', 'transition-transform')
//         icon.classList.add('text-[#6487B1]', 'transition-colors')
//         console.log("yo again")
//     })
//     icon.addEventListener('mouseleave', () => {
//         console.log("yo2")
//         icon.classList.remove('scale-105', 'transition-transform')
//         icon.classList.remove('text-[#6487B1]', 'transition-colors')
//     })
// })


document.querySelectorAll('.grid > a').forEach(box => {
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
        setTimeout(function(){
            // empty function to elapse the 2s timeout
        }, 2000)
    })
    letter.addEventListener('mouseleave', () => {
        setTimeout(function(){
            letter.classList.remove('jomhuria-regular', 'uppercase', 'scale-120')
            letter.classList.add('yarndings-20-regular')
        }, 2000)
    })
})

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e){              // to prevent the default skip event
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
    })
})

// document.querySelector("#audio").addEventListener("click", function(){
    
// })