# Design Guidelines for LRS – Laboratoires Réunis de Soin

## Design Approach
**Reference-Based Approach**: Modern cosmetics/beauty e-commerce aesthetic inspired by premium skincare brands (Sephora, L'Oréal, The Ordinary) with clean, elegant layouts that let products shine.

## Core Design Elements

### Typography
- **Primary Font**: Inter or Poppins (sans-serif, modern)
- **Hierarchy**:
  - Hero Headlines: 3xl-5xl, bold (font-bold)
  - Section Titles: 2xl-3xl, semibold (font-semibold)
  - Product Names: lg-xl, medium (font-medium)
  - Body Text: base-lg, regular (font-normal)
  - Small Text/Labels: sm, regular

### Color Palette (User-Specified)
- **Primary**: Deep purple (violet profond)
- **Secondary**: White, touches of pink/orange (from catalog branding)
- **Accents**: Use brand-appropriate rose and orange tones for CTAs and highlights
- **Text**: Dark gray on light backgrounds, white on dark backgrounds

### Layout System
**Spacing Units**: Use Tailwind spacing scale consistently
- **Common spacing**: p-4, p-6, p-8, p-12 (sections), p-16 to p-24 (major sections)
- **Gaps**: gap-4 (cards), gap-6 (grid items), gap-8 (major sections)
- **Margins**: mb-6, mb-8, mb-12 for vertical rhythm

### Component Library

**Navigation**
- Fixed navbar at top (sticky top-0, z-50)
- Logo LRS left-aligned
- Horizontal menu right-aligned (Accueil / À propos / Produits / Contact)
- Hamburger menu for mobile (transforms to overlay/drawer)
- Subtle shadow below navbar for depth

**Hero Section (Home Page)**
- Full-screen section with elegant purple gradient background OR floral hero image
- Centered content with large headline: "LYS INTENSE – Une Histoire de Passion"
- Introductory paragraph (max-w-2xl, centered)
- Primary CTA button with blurred background treatment
- Padding: py-20 to py-32 on desktop, py-12 on mobile

**Brand Cards (Home)**
- Three-column grid on desktop (grid-cols-1 md:grid-cols-3)
- Each card: Image placeholder, brand name, short description
- Hover effect: subtle scale and shadow increase
- Brands: LYS INTENSE, BOOM, AL JARA

**Product Cards (Products Page)**
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Card structure:
  - Large product image (aspect-ratio-3/4 or similar)
  - Brand badge/tag (top-left overlay)
  - Product name (text-lg font-medium)
  - Short description (text-sm text-gray-600)
  - Variants list if applicable (small chips/pills)
- Hover: Lift effect (transform scale-105), enhanced shadow
- White background, rounded corners (rounded-lg)

**Filter System (Products Page)**
- Horizontal button row or dropdown on mobile
- Categories: Gel Douche, Déodorant, Roll-On, Shampoing, Masques Capillaires, Huiles, Soins Enfants/Bébé, Styling (BOOM), Crèmes/Vaselines, Gel Hydro/Alcoolique, Autres
- Active filter: purple background, white text
- Inactive: white background, purple border

**Contact Form**
- Single-column form, max-w-xl centered
- Input fields: Name, Email, Phone, Message (textarea)
- Purple submit button with hover state
- Contact information sidebar/section with icons for address, phone, WhatsApp, email

**Footer**
- Four-column layout on desktop, stacked on mobile
- Column 1: Logo + company name
- Column 2: Full address + contact info
- Column 3: Certifications (pH Neutral, Recycled Plastic, Dermatologically tested, ISO 22000) with icons
- Column 4: Social media icons (Facebook, Instagram, LinkedIn)
- Copyright bar at bottom
- Dark purple background, white text

### Animations
- Hover effects on cards: scale(1.05), shadow enhancement, transition-all duration-300
- Button hover: slight brightness increase, scale(1.02)
- Mobile menu: slide-in animation from right
- Keep animations subtle and professional

### Responsive Behavior
**Mobile-First Approach**:
- Base styles for mobile (single column)
- md: breakpoint for tablets (2 columns where appropriate)
- lg: breakpoint for desktop (3-4 columns)
- Hamburger menu appears below md: breakpoint
- Hero text size scales down on mobile
- Product grid: 1 column mobile, 2 columns tablet, 3-4 columns desktop

## Images

**Hero Section (Home)**
- Large, high-quality hero image featuring elegant floral elements (like in catalog) OR purple gradient with subtle pattern
- Overlay with semi-transparent dark layer for text readability
- Dimensions: Full viewport width, 80-100vh height
- Buttons on hero: Implement blurred background treatment

**Product Images**
- All product cards use placeholder images (400x600 or similar portrait ratio)
- Purple/pink/white color scheme for placeholders
- Suggested placeholder URL pattern with branded colors

**Brand Section**
- Three brand card images representing LYS INTENSE, BOOM, and AL JARA visual identities

**About Page**
- Consider adding image of production facility or product arrangement
- Certification badge icons (small, vectorized)

## Page-Specific Layouts

**Home Page Sections (in order)**:
1. Hero (full-screen, image/gradient background)
2. Introduction text section (max-w-4xl, centered, py-16)
3. "Nos marques" - 3 brand cards (py-20)
4. Featured products gallery - 6-8 products grid (py-20)
5. CTA section - "Découvrir tous les produits" button (py-16)

**About Page Sections**:
1. Page title + intro (py-12)
2. Company history text (max-w-prose, py-16)
3. "Nos engagements" - 4 certification badges in horizontal row (py-20)
4. Additional company stats/achievements if space allows

**Products Page**:
1. Page title (py-8)
2. Filter bar (sticky or fixed below navbar)
3. Product grid (comprehensive display of all 120+ products)
4. Pagination or infinite scroll if needed

**Contact Page**:
1. Two-column layout: Form left, Contact info right (stacks on mobile)
2. Map embed placeholder section (optional enhancement)
3. Social media links prominently displayed

## Quality Standards
- Generous whitespace for premium feel
- Clear visual hierarchy throughout
- Consistent spacing and alignment
- All French language content
- Professional, clean aesthetic befitting cosmetics industry
- Mobile optimization is critical