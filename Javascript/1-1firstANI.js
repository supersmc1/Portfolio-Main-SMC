const wee = document.querySelector('.wee')
const ga = document.querySelector('.ga')
const na = document.querySelector('.na')
const da = document.querySelector('.da')
const ra = document.querySelector('.ra')
const ma = document.querySelector('.ma')
const ba = document.querySelector('.ba')
const sa = document.querySelector('.sa')
const ah = document.querySelector('.ah')
const ja = document.querySelector('.ja')
const ka = document.querySelector('.ka')
const ta = document.querySelector('.ta')
const pa = document.querySelector('.pa')
const ha = document.querySelector('.ha')
const nachd = na.children
const dachd = da.children
const rachd = ra.children
const machd = ma.children
const bachd = ba.children
const sachd = sa.children
const ahchd = ah.children
const jachd = ja.children
const kachd = ka.children
const tachd = ta.children
const pachd = pa.children
const hachd = ha.children

    //알고리즘 애니메이션 9876543210 다시 9876543210
    let timerb = setInterval(function(){
      let i = 13
      let timer = setInterval(function(){
      i--
      if(i > -1){ 
      gachd[i].animate([{
        backgroundColor : 'violet'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(timer)
        }
      },100)
    },1000)
//--------------------------------------------------
    let timerc = setInterval(function(){
      let n = 14
      let viorets = setInterval(function(){
      n--
      if(n > -1){ 
      nachd[n].animate([{
        backgroundColor : 'rgb(234, 92, 253)'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(viorets)
        }
      },150)
    },1000)
//-------------------------------------------------------
    let timerd = setInterval(function(){
      let z = 12
      let reds = setInterval(function(){
      z--
      if(z > -1){ 
      dachd[z].animate([{
        backgroundColor : 'rgb(182, 7, 7)'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(reds)
        }
      },200)
    },1000)
//------------------------------------------------------------
    let timere = setInterval(function(){
      let q = 11
      let redss = setInterval(function(){
      q--
      if(q > -1){ 
      rachd[q].animate([{
        backgroundColor : 'rgb(255, 0, 0)'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(redss)
        }
      },150)
    },1000)
    //--------------------------------
    let timerf = setInterval(function(){
      let w = 13
      let orange = setInterval(function(){
      w--
      if(w > -1){ 
      machd[w].animate([{
        backgroundColor : 'rgb(252, 146, 85)'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(orange)
        }
      },100)
    },1000)
    //--------------------------------------
    let timerg = setInterval(function(){
      let e = 12
      let oranges = setInterval(function(){
      e--
      if(e > -1){ 
      bachd[e].animate([{
        backgroundColor : 'rgb(255, 81, 0)'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(oranges)
        }
      },150)
    },1000)
    //--------------------------------------------
    let timerh = setInterval(function(){
      let r = 10
      let lemon = setInterval(function(){
      r--
      if(r > -1){ 
      sachd[r].animate([{
        backgroundColor : 'rgb(229, 255, 0)'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(lemon)
        }
      },200)
    },1000)
    //------------------------------------------
    let timeri = setInterval(function(){
      let t = 12
      let lemons = setInterval(function(){
      t--
      if(t > -1){ 
      ahchd[t].animate([{
        backgroundColor : 'rgb(228, 214, 19)'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(lemons)
        }
      },150)
    },1000)
    //---------------------------------
    let timerj = setInterval(function(){
      let y = 13
      let green = setInterval(function(){
      y--
      if(y > -1){ 
      jachd[y].animate([{
        backgroundColor : 'rgb(20, 160, 15)'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(green)
        }
      },100)
    },1000)
    //-----------------------------------------
    let timerk = setInterval(function(){
      let u = 15
      let greens = setInterval(function(){
      u--
      if(u > -1){ 
      kachd[u].animate([{
        backgroundColor : 'rgb(43, 255, 0)'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(greens)
        }
      },150)
    },1000)
    //-----------------------------------------
    let timerl = setInterval(function(){
      let o = 13
      let blue = setInterval(function(){
      o--
      if(o > -1){ 
      tachd[o].animate([{
        backgroundColor : 'rgb(0, 153, 255)'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(blue)
        }
      },200)
    },1000)
    //-----------------------------------------
    let timern = setInterval(function(){
      let p = 14
      let blues = setInterval(function(){
      p--
      if(p > -1){ 
      pachd[p].animate([{
        backgroundColor : 'rgb(0, 17, 255)'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(blues)
        }
      },150)
    },1000)
//--------------------------------
    let timerm = setInterval(function(){
      let a = 11
      let bluess = setInterval(function(){
      a--
      if(a > -1){ 
      hachd[a].animate([{
        backgroundColor : 'rgb(4, 11, 104)'
      }],{
        duration : 1000
      })
      }else{
        clearInterval(bluess)
        }
      },100)
    },1000)
    //----------------------------------------------