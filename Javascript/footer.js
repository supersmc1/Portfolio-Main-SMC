const kakao = document.querySelector('.kakao')
const github = document.querySelector('.github')
const cdplay = document.querySelector('.cdplay')
const thirds = document.querySelector('.third')
console.dir(cdplay)

kakao.addEventListener('click',function(){
  alert('손만충의 kakao ID가 저장 되었습니다.')
})

github.addEventListener('click',function(){
  alert('손만충의 github 로 이동 합니다.')
  window.location = 'https://github.com/supersmc1'
})