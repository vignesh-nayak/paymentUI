const clickableDivs = document.querySelectorAll(".item");
const detailsDivs = document.querySelectorAll(".itemdetails");

// Add event listener to each div
clickableDivs.forEach(function (ele, index) {
  // Define the event handler
  const handleClick = function () {
    // changing background color
    clickableDivs.forEach(function (e, ind) {
      e.style.backgroundColor = "#FFFFFF";
    });
    ele.style.backgroundColor = "#FFF9FA";

    // toggling table visibility
    detailsDivs.forEach(function (el, ind) {
      if (ind === index) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });
  };

  // Add the event listener
  ele.addEventListener("click", handleClick);
});
