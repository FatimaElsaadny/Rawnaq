📄 Project Components Overview
1️⃣ Navbar (components/navbar.html)

Contains:

Responsive navigation bar for desktop and mobile.

Logo on the left.

Navigation links: Home, About Us, Products (dropdown), Top Seller, Sale.

Right section:

Search input.

User account toggle (Login/Register).

Language switcher (English / Arabic).

Wishlist and Cart buttons with counters.

Mobile version: Offcanvas sidebar with same elements vertically.

Login/Register modal integrated to appear above mobile sidebar.

Hover effects and input border-radius applied for smooth styling.

Functionality:

Dynamic counters for Wishlist and Cart.

Language switching for navbar text.

Modal popup for login/register.

Stores user interaction temporarily in localStorage (Wishlist, Cart).

LocalStorage Use:

Stores cart items and wishlist counts for persistent state across page reloads.




2️⃣ Footer (components/footer.html)

Contains:

Footer structure placeholder.

Can include links, copyright, contact info, or social media icons.

Loaded dynamically into index page via JS.

Functionality:

Fully dynamic insertion using fetch.

Styles consistent with main theme.




3️⃣ Index / Home Page (index.html / home.html)

Contains:

Placeholders for header, navbar, and footer (#header-container, #navbar-container, #footer-container).

Main content section:

Welcome message and brief description.

Featured Products section with cards:

Image, name, category, price, add to cart button.

Search bar consistent with navbar.

Functionality:

Loads all components dynamically via JS (header, navbar, footer).

Featured products loaded dynamically (currently mock data, later can connect to database).

Search, cart, wishlist functionality integrated.

LocalStorage / Dynamic Data:

Currently mock featured products.

Wishlist and cart counts stored in localStorage.

Dynamic component insertion allows future database integration.