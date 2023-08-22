const toggleBtns = document.querySelectorAll(".faq-toggle");
const actives = document.querySelectorAll(".nav_bar")

toggleBtns.forEach((faiz) => {
  faiz.addEventListener("click", () => {
    const parent = faiz.parentElement;
    parent.classList.toggle("active");
  });
});


actives.forEach((act)=>{
  act.addEventListener("click",function(){
    actives.forEach((acts)=>{
        acts.classList.remove("actives")
    })
    act.classList.add("actives")
  })
})
