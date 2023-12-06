let ImportantChild = document.getElementById("ImportantChild");
let skills = document.getElementById("skills");
let closeIcone = document.getElementById("closeIcone");
let up = document.getElementById("up");
let body = document.querySelector("body");
let BtnContactDeitails = document.getElementById("BtnContactDeitails");
let description = document.getElementById("description");
let closeIconeDes = document.getElementById("closeIconeDes");
let AboutMe_Btn = document.getElementById("about_me");
let videoVoice = document.getElementById("about_video");
let videoVoice_closeIcone = document.getElementById("videoVoice_closeIcone");
let MyVideo = document.getElementById("MyVideo");
//start create btn skills
skills.addEventListener("click", function () {
  ImportantChild.style.transform = "scale(1)";
  document.querySelector(".parent").style.opacity = "0.8";
  document.querySelector(".header").style.opacity = "0.8";
  ImportantChild.style.opacity = "1";
});
closeIcone.addEventListener("click", function () {
  ImportantChild.style.transform = "scale(0)";
  document.querySelector(".parent").style.opacity = "1";
  document.querySelector(".header").style.opacity = "1";
});
up.addEventListener("click", function () {
  ImportantChild.scroll({
    top: 0,
    behavior: "smooth",
  });
});
//end btn skills
BtnContactDeitails.addEventListener("click", function () {
  description.style.transform = "scale(1)";
  document.querySelector(".parent").style.opacity = "0.8";
  document.querySelector(".header").style.opacity = "0.8";
  document.querySelector(".aboutMy").style.transform = "scale(0)";
  description.style.opacity = "1";
});
closeIconeDes.addEventListener("click", function () {
  description.style.transform = "scale(0)";
  document.querySelector(".parent").style.opacity = "1";
  document.querySelector(".header").style.opacity = "1";
  document.querySelector(".aboutMy").style.transform = "scale(1)";
});

AboutMe_Btn.addEventListener("click", function () {
  videoVoice.style.transform = "scale(1)";
  document.querySelector(".parent").style.opacity = "0.8";
  document.querySelector(".header").style.opacity = "0.8";
  document.querySelector(".aboutMy").style.transform = "scale(0)";
});
videoVoice_closeIcone.addEventListener("click", function () {
  videoVoice.style.transform = "scale(0)";
  document.querySelector(".parent").style.opacity = "1";
  document.querySelector(".header").style.opacity = "1";
  document.querySelector(".aboutMy").style.transform = "scale(1)";
  pauseVid()
});

function pauseVid() {
    MyVideo.pause();
}
