let inputs = document.querySelectorAll('input');
for (let index = 0; index < inputs.length; index++) {
	const input = inputs[index];
	if (input.classList.contains('_date')) {
		datepicker(input, {
			customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
			formatter: (input, date, instance) => {
				const value = date.toLocaleDateString()
				input.value = value
			},
			onSelect: function (input, instance, date) {
				input_focus_add(input.el);
			}
		});
	}
}
