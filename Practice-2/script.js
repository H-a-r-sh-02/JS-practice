window.addEventListener("mousemove",function (details){
    var rect = this.document.querySelector("#rect");

   var xVal = gsap.utils.mapRange(0,window.innerWidth,100+rect.getBoundingClientRect().width/2,window.innerWidth-(100+rect.getBoundingClientRect().width/2),details.clientX);
   var yVal = gsap.utils.mapRange(0,window.innerHeight,90+rect.getBoundingClientRect().height/2,window.innerHeight-(90+rect.getBoundingClientRect().height/2),details.clientY);
   gsap.to('#rect',{
    left: xVal+"px",
    ease: Power3,
    top: yVal+"px",
    ease: Power3
   });
})