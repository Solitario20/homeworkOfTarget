const mitri = document.querySelector('.mitri')
const tog = document.querySelector('.tog')
const ays = document.querySelector('.ays')
const hur = document.querySelector('.hur')
const ferid = document.querySelector('.ferid')
const el = document.querySelector('.el')
const mitriF = (e) => {
  e.target.style.backgroundImage = 'url(mitriGift.png)'
    
}

mitri.addEventListener('click', mitriF)
const togF = (e) => {
  e.target.style.backgroundImage = 'url(togGift.png)'
  // e.target.style.width = '450px'
    
    
}

tog.addEventListener('click', togF)
const aysF = (e) => {
  e.target.style.backgroundImage = 'url(AysGift.png)'
  e.target.style.width = '335px'
    
}

ays.addEventListener('click', aysF)

const hurF = (e) => {
  e.target.style.backgroundImage = 'url(hurGift.png)'
  // e.target.style.width = '350px'
    
}

hur.addEventListener('click', hurF)
const feridF = (e) => {
  e.target.style.backgroundImage = 'url(feridGift.avif)'
  // e.target.style.width = '350px'
    
}

ferid.addEventListener('click', feridF)
const elF = (e) => {
  e.target.style.backgroundImage = 'url(elGift.jpg)'
  e.target.style.width = '350px'
    
}

el.addEventListener('click', elF)