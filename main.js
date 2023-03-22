// tady je místo pro náš program

const car = document.querySelector("#car")

document.addEventListener("keydown", (e) => {
	if (e.code === "39"){
        car.style.marginLeft = `10px`
    }
    if (e.code === "37"){
        car.style.marginLeft = "0px"
    }
})

