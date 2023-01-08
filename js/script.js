{
    const button = document.querySelector(".button");

    const toggleBackgroundColor = () => {

        const body = document.querySelector(".body");
        const fspan = document.querySelector(".fspan");

        body.classList.toggle("changeBody");
        if (fspan.innerText === "WhiteGold") {
            fspan.innerText = "BlackGold";
        } else {
            fspan.innerText = "WhiteGold";
        }
    }

    button.addEventListener("click", toggleBackgroundColor)
}