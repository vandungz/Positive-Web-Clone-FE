# Positivus - Static Landing Page

## Gioi thieu
Positivus la giao dien web mot trang cho agency marketing, duoc xay dung bang HTML, CSS va JavaScript thuan. Du an mo phong mot website gioi thieu dich vu voi bo cuc hien dai va co the deploy len bat ky static host nao.

## Diem noi bat
- Header co dinh voi logo, menu dieu huong va nut `Request a quote`.
- Hero section kem CTA "Book a consultation" va hinh minh hoa SVG.
- Marquee logo khach hang chay vo han (dieu khien trong `java.js`).
- Luoi dich vu cung CTA "Get your free proposal" va illustration rieng.
- Case Studies trinh bay ket qua thuc te dang the ngang.
- Accordion Our Working Process 6 buoc voi icon doi trang thai khi mo hoac dong.
- Team cards hien thi avatar SVG, chuc danh va lien ket LinkedIn.
- Testimonials slider ho tro nut dieu huong, cuon chuot va chi bao trang thai bang sao (xu ly trong `java.js`).
- Form Contact co tuy chon "Say Hi" hoac "Get a Quote", truong ten/email/message va anh minh hoa.
- Footer cung cap thong tin lien he, form dang ky nhan tin va social icons.

## Cong nghe & tai nguyen
- HTML5 (`src/index.html`).
- CSS thuan trong `assests/base.css` va `assests/styles.css`.
- Vanilla JavaScript (`src/java.js`) de xu ly marquee, accordion va carousel.
- Tai nguyen hinh anh SVG/PNG nam trong `assests/img/`.

## Cau truc du an
```text
Positivus_Web
|-- assests/
|   |-- base.css
|   |-- styles.css
|   |-- img/
|-- src/
    |-- index.html
    |-- java.js
```

## Cach chay
1. Clone hoac tai ma nguon ve may.
2. Mo `src/index.html` bang trinh duyet hoac phuc vu thu muc `src` qua mot static server (vi du `npx serve src`).
3. Dam bao duong dan tuong doi toi thu muc `assests/` giu nguyen khi deploy.

## Tuy chinh nhanh
- **Noi dung**: chinh sua trong `src/index.html` cho tung section (Services, Case Studies, Team, Testimonials, Contact...).
- **Phong cach**: cap nhat mau sac, typography, layout trong `assests/styles.css` va cac bien/reset o `assests/base.css`.
- **Tuong tac**: mo rong logic trong `src/java.js` (can chinh toc do marquee, them auto-play cho testimonials, thay doi cach tinh slider...).

## Dong gop
Day la du an front-end tinh. Ban co the fork va tao pull request; dung quen kiem tra tren nhieu kich thuoc man hinh va lint lai HTML/CSS truoc khi gui PR.
