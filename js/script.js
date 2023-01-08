{
    const button = document.querySelector(".button");
    const body = document.querySelector(".body");
    const fspan = document.querySelector(".fspan");

    const toggleBackgroundColor = () => {
        body.classList.toggle("changeBody");
        if (fspan.innerText === "WhiteGold") {
            fspan.innerText = "BlackGold";
        } else {
            fspan.innerText = "WhiteGold";
        }
    }

    button.addEventListener("click", toggleBackgroundColor)
}