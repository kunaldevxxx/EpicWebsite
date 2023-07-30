var t1 = gsap.timeline()
t1.from(".main",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
})
t1.from(".nav h1,.nav h5,.nav span",{
    y:-80,
    duration:0.8,
    delay:0.5,
    stagger:0.3
})
t1.from(".content .left",{
    y:-80,
    duration:0.8,
    delay:0.5,
    stagger:0.3
})
