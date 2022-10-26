
// вызов меню
function menu(button, data) {
	let btn = document.querySelectorAll(`${button}`);
	btn.forEach(item => {
		item.addEventListener('click', () => {
			let dataArr = item.getAttribute(`${data}`);
			let id = document.getElementById(dataArr);
			item.classList.toggle('--active');
			id.classList.toggle('--active');
		})
	})
}

menu('.header-catalog-btn', 'data-menu')