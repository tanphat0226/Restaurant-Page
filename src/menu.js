import phoBoImg from './asset/resource/pho-bo.png'
import phoGaImg from './asset/resource/pho-ga.png'
import goiCuonImg from './asset/resource/goi-cuon.png'
import chaGioImg from './asset/resource/cha-gio.png'
import banhMiImg from './asset/resource/banh-mi.png'
import bunCha from './asset/resource/bun-cha.png'

const MENU_DATA = [
	{
		category: 'Appetizers',
		items: [
			{
				imgSrc: goiCuonImg,
				imgAlt: 'Goi Cuon',
				imgPlaceholder: 'G%E1%BB%8Fi+Cu%E1%BB%91n',
				name: 'Gỏi Cuốn (Spring Rolls)',
				description:
					'Fresh shrimp, pork, vermicelli, and herbs wrapped in rice paper. Served with peanut sauce.',
				price: '120.000₫',
			},
			{
				imgSrc: chaGioImg,
				imgAlt: 'Cha Gio',
				imgPlaceholder: 'Ch%E1%BA%A3+Gi%C3%B2',
				name: 'Chả Giò (Fried Egg Rolls)',
				description:
					'Crispy rolls filled with minced pork, shrimp, and vegetables. Served with fish sauce.',
				price: '135.000₫',
			},
		],
	},
	{
		category: 'Phở (Noodle Soup)',
		items: [
			{
				imgSrc: phoBoImg,
				imgAlt: 'Pho Bo',
				imgPlaceholder: 'Ph%E1%BB%9F+B%C3%B2',
				name: 'Phở Bò Tái (Beef Noodle Soup)',
				description:
					'Our signature 12-hour simmered beef broth with rare steak, brisket, and rice noodles.',
				price: '180.000₫',
			},
			{
				imgSrc: phoGaImg,
				imgAlt: 'Pho Ga',
				imgPlaceholder: 'Ph%E1%BB%9F+G%C3%A0',
				name: 'Phở Gà (Chicken Noodle Soup)',
				description:
					'Aromatic chicken broth with shredded chicken, fresh herbs, and rice noodles.',
				price: '165.000₫',
			},
		],
	},
	{
		category: 'Main Courses',
		items: [
			{
				imgSrc: banhMiImg,
				imgAlt: 'Banh Mi',
				imgPlaceholder: 'B%C3%A1nh+M%C3%AC',
				name: 'Bánh Mì Thịt Nướng (Grilled Pork Sandwich)',
				description:
					'Crispy baguette filled with grilled pork, pickled carrots & daikon, cilantro, and chili.',
				price: '150.000₫',
			},
			{
				imgSrc: bunCha,
				imgAlt: 'Bun Cha',
				imgPlaceholder: 'B%C3%BAn+Ch%E1%BA%A3',
				name: 'Bún Chả Hà Nội',
				description:
					'Grilled pork patties and slices served in a bowl of fish sauce with vermicelli noodles and fresh herbs.',
				price: '195.000₫',
			},
		],
	},
]

const createMenuPage = function (menuData) {
	const menuSection = document.createElement('section')
	menuSection.id = 'menu'
	menuSection.className = 'page container'

	const menuHeader = document.createElement('div')
	menuHeader.className = 'menu-header'

	const headerTitle = document.createElement('h2')
	headerTitle.textContent = 'Our Menu'

	const headerSubtitle = document.createElement('p')
	headerSubtitle.textContent = 'A culinary journey through Vietnam'

	menuHeader.appendChild(headerTitle)
	menuHeader.appendChild(headerSubtitle)
	menuSection.appendChild(menuHeader)

	function createMenuCard(item) {
		const card = document.createElement('div')
		card.className = 'menu-card'

		const img = document.createElement('img')
		img.src = item.imgSrc
		img.alt = item.imgAlt
		img.onerror = function () {
			this.onerror = null
			this.src = `https://placehold.co/150x150/f8f7f2/333?text=${item.imgPlaceholder}`
		}

		const content = document.createElement('div')
		content.className = 'menu-content'

		const name = document.createElement('h4')
		name.textContent = item.name

		const description = document.createElement('p')
		description.textContent = item.description

		const price = document.createElement('p')
		price.className = 'price'
		price.textContent = item.price

		content.appendChild(name)
		content.appendChild(description)
		content.appendChild(price)

		card.appendChild(img)
		card.appendChild(content)

		return card
	}

	// --- Lặp qua dữ liệu để tạo các danh mục và món ăn ---
	menuData.forEach((categoryData) => {
		const categoryDiv = document.createElement('div')
		categoryDiv.className = 'menu-category'

		const categoryTitle = document.createElement('h3')
		categoryTitle.textContent = categoryData.category

		const menuGrid = document.createElement('div')
		menuGrid.className = 'menu-grid'

		categoryData.items.forEach((item) => {
			const menuCard = createMenuCard(item)
			menuGrid.appendChild(menuCard)
		})

		categoryDiv.appendChild(categoryTitle)
		categoryDiv.appendChild(menuGrid)

		menuSection.appendChild(categoryDiv)
	})

	return menuSection
}

const menuSection = createMenuPage(MENU_DATA)

export default menuSection
