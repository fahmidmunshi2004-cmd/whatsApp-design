//=============== page dropdown =================//
function toggleDropdown(id) {
    const menu = document.getElementById(id);
    const button = event.currentTarget;
    const arrow = button.querySelector("img");
    document.querySelectorAll(".dropdown__menu").forEach(d => {
        if (d.id !== id) d.classList.remove("active");
    });
    menu.classList.toggle("active");
    if (arrow) {
        arrow.style.transform = menu.classList.contains("active")
            ? "rotate(180deg)"
            : "rotate(0deg)";
    }
    document.addEventListener("click", function outside(e) {
        if (!menu.contains(e.target) && !button.contains(e.target)) {
            menu.classList.remove("active");
            if (arrow) arrow.style.transform = "rotate(0deg)";
            document.removeEventListener("click", outside);
        }
    });
}



//=============== Auto-resizing Textarea =================//
const tx = document.querySelectorAll("textarea");

tx.forEach(textarea => {
    // Initial setup //
    textarea.style.height = textarea.scrollHeight + "px";
    textarea.style.overflowY = "hidden";

    textarea.addEventListener("input", function () {
        this.style.height = "auto";

        // scrollHeight er sathe padding adjust korar jonno //
        const newHeight = this.scrollHeight;
        this.style.height = newHeight + "px";
    });
});



//=============== icon show hide ===============//
document.addEventListener("DOMContentLoaded", function () {

    const textareas = document.querySelectorAll('textarea');
    const micIcon = document.getElementById('micIcon');
    const sendIcon = document.getElementById('sendIcon');

    textareas.forEach(textarea => {
        textarea.addEventListener('input', () => {

            // check any textarea has value //
            let hasValue = false;

            textareas.forEach(t => {
                if (t.value.trim() !== '') {
                    hasValue = true;
                }
            });

            if (hasValue) {
                micIcon.classList.add('d-none');
                sendIcon.classList.remove('d-none');
            } else {
                micIcon.classList.remove('d-none');
                sendIcon.classList.add('d-none');
            }

        });
    });

});


// rep text //
document.querySelectorAll('.msg-cut').forEach(el => {
    let text = el.innerText.trim();
    text = text.replace(/\n/g, "<br>");
    el.innerHTML = text;
});




