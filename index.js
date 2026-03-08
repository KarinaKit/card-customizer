const selectEl = document.querySelector('#choices');
const myCardEl = document.querySelector('.my__card');
const inputText = document.querySelector('.input__text');
const radioImages = document.querySelectorAll('input[name="customRadio"]');
const inputFile = document.querySelector('.file');
const userTextInput = document.createElement('p');
userTextInput.classList.add('userTextInput');


inputText.addEventListener('input', function () {
    userTextInput.textContent = this.value

    console.log('Введене польщователем: ', this.value);

    userTextInput.style.fontWeight = 'bold';
    userTextInput.style.fontSize = '20px';
    userTextInput.style.textAlign = 'center';
    userTextInput.style.padding = '38px'

    myCardEl.append(userTextInput);
});

radioImages.forEach(radio => {
        radio.addEventListener('change', function() {
            const imgSrc = this.nextElementSibling.src;

            myCardEl.style.backgroundImage = `url(./img/chip.jpg), url(${imgSrc})`;

            myCardEl.style.backgroundRepeat = 'no-repeat, no-repeat';
            myCardEl.style.backgroundSize = '40px, cover';
            myCardEl.style.backgroundPosition = 'center left 24px, center';

            if (imgSrc) {
                myCardEl.style.color = 'white';
            }
    });
});

inputFile.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        const userImage = URL.createObjectURL(this.files[0])

        myCardEl.style.backgroundImage = `url(./img/chip.jpg), url(${userImage})`;
        myCardEl.style.backgroundRepeat = 'no-repeat, no-repeat';
        myCardEl.style.backgroundSize = '40px, cover';
        myCardEl.style.backgroundPosition = 'center left 24px, center';
        
        radioImages.forEach(radio => radio.checked = false);
    }
});


selectEl.addEventListener('change', function() {
    const selectedColor = selectEl.value;

    myCardEl.style.backgroundColor = selectedColor;

    myCardEl.style.backgroundImage = 'url("./img/chip.jpg")';
    const radioImages = document.querySelectorAll('input[name="customRadio"]');
    radioImages.forEach(radio => radio.checked = false);


    if (['black', 'blue', 'brown', '#252850',  '#4d220e'].includes(selectedColor)) {
        myCardEl.style.color = 'white';
    } else {
        myCardEl.style.color = 'black';
    }
});