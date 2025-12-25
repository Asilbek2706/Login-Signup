const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const toastEl = document.getElementById('successToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
});