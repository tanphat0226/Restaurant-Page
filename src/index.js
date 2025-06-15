import './styles.css'
import homeSectionDOM from './home'
import menuSectionDOM from './menu'
import aboutSectionDOM from './about'

function toggleMobileMenu() {
	const menu = document.getElementById('mobile-menu')
	if (menu.style.display === 'block') {
		menu.style.display = 'none'
	} else {
		menu.style.display = 'block'
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const navLinkBtns = document.querySelectorAll('.nav-link')
	const mobileMenuBtn = document.querySelector('.mobile-menu-button')
	const contentElement = document.querySelector('#content')

	// Fist load pagae
	contentElement.insertAdjacentElement('afterbegin', homeSectionDOM)

	// Toggle Mobile Menu
	mobileMenuBtn.addEventListener('click', () => {
		toggleMobileMenu()
	})

	// Switch between pages
	navLinkBtns.forEach((navLinkBtn) => {
		navLinkBtn.addEventListener('click', (e) => {
			const toPage = e.target.id

			// window.history.pushState({}, '', `${toPage}`)

			// Toggle Mobile Menu
			if (e.target.parentElement.id === 'mobile-menu') {
				toggleMobileMenu()
			}

			// Jump to the top of a webpage when change page
			window.scrollTo(0, 0)

			// Clear prev page
			contentElement.innerHTML = ''
			let page = null

			if (toPage === 'home') {
				page = homeSectionDOM
			} else if (toPage === 'menu') {
				page = menuSectionDOM
			} else if (toPage === 'about') {
				page = aboutSectionDOM
			}

			contentElement.append(page)
		})
	})
})
