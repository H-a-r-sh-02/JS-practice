const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;

            return func(...args);
        }
    }
}

document.querySelector("#center")
.addEventListener("mousemove",
    throttleFunction((details) => {
    //    your less repetation code 
    var div = document.createElement("div");
    div.classList.add('imagediv');
    div.style.left = details.clientX+ "px";
    div.style.top = details.clientY+ "px";
    
    const images =  ["https://images.unsplash.com/photo-1627274419548-116f452d5e47?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1628229200053-53b768c4d37b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1683637027213-018eca42075d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1629325288097-55f028c6a159?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1559842438-2942c907c8fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1559842438-2942c907c8fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1577595166653-c4b06b30fa18?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1648071611419-1b6258c7f04d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1639513473133-dc1e5f12f83e?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];

    const randomIndex = Math.floor(Math.random()*images.length);
    var img = document.createElement("img");
    img.setAttribute("src", images[randomIndex]);
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power2,
        duration: .2
    });
    gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power3,
        duration: .3
    })

    setTimeout(function(){
        div.remove();
    },3000);
    }, 200));