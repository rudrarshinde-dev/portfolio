const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){

    toggleBtn.innerHTML = "🌙";

  } else{

    toggleBtn.innerHTML = "☀";

  }

});