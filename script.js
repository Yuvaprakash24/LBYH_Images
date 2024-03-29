function subscribe() {
    var email = document.getElementById('emailInput').value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(email  && emailRegex.test(email)) {
        document.getElementById('success').style.display = 'block';
        setTimeout(function() {
            success.style.display = 'none';
        }, 3000);
    }
}

document.querySelectorAll('.dropdown-menu a.dropdown-toggle').forEach(function (element) {
  element.addEventListener('click', function (e) {
      var parentDropdown = this.closest('.dropdown-submenu');
      if (parentDropdown) {
          e.preventDefault();
          parentDropdown.querySelector('.dropdown-menu').classList.toggle('show');
      }
  });
});