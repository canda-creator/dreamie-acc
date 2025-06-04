  const hamburger = document.getElementById('hamburger');
  const menu = document.querySelector('ul.menu');
  const dropdownParents = document.querySelectorAll('li.has-dropdown');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  hamburger.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      menu.classList.toggle('active');
    }
  });

  dropdownParents.forEach(parent => {
    const link = parent.querySelector('a');
    const dropdown = parent.querySelector('ul.dropdown');
    const backBtn = dropdown.querySelector('.back-btn');

    link.addEventListener('click', e => {
      if(window.innerWidth <= 768){
        e.preventDefault();
        parent.classList.add('open');
      }
    });

    backBtn.addEventListener('click', () => {
      parent.classList.remove('open');
    });
  });


