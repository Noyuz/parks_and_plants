import $ from 'jquery';

const toggleForm = () => {
  const button = document.querySelector('.toggle-form');
  const form = document.getElementById('new_plant');
  button.addEventListener('click', () => {
    form.classList.toggle('test');
  });
}

export { toggleForm };
