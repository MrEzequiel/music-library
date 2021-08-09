const openCloseSideBar = () => {
  document.querySelector('.side-bar-overlay').classList.toggle('show')
}

document
  .querySelector('.open-menu-button')
  .addEventListener('click', openCloseSideBar)

document.querySelector('.close').addEventListener('click', openCloseSideBar)
