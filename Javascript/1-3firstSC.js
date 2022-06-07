const items1 = document.querySelector('.items1')
const items2 = document.querySelector('.items2')
const items3 = document.querySelector('.items3')
const items4 = document.querySelector('.items4')
/*window.addEventListener("scroll",function(event){
let scrollY = this.scrollY
let scrollX = this.scrollX
console.log(scrollY)
console.log(scrollX)
})*/ //좌표값얻기 함수

items1.addEventListener('click',function(){
  console.log('hi')
  window.scrollTo(0,900)
})

items2.addEventListener('click',function(){
  window.scrollTo(0,1895)
})

items3.addEventListener('click',function(){
  window.scrollTo(0,2795)
})

items4.addEventListener('click',function(){
  window.scrollTo(0,3965)
})