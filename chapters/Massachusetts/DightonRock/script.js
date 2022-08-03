const spinner = document.getElementById("mySpinner");
const viewer = document.getElementById("myViewer");
if (spinner && viewer) {
  const x = Math.floor(viewer.offsetWidth/2 - spinner.naturalWidth/2);
  const y = Math.floor(viewer.offsetHeight/2 - spinner.naturalHeight/2);
  spinner.style.left = x + "px";
  spinner.style.top = (y+viewer.offsetTop) + "px";
  spinner.style.display = "inline";
  // https://www.viewstl.com/#!
  // https://www.viewstl.com/plugin/#intro
  // https://github.com/omrips/viewstl
  new StlViewer(viewer,
    { models:
      { id: 0, filename: "DightonRock.stl", rotationz: -2.35 },
      all_loaded_callback: function() {
        spinner.style.display = "none";      
      }
    });
}