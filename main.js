const header = document.querySelector('.header-class')
const barMenu = document.createElement('span')
barMenu.innerHTML = `<span><i class="fas fa-bars bar-menu"></i></span>`
header.appendChild(barMenu)

const menuNavigation = document.createElement('div')
    
    menuNavigation.innerHTML = `<div class = 'barDiv menuDiv'><nav class="nav-class">
    <ul class="links">
      <li><a href="#about">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#partners">Our Partners</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#onboard">Start process</a></li>
    </ul>
  </nav></div>`
  header.appendChild(menuNavigation)

function menuDisplay(){
    barMenu.addEventListener('click', () => {
menuNavigation.classList.toggle('menuDiv')
    })
}
menuDisplay()
 

    