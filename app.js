// shim layer with setTimeout fallback
window.reqAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60)
          }
})()



setTimeout(function(){
  document.querySelector('.iv-2').style.top = `${window.innerHeight}px`
  registerListeners()
}, 500 )


function fixSec(sec) {
  var elem = document.querySelector(sec)
  elem.style.position = 'fixed'
  return elem
}

function absSec(sec) {
  var elem = document.querySelector(sec)
  elem.style.position = 'absolute'
  return elem
}


function initSec1(){
  var sec1InView = new Waypoint.Inview({
    element: document.querySelector(".iv-1"),
    enter: function(direction) {
      console.log('sec-1 Enter triggered with direction ' + direction)
    },
    entered: function(direction) {
      console.log('sec-1 Entered triggered with direction ' + direction)
    },
    exit: function(direction) {
      console.log('sec-1 Exit triggered with direction ' + direction)
      
    },
    exited: function(direction) {
      console.log('sec-1 exited...')
    }
  })
}


function initSec2(){
  var sec2InView = new Waypoint.Inview({
    element: document.querySelector(".iv-2"),
    enter: function(direction) {
      console.log('sec-2 Enter triggered with direction ' + direction)
      if (direction === 'down') {
        fixSec('.iv-1')
      }
    },
    entered: function(direction) {
      console.log('sec-2 Entered triggered with direction ' + direction)
    },
    exit: function(direction) {
      console.log('sec-2 Exit triggered with direction ' + direction)
      
    },
    exited: function(direction) {
      console.log('sec-2 exited...')
      if(direction === 'up') {
        absSec('.iv-1').style.top = `0px`
      }
    }
  })
}


function initSec3(){
  var sec3InView = new Waypoint.Inview({
    element: document.querySelector(".iv-3"),
    enter: function(direction) {
      console.log('sec-3 Enter triggered with direction ' + direction)
      if(direction === 'down') {
        fixSec('.iv-2').style.top = `${((document.querySelector('.iv-2').offsetHeight) * -1) + window.innerHeight}px`
      }
    },
    entered: function(direction) {
      console.log('sec-3 Entered triggered with direction ' + direction)
    },
    exit: function(direction) {
      console.log('sec-3 Exit triggered with direction ' + direction)
      
    },
    exited: function(direction) {
      console.log('sec-3 exited...')
      if(direction === 'up') {
        absSec('.iv-2').style.top = `${document.querySelector('.iv-1').offsetHeight}px`
      }
    }
  })
}

function initSec4(){
  var sec4InView = new Waypoint.Inview({
    element: document.querySelector(".iv-4"),
    enter: function(direction) {
      console.log('sec-4 Enter triggered with direction ' + direction)
      if(direction === 'down') {
        fixSec('.iv-3').style.top = `${((document.querySelector('.iv-3').offsetHeight) * -1) + window.innerHeight}px`
      }
    },
    entered: function(direction) {
      console.log('sec-4 Entered triggered with direction ' + direction)
    },
    exit: function(direction) {
      console.log('sec-4 Exit triggered with direction ' + direction)
    },
    exited: function(direction) {
      console.log('sec-4 exited...')
      if(direction === 'up') {
        var elem2 = document.querySelector('.iv-2')
        absSec('.iv-3').style.top = `${elem2.offsetHeight+(elem2.offsetTop*-1)}px`
      }
    }
  })
}

  function registerListeners() {
    initSec1()
    initSec2()
    initSec3()
    initSec4()
  }

   function openHermanCaseStudy(selector) {
     document.querySelector(selector).classList.add('active')
     setTimeout(function(){
      document.querySelectorAll('.b-logo').forEach(function(elem){
        elem.classList.add('hide')
       })
       document.querySelector('.b-down').classList.add('hide')
       document.querySelector('body').classList.add('stuck')
     }, 500)
   }

   function closeHermanCaseStudy(selector) {
    document.querySelector(selector).classList.remove('active')
    setTimeout(function(){
     document.querySelectorAll('.b-logo').forEach(function(elem){
       elem.classList.remove('hide')
      })
      document.querySelector('.b-down').classList.remove('hide')
      document.querySelector('body').classList.remove('stuck')
    }, 500)
  }