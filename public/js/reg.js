console.log('reg-form');

const form = document.querySelector('.reg-form');
const homeDiv = document.querySelector('.home');
console.log(form);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    [e.target.name.name]: e.target.name.value,
    [e.target.email.name]: e.target.email.value,
    [e.target.password.name]: e.target.password.value,
  };
  const response = await fetch('http://localhost:3000/user/reg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (response.status === 200) {
    window.location.href = ' http://localhost:3000/';
    // const result = await response.json;
    // const succesDiv = document.createElement('div');
    // succesDiv.innerHTML = `
    //   <h1> ${result.name} you are succes registration</h1>
    //   `;
    // homeDiv.appendChild(succesDiv);
  }
});
