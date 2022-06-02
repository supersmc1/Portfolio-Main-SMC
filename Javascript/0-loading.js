  //변수설정
  const root = document.querySelector('#root')
  const body = document.body
  const roottwo = document.querySelector('.roottwo')
  const bodychd = document.body.children
  console.log(bodychd) 
  console.dir(body)
  //로딩 스크립트
  setTimeout(function(){
    root.remove() //5초뒤 root 삭제
    roottwo.style.display="block"//5초뒤 화면나오게 설정
  },5000)