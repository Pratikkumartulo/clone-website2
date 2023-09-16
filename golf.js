let posi = document.querySelector("#curs");
let blur = document.querySelector("#bg");

document.addEventListener("mousemove",(dets)=>{
    posi.style.left=dets.x- 10+"px"
    posi.style.top=dets.y-10+"px"
    blur.style.left=dets.x- 150+"px"
    blur.style.top=dets.y-150+"px"
})



gsap.to("#nav",{
    backgroundColor:"black",
    duration:"2",
    height:"105px",
    // delay:"1"
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top 11%",
        scrub:1,
    }


});
gsap.to("#main",{
    backgroundColor:"black",
    duration:1.6,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -55%",
        scrub:2

    }
})

gsap.from(".colonno-1",{
    y:-80,
    x:-100,
    scrollTrigger:{
        trigger:".colonno-1",
        scroller:"body",
        top:"top 15%",
        end:"top 12%",
        scrub:1,
    }
})
gsap.from(".colonno-2",{
    y:80,
    x:50,
    scrollTrigger:{
        trigger:".colonno-2",
        scroller:"body",
        top:"top 60%",
        end:"top 70%",
        scrub:1,
    }
})

gsap.from(".about .top",{
    y:50,
    stagger:0.5,
    scrollTrigger:{
        trigger:".top",
        scroller:"body",
        top:"top 70%",
        end:"top 75%",
        scrub:1,
        // markers:true
    }
})
gsap.from(".img3 .img-pic",{
    scale:0.8,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:".img-pic",
        scroller:"body",
        start:"top 70%",
        end:"top 75%",
        scrub:1,
        // markers:true
    }
})

gsap.from(".fifth h1",{
    y:50,
    scrollTrigger:{
        trigger:".fifth h1",
        scroller:"body",
        start:"top 95%",
        end:"top 99%",
        scrub:2,
        // markers:true


    }
})