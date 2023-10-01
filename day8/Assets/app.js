function change() {
    let h = document.getElementById('text');
    h.innerText = "button";

    h.style.display = "none";
}
function Change() {
    let s1 = document.getElementById('s1');
    let field = document.getElementById('field');
    let t = document.getElementById('s2');
    let teacher = document.getElementById('teacher');
    let student = document.getElementById('student');

    if (student.click) {
        s1.style.display = "block";
    }

    if(field.value == "teacher"){
    t.style.display = "block";
    s1.style.display = "none";
   }
}