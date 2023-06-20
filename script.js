const inputDay = document.querySelector('.input-day');
const inputMonth = document.querySelector('.input-month');
const inputYear = document.querySelector('.input-year');

const outputDay = document.querySelector('.display-days');
const outputMonth = document.querySelector('.display-month');
const outputYear = document.querySelector('.display-year');

const errDay = document.querySelector('.word-day');
const errMonth = document.querySelector('.word-month');
const errYear = document.querySelector('.word-year');

const labelday = document.querySelector('.lDay');
const labelMonth = document.querySelector('.lMonth');
const labelYear = document.querySelector('.lYear');

let isValid = false;
const img = document.querySelector('img');

img.addEventListener('click', () => {
  if (isValid) {
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    let birthdayObj = new Date(birthday);
    let ageDiff = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiff);
    let ageYear = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate();

    outputDay.innerHTML = ageDay;
    outputMonth.innerHTML = ageMonth;
    outputYear.innerHTML = ageYear;
  }
});

inputDay.addEventListener('input', () => {
  if (+inputDay.value > 31) {
    errDay.textContent = 'Must be a valid day';
    inputDay.style.borderColor = 'hsl(0, 100%, 67%)';
    labelday.style.color = 'hsl(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    errDay.textContent = '';
    inputDay.style.borderColor = 'hsl(0, 0%, 86%)';
    labelday.style.color = 'hsl(0, 0%, 8%)';
    isValid = true;
  }

  if (+inputDay.value === 0) {
    errDay.textContent = 'This field is required';
    inputDay.style.borderColor = 'hsl(0, 100%, 67%)';
    labelday.style.color = 'hsl(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    errDay.textContent = '';
    inputDay.style.borderColor = 'hsl(0, 0%, 86%)';
    labelday.style.color = 'hsl(0, 0%, 8%)';
    isValid = true;
  }
});

inputMonth.addEventListener('input', () => {
  if (+inputMonth.value > 12) {
    errMonth.textContent = 'Must be a valid month';
    inputMonth.style.borderColor = 'hsl(0, 100%, 67%)';
    labelMonth.style.color = 'hsl(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    errMonth.textContent = '';
    inputMonth.style.borderColor = 'hsl(0, 0%, 86%)';
    labelMonth.style.color = 'hsl(0, 0%, 8%)';
    isValid = true;
  }

  if (+inputMonth.value === 0) {
    errMonth.textContent = 'This field is required';
    inputMonth.style.borderColor = 'hsl(0, 100%, 67%)';
    labelMonth.style.color = 'hsl(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    errMonth.textContent = '';
    inputMonth.style.borderColor = 'hsl(0, 0%, 86%)';
    labelMonth.style.color = 'hsl(0, 0%, 8%)';
    isValid = true;
  }
});

inputYear.addEventListener('input', () => {
  const year = new Date().getFullYear();
  if (+inputYear.value > year) {
    errYear.textContent = 'Must be a valid year';
    inputYear.style.borderColor = 'hsl(0, 100%, 67%)';
    labelYear.style.color = 'hsl(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    errYear.textContent = '';
    inputYear.style.borderColor = 'hsl(0, 0%, 86%)';
    labelYear.style.color = 'hsl(0, 0%, 8%)';
    isValid = true;
  }

  if (+inputYear.value === 0) {
    errYear.textContent = 'This field is required';
    inputYear.style.borderColor = 'hsl(0, 100%, 67%)';
    labelYear.style.color = 'hsl(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    errYear.textContent = '';
    inputYear.style.borderColor = 'hsl(0, 0%, 86%)';
    labelYear.style.color = 'hsl(0, 0%, 8%)';
    isValid = true;
  }
});
