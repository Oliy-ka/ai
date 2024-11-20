function changeColor() {
  const visualElement = document.querySelector('.visual-element');
  const currentColor = visualElement.style.backgroundColor;
  visualElement.style.backgroundColor = currentColor === 'rgb(255, 221, 87)' ? '#f4a261' : '#ffdd57';
}

/*// Отримуємо всі елементи, для яких хочемо застосувати анімацію
const visualElements = document.querySelectorAll('.visual-elem');

// Функція для перевірки, чи елемент на екрані
function checkVisibility() {
    visualElements.forEach(visualElement => {
        const elementPosition = visualElement.getBoundingClientRect();
        
        // Перевірка, чи елемент видимий на екрані
        if (elementPosition.top >= 0 && elementPosition.bottom <= window.innerHeight) {
            visualElement.classList.add('active'); // Додаємо клас для анімації
        } else {
            visualElement.classList.remove('active'); // Видаляємо клас, якщо елемент вийшов за межі екрана
        }
    });
}

// Викликаємо функцію при кожному скролі
window.addEventListener('scroll', checkVisibility);

// Запускаємо перевірку при завантаженні сторінки
document.addEventListener('DOMContentLoaded', checkVisibility);*/



// Отримуємо всі елементи, до яких застосовуватимемо анімацію
const fadeInElements = document.querySelectorAll('.fade-in-text');
const visualElements = document.querySelectorAll('.visual-elem');

// Функція для перевірки видимості елемента
function checkVisibility() {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        // Перевіряємо, чи елемент видно на екрані
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // Додаємо клас для анімації прозорості
            element.classList.add('visible');
        } else {
            // Видаляємо клас, якщо елемент вийшов з екрану
            element.classList.remove('visible');
        }
    });

    visualElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        // Перевіряємо, чи елемент видно на екрані
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // Додаємо клас для анімації фону та тексту
            element.classList.add('active');
        } else {
            // Видаляємо клас, якщо елемент вийшов з екрану
            element.classList.remove('active');
        }
    });
}

// Викликаємо функцію при кожному скролі
window.addEventListener('scroll', checkVisibility);

// Запускаємо перевірку при завантаженні сторінки
document.addEventListener('DOMContentLoaded', checkVisibility);


