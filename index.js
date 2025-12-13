 const students = {
    "rahul": "rahul123",
    "anita": "anita456",
    "Om": "om789",
    "Student": "notes111",
    "Suman": "suman81107"
  };

  function login() {
    const pass = document.getElementById('password').value;
    let user = null;

    for (let name in students) {
      if (students[name] === pass) {
        user = name;
        break;
      }
    }

    if (user) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', user);
      showNotes();
    } else {
      document.getElementById('error').innerText = '❌ Wrong password';
    }
  }

  function showNotes() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('notesSection').style.display = 'block';
    document.getElementById('welcome').innerText =
      'Welcome, ' + localStorage.getItem('username');
  }

  function logout() {
    localStorage.clear();
    location.reload();
  }

  // Auto login if already logged in
  if (localStorage.getItem('loggedIn') === 'true') {
    showNotes();
  }

  // Search & filter
  const search = document.getElementById('search');
  const cards = document.querySelectorAll('.note-card');

  search.addEventListener('keyup', () => {
    const value = search.value.toLowerCase();
    cards.forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(value)
        ? 'block' : 'none';
    });
  });

  function filterNotes(category) {
    cards.forEach(card => {
      card.style.display =
        category === 'all' || card.classList.contains(category)
        ? 'block' : 'none';
    });
  }