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



// document.getElementById("git").addEventListener("click", function(){
//     document.getElementById("git").classList.remove('scale-120', 'transition-transform')
//     document.getElementById("git").classList.remove('text-[#6487B1]', 'transition-colors')
// })

// document.getElementById("lnk").addEventListener("click", function(){
//     document.getElementById("lnk").classList.add('scale-120', 'transition-transform')
//     document.getElementById("lnk").classList.add('text-[#6487B1]', 'transition-colors')
// })

// document.getElementById("ml").addEventListener("click", function(){
//     document.getElementById("ml").classList.add('scale-120', 'transition-transform')
//     document.getElementById("ml").classList.add('text-[#6487B1]', 'transition-colors')
// })


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
        box.classList.add('scale-105', 'transition-transform')
    })
    box.addEventListener('mouseleave', () => {
        box.classList.remove('scale-105', 'transition-transform')
    })
})

document.querySelectorAll('.group').forEach(header => {     // cool bounce animation for the lil guy
    header.addEventListener('mouseenter', () => {
      const icon = header.querySelector('img')
      icon.classList.add('animate-bounce-center')
      
    })
    header.addEventListener('mouseleave', () => {
        const icon = header.querySelector('img')
        icon.classList.remove('animate-bounce-center')
 
    })
  })

  

document.getElementById("mil").addEventListener("mouseenter", function(){
    this.classList.add('animate-pulse')
})

document.getElementById("mil").addEventListener("mouseleave", function(){
    setTimeout(function(){
        document.getElementById("mil").classList.remove('animate-pulse')
    }, 1500)
})

document.getElementById("res").addEventListener("mouseenter", function(){
    this.classList.add('animate-pulse')
})

document.getElementById("res").addEventListener("mouseleave", function(){
    setTimeout(function(){ 
        document.getElementById("res").classList.remove('animate-pulse') }, 
    1500)
})

document.getElementById("src").addEventListener("mouseenter", function(){
    this.classList.add('animate-spin')
})

document.getElementById("src").addEventListener("mouseleave", function(){
    document.getElementById("src").classList.remove('animate-spin') 

})

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
        box.classList.add('scale-105', 'transition-transform')
    })
    box.addEventListener('mouseleave', () => {
        box.classList.remove('scale-105', 'transition-transform')
    })
})

document.querySelectorAll('.text-5xl > span').forEach(letter => {
    letter.addEventListener('mouseenter', () => {
        letter.classList.remove('yarndings-20-regular')                         // if we use toggle, adds class if not present, otherwise removes
        letter.classList.add('jomhuria-regular', 'uppercase', 'scale-120')
    })
    letter.addEventListener('mouseleave', () => {
        setTimeout(function(){
            letter.classList.remove('jomhuria-regular', 'uppercase', 'scale-120')
            letter.classList.add('yarndings-20-regular')
        }, 2000)
    })
})

// document.querySelector("#audio").addEventListener("click", function(){
    
// })

const staggerItems = document.querySelectorAll(".stagger-item")

const observer = new IntersectionObserver((entries) => {    // intersectionObserver, refer to the fireship vid
    entries.forEach(entry => { 
        if (entry.isIntersecting) {    // basicalyl checks if the element of interest is currently intersecting with the users viewport
            staggerItems.forEach(item => {
                setTimeout(() => {
                    item.classList.remove('hidden-left', 'hidden-right')}
                    , parseInt(item.dataset.delay))
                })
            } else {
                staggerItems.forEach( item => {
                    if (item.classList.contains('hidden-left') || item.classList.contains('hidden-right')) return

                    setTimeout( () => {
                        if (item.getBoundingClientRect().left < window.innerWidth / 2) {
                            item.classList.add('hidden-left')
                        } else {
                            item.classList.add('hidden-right')
                        }
                    }, parseInt(item.dataset.delay))
                })
            } 
        } )
}, {threshold: 0.1})   

observer.observe(document.getElementById("about-me"))

document.getElementById("moon").addEventListener("mouseenter", () => {
    this.classList.add('scale-120', 'transition-transform')
})

document.getElementById("moon").addEventListener("mouseleave", () => {
    this.classList.remove("scale-120", "transition-transform")
})

document.getElementById("sun").addEventListener("mouseenter", () => {
    this.classList.add("scale-120", "transition-transform")
})

document.getElementById("sun").addEventListener("mouseleave", () => {
    this.classList.remove("scale-120", "transition-transform")

})

document.getElementById("moon").addEventListener("click", () => {
    document.getElementById("bio").innerHTML = `When I am not coding, I love immersing myself in nature,  from peaceful walks to adventurous hikes (as you will notice with the imagery :) ) <br> <br >
                                        Traveling and experiencing different places along with the cultures also fuel my curiosity about the world. I'm also an avid enjoyer of the arts, with a deep appreciation
                                      for cinema and music, especially the soulful rhythms of jazz. These passions shape who I am and continuously enrich my life. <br> <br> <br> <br> `
})

document.getElementById("sun").addEventListener("click", () => {
    document.getElementById("bio").innerHTML = `Hello! I am Saad Usmani, a curious 2nd year CS major at SFU, who has a firey passion for the world of software development. <br><br>
    I fell in love with computer programming in high school when I first encountered it, leading me to a creative world of endless possibilities, 
    accompanied with the aspect of crafting solutions to solve real-world problems, and as a whole, contribute to making the world a better place. <br><br>
    The things I have a particular interest in within this universe of expertise is machine learning, cybersecurity, as well as operating systems.`
})

const skills = [ {name: 'Python', logo: 'images/python.svg'}, 
    {name: 'C', logo: 'images/c.svg'}, 
    {name: 'C++', logo: 'images/cpp.svg'}, 
    {name: 'JavaScript', logo: 'images/js.svg'}, 
    {name: 'React', logo: 'images/react.svg'}, 
    {name: 'Node.js', logo: 'images/node.svg'}, 
    {name: 'SQLite', logo: 'images/sql.svg'}, 
    {name: 'R', logo: 'images/r.svg'}, 
    {name: 'TypeScript', logo: 'images/ts.svg'}, 
    {name: 'MatLab', logo: 'images/matlab.svg'}, 
    {name: 'HTML', logo: 'images/html.svg'}, 
    {name: 'CSS', logo: 'images/css.svg'}, 
    {name: 'Keras', logo: 'images/keras.svg'}, 
    {name: 'TensorFlow', logo: 'images/tf.svg'}, 
    {name: 'Flask', logo: 'images/flask.svg'}, 
    {name: 'Docker', logo: 'images/docker.svg'}, 
    {name: 'C#', logo: 'images/csh.png'}
] // array of skill objects

const skillsCarousel = document.getElementById("skills-c")
skillsCarousel.innerHTML = skills.concat(skills).map(skill =>` <div class="flex flex-col items-center justify-center bg-[#C5C2BC] rounded-lg shadow-lg p-6 mx-4 w-40 h-40 flex-shrink-0">
                <img src="${skill.logo}" alt="${skill.name} logo" class="w-16 h-16 mb-4">
                <p class="text-[#03396c] text-center font-semibold vt323-regular">${skill.name}</p>
            </div> `).join('')
