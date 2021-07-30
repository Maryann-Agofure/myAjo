const header = document.querySelector('.header-class')


function createBar(){
  
    const barMenu = document.createElement('span')
    barMenu.innerHTML = `<span><i class="fas fa-bars bar-menu"></i></span>`
header.appendChild(barMenu)
barMenu.style.display = 'block'

}
createBar()




const menuNavigation = document.createElement('div')
 menuNavigation.setAttribute('class', 'barDiv')   
      menuNavigation.innerHTML = `<div class ='menuDiv'><nav class="nav-class">
      <ul class="links">
        <li><a href="#about">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#partners">Our Partners</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#onboard">Start process</a></li>
      </ul>
    </nav></div>`
    barMenu.appendChild(menuNavigation)
    menuNavigation.style.display = 'none'

function menuDisplay(){
    barMenu.addEventListener('click', () => {
      barDiv.style.display = 'block'
    })
}
menuDisplay()
 

    