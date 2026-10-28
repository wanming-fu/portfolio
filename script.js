function switchTab(tabId, tabContent) {
  var x = document.getElementsByClassName("main-pages");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; // hide all tab content
  }
  document.getElementById(tabContent).style.display = "block"; // display the content of the tab we need

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
