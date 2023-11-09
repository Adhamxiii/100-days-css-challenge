const handleShowSearchInput = () => {
	const searchInput = document.querySelector('.search-input');
	
	searchInput.classList.toggle('show');
}

const handleShowSubMenu = () => {
	const subMenu = document.querySelector('.sub-menu');
	const main = document.querySelector('.center');
	
	subMenu.classList.toggle('show');
	main.classList.toggle('show');
}