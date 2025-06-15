const createRestaurantHomepage = function () {
	// Create the main <section> element ---
	const homeSection = document.createElement('section')
	homeSection.id = 'home'
	homeSection.className = 'page'

	// Create the hero background container ---
	const heroBg = document.createElement('div')
	heroBg.className = 'hero-bg'

	// Create the hero content container ---
	const heroContent = document.createElement('div')
	heroContent.className = 'hero-content'

	// Create the hero title (h1) ---
	const heroTitle = document.createElement('h1')
	heroTitle.className = 'hero-title'
	heroTitle.textContent = 'A Taste of Authentic Vietnam'

	// Create the hero subtitle (p) ---
	const heroSubtitle = document.createElement('p')
	heroSubtitle.className = 'hero-subtitle'
	// Using innerHTML to handle potential line breaks, though textContent is often safer.
	// Sticking to textContent here for simplicity and security.
	heroSubtitle.textContent =
		"Crafted with love, from our family's recipes to your table."

	// Create the hero call-to-action button ---
	const heroCta = document.createElement('button')
	heroCta.className = 'hero-cta'
	heroCta.textContent = 'View Menu'
	// A button doesn't have an href, but we can set a data attribute
	// or an onclick event to handle navigation.
	heroCta.onclick = () => {
		window.location.href = '#menu'
	}

	// Assemble the hero section ---
	// Appends h1, p, and button to the hero content div
	heroContent.appendChild(heroTitle)
	heroContent.appendChild(heroSubtitle)
	heroContent.appendChild(heroCta)

	// Appends the hero content div to the hero background div
	heroBg.appendChild(heroContent)

	// Create the "Welcome" section container ---
	const welcomeSection = document.createElement('div')
	welcomeSection.className = 'section-welcome'

	// Create the welcome heading (h2) ---
	const welcomeHeading = document.createElement('h2')
	welcomeHeading.textContent = "Welcome to Anh's Kitchen"

	// Create the welcome paragraph (p) ---
	const welcomeParagraph = document.createElement('p')
	welcomeParagraph.textContent =
		'Located in the heart of the city, we bring you the vibrant flavors and rich culinary traditions of Vietnam. Our dishes are prepared daily with the freshest ingredients, ensuring an unforgettable dining experience.'

	// Assemble the "Welcome" section ---
	welcomeSection.appendChild(welcomeHeading)
	welcomeSection.appendChild(welcomeParagraph)

	// Assemble the final homepage section ---
	// Appends the hero background and welcome section to the main section element
	homeSection.appendChild(heroBg)
	homeSection.appendChild(welcomeSection)

	return homeSection
}

export default createRestaurantHomepage()
