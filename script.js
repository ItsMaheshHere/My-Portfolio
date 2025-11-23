const menu=document.querySelector(".list");
const openBtn=document.querySelector(".Three-line");
const closeBtn=document.querySelector(".cancel");

openBtn.addEventListener("click", () => {
    menu.classList.add("show");
    closeBtn.classList.add("show");
    openBtn.style.display="none";
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("show");
    closeBtn.classList.remove("show");
    openBtn.style.display="block";
});

