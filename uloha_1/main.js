// tady je místo pro náš program

const car = document.querySelector("#car")
let posun = 0

document.addEventListener("keydown", (event) => {
	if (event.code === "ArrowRight"){
        posun = posun + 10
        car.style.marginLeft = `${posun}px`
        console.log("doprava")
    }
    if (event.code === "ArrowLeft"){
        car.style.marginLeft = "0px"
        posun = 0
    }
})
  
