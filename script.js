function gradeCalc() {
    const degree = parseInt(document.querySelector("input").value);
    let grade = "";
    const result = document.querySelector("p");
    if (degree >= 90) {
        grade = "A";
    } else if (degree >= 80) {
        grade = "B";
    } else if (degree >= 70) {
        grade = "C";
    } else if (degree >= 60) {
        grade = "D";
    } else if (degree >= 50) {
        grade = "E";
    } else {
        grade = "F";
    }
    result.textContent = `Your degree is ${degree}. then your grade is ${grade}.`;
}
const calc = document.querySelector("button");
calc.onclick = gradeCalc;
