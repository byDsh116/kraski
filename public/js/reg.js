console.log('reg-form');

const form = document.querySelector('.reg-form');
console.log(form);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    [e.target.name.name]: e.target.name.value,
    [e.target.email.name]: e.target.email.value,
    [e.target.password.name]: e.target.password.value,
  };
  //   const respons = await fetch
});
