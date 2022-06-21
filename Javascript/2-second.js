const desc = document.querySelector('.desc')
const descchd = desc.children
  for(let dsi = 0; dsi < descchd.length; dsi++){
      descchd[dsi].style.margin = "20px"
      if(matchMedia("screen and (max-width: 500px)").matches){
        descchd[dsi].style.marginTop = "5px"
      }
      }