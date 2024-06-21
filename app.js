let cursor = document.querySelector(".cursor")
let text = document.querySelector(".text")
let body = document.querySelector("body")

body.addEventListener("mousemove", (e) => {
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
})
text.addEventListener("mouseenter", () => {
    cursor.style.height = "20rem"
    cursor.style.width = "20rem"
})
text.addEventListener("mouseleave", () => {
    cursor.style.height = "2rem"
    cursor.style.width = "2rem"
})