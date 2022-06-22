const kakao = document.querySelector('.kakao')
const github = document.querySelector('.github')
kakao.style.backgroundImage = 'url(../image/kakaos.jpg)'
github.style.backgroundImage = 'url(../image/github.png)'
kakao.addEventListener('click',function(){
  alert('손만충의 kakao ID가 저장 되었습니다.')
})

github.addEventListener('click',function(){
  alert('손만충의 github 로 이동 합니다.')
  window.location = 'https://github.com/supersmc1'
})