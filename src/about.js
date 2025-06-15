import aboutImage from './asset/resource/about-img.png'

const aboutData = {
	id: 'about',
	className: 'about-section',
	image: {
		src: aboutImage,
		alt: 'Restaurant Interior',
		placeholder: 'Our+Kitchen',
	},
	content: {
		title: 'Our Story',
		paragraphs: [
			"Anh's Kitchen was born from a dream to share the authentic flavors of our childhood in Vietnam. Our family, led by our matriarch Bà Anh, has been perfecting these recipes for over three generations.",
			'We believe in the power of food to bring people together. Each dish is a labor of love, made from scratch with the freshest local ingredients and a deep respect for culinary tradition. From the slow-simmered broth of our Phở to the crispy perfection of our Chả Giò, we invite you to experience a piece of our heritage.',
			'Thank you for joining us. We hope our food brings you as much joy as it brings us to cook it.',
		],
	},
}

function createAboutSection(data) {
	const aboutSection = document.createElement('section')
	aboutSection.id = data.id
	aboutSection.className = data.className

	const container = document.createElement('div')
	container.className = 'about-container'

	const imageDiv = document.createElement('div')
	imageDiv.className = 'about-image'

	const image = document.createElement('img')
	image.src = data.image.src
	image.alt = data.image.alt
	image.onerror = function () {
		this.onerror = null
		this.src = `https://placehold.co/600x400/cccccc/333?text=${data.image.placeholder}`
	}

	imageDiv.appendChild(image)

	const contentDiv = document.createElement('div')
	contentDiv.className = 'about-content'

	const title = document.createElement('h2')
	title.textContent = data.content.title
	contentDiv.appendChild(title)

	data.content.paragraphs.forEach((pText) => {
		const paragraph = document.createElement('p')

		paragraph.textContent = pText.trim()
		contentDiv.appendChild(paragraph)
	})

	container.appendChild(imageDiv)
	container.appendChild(contentDiv)

	aboutSection.appendChild(container)

	return aboutSection
}

// --- Tạo và hiển thị phần Giới thiệu ---

// Gọi hàm để tạo toàn bộ section
const aboutSectionDOM = createAboutSection(aboutData)

export default aboutSectionDOM
