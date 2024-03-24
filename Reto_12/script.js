

let input = document.querySelector("input")
let output = document.querySelector("output")


input.addEventListener("input", () => {
  output.textContent = input.value
})