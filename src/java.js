const track = document.querySelector('.body--landing-page--logotypes');
const marquee = document.querySelector('.logotypes-wrapper');

let speed = 1;
function animate() {
  track.style.left = (track.offsetLeft - speed) + 'px';

  if (track.offsetLeft + track.offsetWidth < 0) {
    track.style.left = marquee.offsetWidth + 'px';
  }

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// Lấy tất cả header
const cardHeaders = document.querySelectorAll('.workingProcess--card--header');

cardHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Lấy phần .workingProcess--card-contain (cha của header)
    const container = header.parentElement;
    
    // Kiểm tra xem đang mở hay đóng
    const isActive = container.classList.contains('active');

    // (Tuỳ chọn) đóng tất cả các thẻ khác nếu muốn “chỉ một thẻ mở”:
    const allContainers = document.querySelectorAll('.workingProcess--card-contain');
    allContainers.forEach(item => {
      item.classList.remove('active');
      // Đổi icon về "+"
      const plusPath = item.querySelector('svg path');
      if (plusPath) {
        plusPath.setAttribute('d', 'M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z');
      }
    });

    // Nếu nó đang đóng -> mở
    if (!isActive) {
      container.classList.add('active');
      // Đổi icon sang “-” (ví dụ path ngắn gọn cho minus)
      const minusPath = header.querySelector('svg path');
      if (minusPath) {
        minusPath.setAttribute('d', 'M16 31.86V26.22H41.08V31.86H16Z');
      }
    } else {
      // Nếu nó đang mở -> đóng
      container.classList.remove('active');
      // Đổi icon về “+”
      const plusPath = header.querySelector('svg path');
      if (plusPath) {
        plusPath.setAttribute('d', 'M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z');
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const ul = document.querySelector(".testimonials--message ul");
  const slides = ul.querySelectorAll("li");
  const btnLeft = document.querySelector(".testimonials--nav-left");
  const btnRight = document.querySelector(".testimonials--nav-right");

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Mỗi li đã có width = 80% container + gap = 30px
  // Ta cần tính offset để "đưa" slide current ra giữa container.
  function updateSlide() {
    const containerWidth = document.querySelector(".testimonials--message").offsetWidth;
    
    // Lấy width thực tế 1 item (kể cả gap)
    // Cách đơn giản: offsetWidth của li + nửa gap (tuỳ ý, vì gap "chia" 2 bên)
    // Ở đây ta ước tính:
    const slideWidth = slides[0].offsetWidth; // 30 = gap

    // Tính toạ độ trung tâm container
    const containerCenter = containerWidth / 2;
    // Tính toạ độ trung tâm của 1 slide
    const slideCenter = slideWidth / 2;

    // Vị trí center của slide currentIndex
    const currentSlideCenter = currentIndex * slideWidth + slideCenter;

    // offset = trung tâm container - trung tâm slide
    const offset = containerCenter - currentSlideCenter;

    ul.style.transform = `translateX(${offset}px)`;

    // disable nút nếu đang ở đầu/cuối
    if (currentIndex === 0) {
      btnLeft.classList.add("disabled");
    } else {
      btnLeft.classList.remove("disabled");
    }
    if (currentIndex === totalSlides - 1) {
      btnRight.classList.add("disabled");
    } else {
      btnRight.classList.remove("disabled");
    }
    // cập nhật trạng thái active của ngôi sao
    document.querySelectorAll('.testimonials--nav-star').forEach(star => {
      star.classList.toggle('active', parseInt(star.dataset.index) === currentIndex);
    });
  }

  // Click left
  btnLeft.addEventListener("click", function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlide();
    }
  });

  // Click right
  btnRight.addEventListener("click", function() {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSlide();
    }
  });

  // Lăn chuột
  const container = document.querySelector(".testimonials--message");
  let isScrolling = false;

  container.addEventListener("wheel", function(e) {
    e.preventDefault();

    if (isScrolling) return;

    if (e.deltaY > 0 && currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSlide();
    } else if (e.deltaY < 0 && currentIndex > 0) {
      currentIndex--;
      updateSlide();
    }

    isScrolling = true;
    setTimeout(() => {
      isScrolling = false;
    }, 600); // delay để tránh lăn nhiều lần (tùy chỉnh)
  }, { passive: false });

  document.querySelectorAll('.testimonials--nav-star').forEach(star => {
    star.addEventListener('click', function() {
        currentIndex = parseInt(this.dataset.index);
        updateSlide();
    });
  });

  // Lần đầu
  updateSlide();
});