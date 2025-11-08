# Positivus - Static Landing Page

## Giới thiệu
Positivus là giao diện web một trang cho agency marketing, được xây dựng bằng HTML, CSS và JavaScript thuần. Dự án mô phỏng một website giới thiệu dịch vụ với bố cục hiện đại và có thể deploy lên bất kỳ static host nào.

## Diem noi bat
- Header cố định với logo, menu điều hướng và nút Request a quote.
- Hero section kèm CTA "Book a consultation" và hình minh họa SVG.
- Marquee logo khách hàng chạy vô hạn (điều khiển trong `java.js`).
- Lưới dịch vụ cùng CTA "Get your free proposal" và illustration riêng.
- Case Studies trình bày kết quả thực tế dạng thẻ ngang.
- Accordion Our Working Process 6 bước với icon đổi trạng thái khi mở hoặc đóng.
- Team cards hiển thị avatar SVG, chức danh và liên kết LinkedIn.
- Testimonials slider hỗ trợ nút điều hướng, cuộn chuột và chỉ báo trạng thái bằng sao (xử lý trong `java.js`).
- Form Contact có tùy chọn "Say Hi" hoặc "Get a Quote", trường tên/email/message và ảnh minh họa.
- Footer cung cấp thông tin liên hệ, form đăng ký nhận tin và social icons.

## Công nghệ & tài nguyên
- HTML5 (`src/index.html`).
- CSS thuần trong `assests/base.css` và `assests/styles.css`.
- Vanilla JavaScript (`src/java.js`) để xử lý marquee, accordion và carousel.
- Tài nguyên hình ảnh SVG/PNG nằm trong `assests/img/`.

## Cấu trúc dự án
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

## Tùy chỉnh nhanh
- **Nội dung**: chỉnh sửa trong `src/index.html` cho từng section (Services, Case Studies, Team, Testimonials, Contact...).
- **Phong cách**: cập nhật màu sắc, typography, layout trong `assests/styles.css` và các biến/reset ở `assests/base.css`.
- **Tương tác**: mở rộng logic trong `src/java.js` (canh chỉnh tốc độ marquee, thêm auto-play cho testimonials, thay đổi cách tính slider...).
