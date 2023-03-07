document.addEventListener('DOMContentLoaded', () => {

// === Remove loading screen .:. === 
const overlay = document.querySelector('.loading-screen')

    // hide loading overlay after few seconds
    setTimeout( ()=> {
        overlay.classList.toggle('active')
    }, 3000)



// === Timelines .:. === 

    // delay opening animations
    const TO = setTimeout( () => {
        
        let timelineOpening = new TimelineMax(); 
        timelineOpening
        .from('.title', 1.8 ,{
            y: 200,
            autoAlpha: 0,
            ease: Power3.easeInOut
        })
        .from('nav', 2, {
            y: 30,
            autoAlpha: 0,
            ease: Power3.easeInOut
    
        }, "-=1.3")
        .from('.sub-title', 2, {
            y: 30,
            autoAlpha: 0,
            ease: Power3.easeInOut
    
        }, "-=.7")
        .from('.bottom-nav', 2, {
            width: '0%',
            autoAlpha: 0,
            ease: Power3.easeInOut
    
        }, "-=2");
    
    
    
        const nav = document.querySelector('#bottom-nav')
        const home = document.querySelector('#home')
        const backBtn = document.querySelector('.back-btn')
    
        nav.addEventListener('click', (e)=>{
            // console.log('(test) button clicked', e)
            let timelineContentReveal = new TimelineMax()
            timelineContentReveal
                .set('.grid', {
                display: 'grid'
                })
                .to('.forest img', 3, {
                    y:-400,
                    scale: 1.1,
                    ease: Expo.easeInOut
                })
                .to('.logo', 1.6, {
                    autoAlpha: 0,
                }, "-=3.4")
                .to('nav', 1, {
                    color:'white',
                }, "-=1.4")
                .to('#home a', 1, {
                    color:'white',
                }, "-=1.4") 
                .to('.bg-image', 3, {
                    y: -600,
                    ease: Expo.easeInOut
                }, "-=3")
                .to('.sub-title', 3, {
                    autoAlpha: 0,
                    ease: Expo.easeInOut
                }, "-=3")
                .to('.bottom-nav', 3, {
                    autoAlpha: 0,
                    ease: Power3.easeInOut
                }, "-=3")
                .to('.imgs', 1.5, {
                    height: '100%',
                    ease: Expo.easeInOut
                }, "-=2")
                .to('.imgs-2', 1.7, {
                    height: '100%',
                    ease: Expo.easeInOut
                }, "-=1.7") 
                .to('.imgs-3', 1.7, {
                    height: '100%',
                    ease: Expo.easeInOut
                }, "-=1.6") 
                .to('.imgs-4', 1.7, {
                    height: '100%',
                    ease: Expo.easeInOut
                }, "-=1.5")
                .to('.back-btn', 4, {
                    autoAlpha: .8,   
                    width: 'auto',
                    ease: Expo.easeInOut
                }, "-=3.2")
                .to('.destination', 2, {
                    autoAlpha: 1, 
                    y: -20,
                    ease: Expo.easeOut
                }, "-=2");
    
            home.addEventListener('click', () => {
                timelineContentReveal.reverse()
            })
            backBtn.addEventListener('click', () => {
                timelineContentReveal.reverse()
            })
            
    
        })

    }, 3000)
})