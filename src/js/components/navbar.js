// ====== Variables ======
const authModal = document.getElementById('authModal');
const userSpan = document.getElementById('userSpan');
const userSpanMobile = document.getElementById('userSpanMobile');
const closeModal = document.querySelectorAll('.modal-close');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const langBtns = document.querySelectorAll('.lang-option');
const navLinks = document.querySelectorAll('#nav-links .nav-link');
const navLinksMobile = document.querySelectorAll('#nav-links-mobile .nav-link');
const wishlistCount = document.getElementById('wishlistCount');
const cartCount = document.getElementById('cartCount');

// ====== Modal ======
function openModal() { authModal.style.display = 'flex'; }
function closeModalFunc() { authModal.style.display = 'none'; }
userSpan.addEventListener('click', openModal);
userSpanMobile.addEventListener('click', openModal);
closeModal.forEach(btn => btn.addEventListener('click', closeModalFunc));

// Switch forms
showRegister.addEventListener('click', ()=>{
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
});
showLogin.addEventListener('click', ()=>{
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// ====== Language ======
let currentLang = localStorage.getItem('lang') || 'en';
function setLanguage(lang){
  currentLang = lang;
  localStorage.setItem('lang', lang);
  if(lang==='ar'){
    navLinks.forEach((link,i)=> link.textContent = ['الرئيسية','من نحن','منتجات','الأكثر مبيعاً','تخفيضات'][i]);
    navLinksMobile.forEach((link,i)=> link.textContent = ['الرئيسية','من نحن','منتجات','الأكثر مبيعاً','تخفيضات'][i]);
    document.querySelectorAll('.dropdown-item.lang-option').forEach(el=> el.parentElement.previousElementSibling.textContent='Arabic');
  } else {
    navLinks.forEach((link,i)=> link.textContent = ['HOME','ABOUT US','PRODUCTS','Top Seller','Sale'][i]);
    navLinksMobile.forEach((link,i)=> link.textContent = ['HOME','ABOUT US','PRODUCTS','Top Seller','Sale'][i]);
    document.querySelectorAll('.dropdown-item.lang-option').forEach(el=> el.parentElement.previousElementSibling.textContent='English');
  }
}
langBtns.forEach(btn => btn.addEventListener('click', ()=>{
  setLanguage(btn.dataset.lang);
}));
setLanguage(currentLang);

// ====== User Login/Register ======
loginForm.addEventListener('submit', e=>{
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  localStorage.setItem('user', email);
  userSpan.textContent = email;
  userSpanMobile.textContent = email;
  closeModalFunc();
});
registerForm.addEventListener('submit', e=>{
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  localStorage.setItem('user', email);
  userSpan.textContent = email;
  userSpanMobile.textContent = email;
  closeModalFunc();
});

// ====== Wishlist & Cart ======
function updateCounts(){
  wishlistCount.textContent = localStorage.getItem('wishlist') || 0;
  cartCount.textContent = localStorage.getItem('cart') || 0;
}
updateCounts();

// ====== Search ======
document.getElementById('searchBtn').addEventListener('click', ()=>{
  alert('Search: '+document.getElementById('searchInput').value);
});

// ====== On Load ======
document.addEventListener('DOMContentLoaded', ()=>{
  const savedUser = localStorage.getItem('user');
  if(savedUser){
    userSpan.textContent = savedUser;
    userSpanMobile.textContent = savedUser;
  }
});
