# iPhone Shop - E-Commerce Website

A modern, responsive iPhone shop website with a white theme and blur effects. Featuring product management, shopping cart functionality, and a clean user interface.

## Features

### 🎨 Design
- **White Theme**: Clean, minimalist white design with light gray accents
- **Blur Effects**: Beautiful blur effects throughout the UI for modern aesthetics
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects and transitions for better UX

### 🛍️ Shop Features
- Pre-loaded with iPhone X through iPhone 17 models
- Filter products by iPhone series (X, 11, 12, 13, 14, 15, 16, 17)
- Add new products to the shop
- Product details including color, storage capacity, and descriptions
- Dynamic product grid that updates in real-time

### 🛒 Shopping Cart
- Add products to cart with quantity tracking
- View cart summary with total price
- Remove items from cart
- Persist cart data using browser localStorage
- Cart count badge in navigation

### 💾 Data Persistence
- Products and cart data are saved to localStorage
- Data persists across browser sessions
- Default products are loaded on first visit

## File Structure

```
ALIEN-TECH-/
├── index.html      # Main HTML structure
├── styles.css      # All styling with blur effects and white theme
├── script.js       # JavaScript functionality and state management
└── README.md       # This file
```

## Getting Started

1. **Open the Website**
   - Simply open `index.html` in your web browser
   - No server or build process required

2. **Browse Products**
   - Scroll through the product collection
   - Use filter buttons to view specific iPhone series
   - Click "Add to Cart" to purchase items

3. **Add New Products**
   - Navigate to "Add Product" section
   - Fill in product details (name, price, color, storage, image URL, description)
   - Submit the form to add to the shop

4. **Manage Cart**
   - Click the shopping cart icon (🛒) in the navigation
   - View cart items and total price
   - Remove items or proceed to checkout

## Styling Highlights

### Blur Effects
- Navigation bar with backdrop blur
- Hero section with radial blur gradients
- Product cards with hover blur effects
- Modal overlays with blur backdrop

### White Theme
- Primary color: #FFFFFF
- Accent blue: #0A84FF
- Light gray backgrounds: #F5F5F5
- Clean typography with system fonts

### Interactive Elements
- Smooth hover transitions
- Button animations and shadows
- Filter button state changes
- Modal slide-in animations

## Default Products Included

- iPhone X (Space Gray, 64GB) - $499
- iPhone 11 (Purple, 128GB) - $599
- iPhone 12 (Blue, 128GB) - $699
- iPhone 13 (Sierra Blue, 128GB) - $799
- iPhone 14 (Deep Purple, 128GB) - $899
- iPhone 15 (Black Titanium, 128GB) - $999
- iPhone 16 (Ultramarine, 256GB) - $1,099
- iPhone 17 (Platinum, 512GB) - $1,299

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, blur filters, and animations
- **JavaScript (Vanilla)**: No dependencies, pure JS for functionality
- **LocalStorage API**: Client-side data persistence

## Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Explained

### Add to Cart
- Click the "Add to Cart" button on any product
- Items are added with quantity tracking
- Cart count updates in real-time
- Notification confirms the action

### Filter Products
- Use category buttons to filter by iPhone series
- "All" button shows the complete catalog
- Active filter is highlighted in blue

### Add Product Form
- Product Name: e.g., "iPhone 15 Pro Max"
- Price: Numeric value in dollars
- Color: E.g., "Space Black"
- Storage: E.g., "256GB"
- Image URL: Link to product image
- Description: Product details

### Shopping Cart
- View all cart items with quantities
- See individual item prices and total
- Remove items individually
- Checkout button processes the order

## Tips

- Use product image URLs from Unsplash or similar services
- Customize colors in CSS variables (`:root` section)
- All data is saved automatically to localStorage
- Clear browser data to reset to default products

## Future Enhancements

- Backend API integration
- User authentication
- Payment processing
- Order history
- Product reviews and ratings
- Advanced search functionality
- Wishlist feature

---

Created with ❤️ for iPhone enthusiasts!