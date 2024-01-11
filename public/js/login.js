const form = document.querySelector('.login-form');
// const accDiv = document.querySelector('.acc-div');

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();
  // const formData = {
  //   [e.target.email.name]: e.target.email.value,
  //   [e.target.password.name]: e.target.password.value,
  // };
  const data = new FormData(form);
  const response = await fetch('http://localhost:3000/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.status === 200) {
    const userData = await response.json();

    window.location.href = `http://localhost:3000/user/account`;
  } else {
    console.log('error');
  }
});

// res.redirect(`/entries/${newEntry.id}`);
