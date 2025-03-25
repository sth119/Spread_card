$(document).ready(function () {
  const background = document.querySelector(".asidewrap");
  const movies = document.querySelectorAll(
    "#movie1, #movie2, #movie3, #movie4, #movie5, #movie6"
  );

  $(".card-container").click(function (e) {
    if ($(".aside").hasClass("on")) {
      console.log("aside가 열려있어서 spread에 영향 없음");
      return;
    }

    if ($(".card-container.spread").length > 0) {
      console.log("spread를 클릭했습니다");

      movies.forEach((movie) => movie.classList.remove("on"));
      background.classList.remove("on");

      if (e.target.classList.contains("card-card1")) {
        document.querySelector("#movie1").classList.add("on");
        document.querySelector(".asidewrap").classList.add("on");
        console.log("1번 클릭");
      }
      if (e.target.classList.contains("card-card2")) {
        document.querySelector("#movie2").classList.add("on");
        document.querySelector(".asidewrap").classList.add("on");
        console.log("2번 클릭");
      }
      if (e.target.classList.contains("card-card3")) {
        document.querySelector("#movie3").classList.add("on");
        document.querySelector(".asidewrap").classList.add("on");
        console.log("3번 클릭");
      }
      if (e.target.classList.contains("card-card4")) {
        document.querySelector("#movie4").classList.add("on");
        document.querySelector(".asidewrap").classList.add("on");
        console.log("4번 클릭");
      }
      if (e.target.classList.contains("card-card5")) {
        document.querySelector("#movie5").classList.add("on");
        document.querySelector(".asidewrap").classList.add("on");
        console.log("5번 클릭");
      }
      if (e.target.classList.contains("card-card6")) {
        document.querySelector("#movie6").classList.add("on");
        document.querySelector(".asidewrap").classList.add("on");
        console.log("6번 클릭");
      }
    }

    console.log("카드 클릭되었습니다.");

    $(this).addClass("spread");

    e.stopPropagation();
  });

  $("body").click(function (e) {
    if (
      $(".card-container.spread").length > 0 &&
      !$(".asidewrap").hasClass("on")
    ) {
      console.log("배경 클릭되었습니다.");

      $(".card-container").removeClass("spread");

      e.stopPropagation();
    }
  });

  $("div.asidewrap").click(function (e) {
    console.log("배경 클릭되었습니다.");

    $("aside").removeClass("on");
    $(".asidewrap").removeClass("on");

    e.stopPropagation();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const synopsisElements = document.querySelectorAll(".synopsis");

  synopsisElements.forEach((element) => {
    const maxHeight = 24 * parseFloat(getComputedStyle(element).lineHeight); 
    if (element.scrollHeight > maxHeight) {
      let originalText = element.innerText; 
      element.style.height = `${maxHeight}px`;
      element.style.overflow = "hidden";

      while (element.scrollHeight > maxHeight && originalText.length > 0) {
        originalText = originalText.slice(0, -1);
        element.innerText = originalText + "...";
      }
    }
  });
});
