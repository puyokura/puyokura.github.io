document.addEventListener('DOMContentLoaded', () => {
    // ナビゲーションメニューのトグル処理
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }
  
    // スムーススクロールの設定
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: 'smooth'
            });
            navMenu.classList.remove('active');
          }
        }
      });
    });
  
    // コンタクトフォーム送信時の処理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('お問い合わせありがとうございます。\n後ほどご連絡いたします。');
        this.reset();
      });
    }
  });