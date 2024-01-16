const deleteBtn = document.querySelector('.btn-delete');
const editBtn = document.querySelector('.btn-edit');

deleteBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const userId = e.target.getAttribute('userid');
  const response = await fetch(`http://localhost:3000/user/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 200) {
    window.location.href = ' http://localhost:3000/user/entry';
  } else {
    console.log('error');
  }
});
