const equal = document.getElementById("equal")
const numbersCol = document.getElementsByClassName("num")
const numbers = Array.from(numbersCol)
const formula = document.getElementById("formula-screen")
const output = document.getElementById("output-screen")
const buttonsCol = document.getElementsByClassName("cen-bor")
const buttons = Array.from(buttonsCol)
const operations = document.getElementsByClassName("opers")
const opersArr = Array.from(operations)
const ac = document.getElementById("AC")
const point = document.getElementById("point")

function handleNumClick(event) {
    let content = event.target.textContent
    if (output.textContent === "0" && formula.textContent === "" || formula.textContent.includes("=")) {
        output.textContent = content
        formula.textContent = content
    }
    else if (!formula.textContent.includes("=")){
        output.textContent += content
        formula.textContent += content
    }
}

numbers.forEach((num) => {
    num.addEventListener("click", handleNumClick)
})

function handleOperClick(event) {
    let content = event.target.textContent
    if (formula.textContent === "" && output.textContent === "0") {
        alert("Use operators in between the operands")
    }
    else if (formula.textContent.includes("=")) {
        formula.textContent = formula.textContent.substring(formula.textContent.indexOf("=") + 1) + content
        output.textContent = content
    }
    else if (!formula.textContent.includes("=")) {
        output.textContent = content
        formula.textContent += content
    }
    
}

opersArr.forEach((oper) => {
    oper.addEventListener("click", handleOperClick)
})

function handleEqual(event) {
    let content = event.target.textContent
    formula.textContent += content
    console.log(formula.textContent)
    let result = eval(formula.textContent.slice(0, -1)).toFixed(1)
    formula.textContent += result
    output.textContent = result
}

equal.addEventListener("click", handleEqual)

point.addEventListener("click", handleNumClick)

ac.addEventListener("click", function(){
    formula.textContent = ""
    output.textContent = "0"
})
