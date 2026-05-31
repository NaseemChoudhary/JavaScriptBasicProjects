const passwordInput = document.getElementById('passwordInput');
const toggleBtn = document.getElementById('toggleBtn');

if (passwordInput && toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    toggleBtn.textContent = isHidden ? 'Hide' : 'Show';
    toggleBtn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
  });
}
