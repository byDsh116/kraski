const formLogin = document.querySelector('.login-formLogin');
const accDiv = document.querySelector('.acc-div');

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    [e.target.email.name]: e.target.email.value,
    [e.target.password.name]: e.target.password.value,
  };
  const response = await fetch('http://localhost:3000/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.status === 200) {
    const userData = await response.json();
    localStorage.setItem('userData', userData);
    window.location.href = `http://localhost:3000/user/account`;
  } else {
    console.log('error');
  }
});

// res.redirect(`/entries/${newEntry.id}`);
