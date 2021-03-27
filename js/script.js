
let inputs = document.querySelectorAll('input');
let textareas = document.querySelectorAll('textarea');

   for (let index = 0; index < inputs.length; index++) {
      for (let index = 0; index < textareas.length; index++) {
         const textarea = textareas[index];
         textarea.addEventListener('input', function (){
            let length = textarea.value.length;
         if (length > 0) {
            textarea.classList.add('_nonempty');
         } else {
            textarea.classList.remove('_nonempty');
         }
         });
      }
      const input = inputs[index];
      input.addEventListener('input', function (){
         let length = input.value.length;
         if (length > 0) {
            input.classList.add('_nonempty');
         } else {
            input.classList.remove('_nonempty');
         }
      });

      if (input.classList.contains('_date')) {
         datepicker(input, {
            customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            formatter: (input, date, instance) => {
               const value = date.toLocaleDateString()
               input.value = value
            },
         });
      }
   
   }



let sortButtons = document.querySelectorAll('.dropmenu__item-box');
for (let index = 0; index < sortButtons.length; index++) {
   const sortButton = sortButtons[index];
   
   if (sortButton) {
      sortButton.addEventListener('click', function(a){
         sortButton.classList.toggle('_active');
      });
   }
}

let travelItems = document.querySelectorAll('.travel__item');
let mapView = document.querySelector('.map');
let listView = document.querySelector('.tours');
let mapViewButton = document.querySelector('.travel__item_map');
let listViewButton = document.querySelector('.travel__item_list');

if (listViewButton.classList.contains('_clicked')) {
   mapView.classList.add('_hidden');
}

mapViewButton.addEventListener('click', function(e){
   e.preventDefault();
   e.target.classList.add('_clicked');
   listView.classList.add('_hidden');
   listViewButton.classList.remove('_clicked');
   mapView.classList.remove('_hidden');
});

listViewButton.addEventListener('click', function(e){
   e.preventDefault();
   e.target.classList.add('_clicked');
   mapView.classList.add('_hidden');
   mapViewButton.classList.remove('_clicked');
   listView.classList.remove('_hidden');
});


	




let closeButtons = document.querySelectorAll('.close-button');
for (let index = 0; index < closeButtons.length; index++) {
   const closeButton = closeButtons[index];
   
   let parent = closeButton.parentNode;
   closeButton.addEventListener('click', function(e){
      parent.style.cssText = "display: none;";
   });
}

