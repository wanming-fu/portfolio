function switchTab(tabId, tabContent) {
  var x = document.getElementsByClassName("main-pages");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; // hide all tab content
  }
  document.getElementById(tabContent).style.display = "flex"; // display the content of the tab we need

  /*
  // now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
  var x = document.getElementsByClassName("nav-tab");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].className = "nav-tab";
  }
  document.getElementById(tabId).className = "nav-tab active";
  */
}

document.querySelectorAll(".carousel-controls .arrow").forEach((button) => {
  button.addEventListener("click", () => {
    const track =
      button.parentElement.parentElement.querySelector(".swipe-container");
    //const track = document.getElementById("photoTrack");
    // Find out how wide one image slide is right now

    const slideWidth = track.clientWidth;

    // Determine scroll direction
    const direction = button.getAttribute("data-dir") === "next" ? 1 : -1;

    // Smoothly scroll ONLY the container, completely ignoring the page URL
    track.scrollBy({
      left: slideWidth * direction,
      behavior: "smooth",
    });
  });
});
