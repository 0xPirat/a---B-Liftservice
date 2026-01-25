const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const revealItems = document.querySelectorAll('[data-reveal]');

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get('name');
    const email = data.get('email');
    const subject = data.get('subject');
    const message = data.get('message');

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:info@liftservice-ab.de?subject=${mailSubject}&body=${mailBody}`;
  });
}

const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-zoomed');
  });
});

const scrollElevator = document.querySelector('.scroll-elevator');
if (scrollElevator) {
  let idleTimer;
  let isDragging = false;
  let dragStartY = 0;
  let dragStartScroll = 0;

  const updateElevatorPosition = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
    const minTop = 120;
    const maxTop = Math.max(minTop + 80, window.innerHeight - 200);
    const top = minTop + (maxTop - minTop) * progress;
    scrollElevator.style.transform = `translateY(${top}px)`;
  };

  const setIdle = () => {
    scrollElevator.classList.add('is-idle');
  };

  const resetIdle = () => {
    scrollElevator.classList.remove('is-idle');
    window.clearTimeout(idleTimer);
    idleTimer = window.setTimeout(setIdle, 1500);
  };

  const handleScroll = () => {
    updateElevatorPosition();
    resetIdle();
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', updateElevatorPosition);
  updateElevatorPosition();
  resetIdle();

  const startDrag = (event) => {
    isDragging = true;
    dragStartY = event.clientY;
    dragStartScroll = window.scrollY;
    scrollElevator.classList.add('is-grabbing');
    scrollElevator.setPointerCapture(event.pointerId);
    event.preventDefault();
  };

  const onDrag = (event) => {
    if (!isDragging) return;
    const delta = event.clientY - dragStartY;
    const speed = 7;
    window.scrollTo(0, dragStartScroll + delta * speed);
    event.preventDefault();
  };

  const endDrag = (event) => {
    if (!isDragging) return;
    isDragging = false;
    scrollElevator.classList.remove('is-grabbing');
    scrollElevator.releasePointerCapture(event.pointerId);
    event.preventDefault();
  };

  scrollElevator.addEventListener('pointerdown', startDrag);
  scrollElevator.addEventListener('pointermove', onDrag);
  scrollElevator.addEventListener('pointerup', endDrag);
  scrollElevator.addEventListener('pointercancel', endDrag);
}

const elevatorFrameImg = document.querySelector('.elevator-frame-img');
if (elevatorFrameImg) {
  const framePaths = [
    "aufzugbilder%20/frame_000_delay-0.042s.jpg",
    "aufzugbilder%20/frame_001_delay-0.041s.jpg",
    "aufzugbilder%20/frame_002_delay-0.042s.jpg",
    "aufzugbilder%20/frame_003_delay-0.042s.jpg",
    "aufzugbilder%20/frame_004_delay-0.041s.jpg",
    "aufzugbilder%20/frame_005_delay-0.042s.jpg",
    "aufzugbilder%20/frame_006_delay-0.042s.jpg",
    "aufzugbilder%20/frame_007_delay-0.041s.jpg",
    "aufzugbilder%20/frame_008_delay-0.042s.jpg",
    "aufzugbilder%20/frame_009_delay-0.042s.jpg",
    "aufzugbilder%20/frame_010_delay-0.041s.jpg",
    "aufzugbilder%20/frame_011_delay-0.042s.jpg",
    "aufzugbilder%20/frame_012_delay-0.042s.jpg",
    "aufzugbilder%20/frame_013_delay-0.041s.jpg",
    "aufzugbilder%20/frame_014_delay-0.042s.jpg",
    "aufzugbilder%20/frame_015_delay-0.042s.jpg",
    "aufzugbilder%20/frame_016_delay-0.041s.jpg",
    "aufzugbilder%20/frame_017_delay-0.042s.jpg",
    "aufzugbilder%20/frame_018_delay-0.042s.jpg",
    "aufzugbilder%20/frame_019_delay-0.041s.jpg",
    "aufzugbilder%20/frame_020_delay-0.042s.jpg",
    "aufzugbilder%20/frame_021_delay-0.042s.jpg",
    "aufzugbilder%20/frame_022_delay-0.041s.jpg",
    "aufzugbilder%20/frame_023_delay-0.042s.jpg",
    "aufzugbilder%20/frame_024_delay-0.042s.jpg",
    "aufzugbilder%20/frame_025_delay-0.041s.jpg",
    "aufzugbilder%20/frame_026_delay-0.042s.jpg",
    "aufzugbilder%20/frame_027_delay-0.042s.jpg",
    "aufzugbilder%20/frame_028_delay-0.041s.jpg",
    "aufzugbilder%20/frame_029_delay-0.042s.jpg",
    "aufzugbilder%20/frame_030_delay-0.042s.jpg",
    "aufzugbilder%20/frame_031_delay-0.041s.jpg",
    "aufzugbilder%20/frame_032_delay-0.042s.jpg",
    "aufzugbilder%20/frame_033_delay-0.042s.jpg",
    "aufzugbilder%20/frame_034_delay-0.041s.jpg",
    "aufzugbilder%20/frame_035_delay-0.042s.jpg",
    "aufzugbilder%20/frame_036_delay-0.042s.jpg",
    "aufzugbilder%20/frame_037_delay-0.041s.jpg",
    "aufzugbilder%20/frame_038_delay-0.042s.jpg",
    "aufzugbilder%20/frame_039_delay-0.042s.jpg",
    "aufzugbilder%20/frame_040_delay-0.041s.jpg",
    "aufzugbilder%20/frame_041_delay-0.042s.jpg",
    "aufzugbilder%20/frame_042_delay-0.042s.jpg",
    "aufzugbilder%20/frame_043_delay-0.041s.jpg",
    "aufzugbilder%20/frame_044_delay-0.042s.jpg",
    "aufzugbilder%20/frame_045_delay-0.042s.jpg",
    "aufzugbilder%20/frame_046_delay-0.041s.jpg",
    "aufzugbilder%20/frame_047_delay-0.042s.jpg",
    "aufzugbilder%20/frame_048_delay-0.042s.jpg",
    "aufzugbilder%20/frame_049_delay-0.041s.jpg",
    "aufzugbilder%20/frame_050_delay-0.042s.jpg",
    "aufzugbilder%20/frame_051_delay-0.042s.jpg",
    "aufzugbilder%20/frame_052_delay-0.041s.jpg",
    "aufzugbilder%20/frame_053_delay-0.042s.jpg",
    "aufzugbilder%20/frame_054_delay-0.042s.jpg",
    "aufzugbilder%20/frame_055_delay-0.041s.jpg",
    "aufzugbilder%20/frame_056_delay-0.042s.jpg",
    "aufzugbilder%20/frame_057_delay-0.042s.jpg",
    "aufzugbilder%20/frame_058_delay-0.041s.jpg",
    "aufzugbilder%20/frame_059_delay-0.042s.jpg",
    "aufzugbilder%20/frame_060_delay-0.042s.jpg",
    "aufzugbilder%20/frame_061_delay-0.041s.jpg",
    "aufzugbilder%20/frame_062_delay-0.042s.jpg",
    "aufzugbilder%20/frame_063_delay-0.042s.jpg",
    "aufzugbilder%20/frame_064_delay-0.041s.jpg",
    "aufzugbilder%20/frame_065_delay-0.042s.jpg",
    "aufzugbilder%20/frame_066_delay-0.042s.jpg",
    "aufzugbilder%20/frame_067_delay-0.041s.jpg",
    "aufzugbilder%20/frame_068_delay-0.042s.jpg",
    "aufzugbilder%20/frame_069_delay-0.042s.jpg",
    "aufzugbilder%20/frame_070_delay-0.041s.jpg",
    "aufzugbilder%20/frame_071_delay-0.042s.jpg",
    "aufzugbilder%20/frame_072_delay-0.042s.jpg",
    "aufzugbilder%20/frame_073_delay-0.041s.jpg",
    "aufzugbilder%20/frame_074_delay-0.042s.jpg",
    "aufzugbilder%20/frame_075_delay-0.042s.jpg",
    "aufzugbilder%20/frame_076_delay-0.041s.jpg",
    "aufzugbilder%20/frame_077_delay-0.042s.jpg",
    "aufzugbilder%20/frame_078_delay-0.042s.jpg",
    "aufzugbilder%20/frame_079_delay-0.041s.jpg",
    "aufzugbilder%20/frame_080_delay-0.042s.jpg",
    "aufzugbilder%20/frame_081_delay-0.042s.jpg",
    "aufzugbilder%20/frame_082_delay-0.041s.jpg",
    "aufzugbilder%20/frame_083_delay-0.042s.jpg",
    "aufzugbilder%20/frame_084_delay-0.042s.jpg",
    "aufzugbilder%20/frame_085_delay-0.041s.jpg",
    "aufzugbilder%20/frame_086_delay-0.042s.jpg",
    "aufzugbilder%20/frame_087_delay-0.042s.jpg",
    "aufzugbilder%20/frame_088_delay-0.041s.jpg",
    "aufzugbilder%20/frame_089_delay-0.042s.jpg",
    "aufzugbilder%20/frame_090_delay-0.042s.jpg",
    "aufzugbilder%20/frame_091_delay-0.041s.jpg",
    "aufzugbilder%20/frame_092_delay-0.042s.jpg",
    "aufzugbilder%20/frame_093_delay-0.042s.jpg",
    "aufzugbilder%20/frame_094_delay-0.041s.jpg",
    "aufzugbilder%20/frame_095_delay-0.042s.jpg",
    "aufzugbilder%20/frame_096_delay-0.042s.jpg",
    "aufzugbilder%20/frame_097_delay-0.041s.jpg",
    "aufzugbilder%20/frame_098_delay-0.042s.jpg",
    "aufzugbilder%20/frame_099_delay-0.042s.jpg",
    "aufzugbilder%20/frame_100_delay-0.041s.jpg",
    "aufzugbilder%20/frame_101_delay-0.042s.jpg",
    "aufzugbilder%20/frame_102_delay-0.042s.jpg",
    "aufzugbilder%20/frame_103_delay-0.041s.jpg",
    "aufzugbilder%20/frame_104_delay-0.042s.jpg",
    "aufzugbilder%20/frame_105_delay-0.042s.jpg",
    "aufzugbilder%20/frame_106_delay-0.041s.jpg",
    "aufzugbilder%20/frame_107_delay-0.042s.jpg",
    "aufzugbilder%20/frame_108_delay-0.042s.jpg",
    "aufzugbilder%20/frame_109_delay-0.041s.jpg",
    "aufzugbilder%20/frame_110_delay-0.042s.jpg",
    "aufzugbilder%20/frame_111_delay-0.042s.jpg",
    "aufzugbilder%20/frame_112_delay-0.041s.jpg",
    "aufzugbilder%20/frame_113_delay-0.042s.jpg",
    "aufzugbilder%20/frame_114_delay-0.042s.jpg",
    "aufzugbilder%20/frame_115_delay-0.041s.jpg",
    "aufzugbilder%20/frame_116_delay-0.042s.jpg",
    "aufzugbilder%20/frame_117_delay-0.042s.jpg",
    "aufzugbilder%20/frame_118_delay-0.041s.jpg",
    "aufzugbilder%20/frame_119_delay-0.042s.jpg",
    "aufzugbilder%20/frame_120_delay-0.042s.jpg",
    "aufzugbilder%20/frame_121_delay-0.041s.jpg",
    "aufzugbilder%20/frame_122_delay-0.042s.jpg",
    "aufzugbilder%20/frame_123_delay-0.042s.jpg",
    "aufzugbilder%20/frame_124_delay-0.041s.jpg",
    "aufzugbilder%20/frame_125_delay-0.042s.jpg",
    "aufzugbilder%20/frame_126_delay-0.042s.jpg",
    "aufzugbilder%20/frame_127_delay-0.041s.jpg",
    "aufzugbilder%20/frame_128_delay-0.042s.jpg",
    "aufzugbilder%20/frame_129_delay-0.042s.jpg",
    "aufzugbilder%20/frame_130_delay-0.041s.jpg",
    "aufzugbilder%20/frame_131_delay-0.042s.jpg",
    "aufzugbilder%20/frame_132_delay-0.042s.jpg",
    "aufzugbilder%20/frame_133_delay-0.041s.jpg",
    "aufzugbilder%20/frame_134_delay-0.042s.jpg",
    "aufzugbilder%20/frame_135_delay-0.042s.jpg",
    "aufzugbilder%20/frame_136_delay-0.041s.jpg",
    "aufzugbilder%20/frame_137_delay-0.042s.jpg",
    "aufzugbilder%20/frame_138_delay-0.042s.jpg",
    "aufzugbilder%20/frame_139_delay-0.041s.jpg",
    "aufzugbilder%20/frame_140_delay-0.042s.jpg",
    "aufzugbilder%20/frame_141_delay-0.042s.jpg",
    "aufzugbilder%20/frame_142_delay-0.041s.jpg",
    "aufzugbilder%20/frame_143_delay-0.042s.jpg",
    "aufzugbilder%20/frame_144_delay-0.042s.jpg",
    "aufzugbilder%20/frame_145_delay-0.041s.jpg",
    "aufzugbilder%20/frame_146_delay-0.042s.jpg",
    "aufzugbilder%20/frame_147_delay-0.042s.jpg",
    "aufzugbilder%20/frame_148_delay-0.041s.jpg",
    "aufzugbilder%20/frame_149_delay-0.042s.jpg",
    "aufzugbilder%20/frame_150_delay-0.042s.jpg",
    "aufzugbilder%20/frame_151_delay-0.041s.jpg",
    "aufzugbilder%20/frame_152_delay-0.042s.jpg",
    "aufzugbilder%20/frame_153_delay-0.042s.jpg",
    "aufzugbilder%20/frame_154_delay-0.041s.jpg",
    "aufzugbilder%20/frame_155_delay-0.042s.jpg",
    "aufzugbilder%20/frame_156_delay-0.042s.jpg",
    "aufzugbilder%20/frame_157_delay-0.041s.jpg",
    "aufzugbilder%20/frame_158_delay-0.042s.jpg",
    "aufzugbilder%20/frame_159_delay-0.042s.jpg",
    "aufzugbilder%20/frame_160_delay-0.041s.jpg",
    "aufzugbilder%20/frame_161_delay-0.042s.jpg",
    "aufzugbilder%20/frame_162_delay-0.042s.jpg",
    "aufzugbilder%20/frame_163_delay-0.041s.jpg",
    "aufzugbilder%20/frame_164_delay-0.042s.jpg",
    "aufzugbilder%20/frame_165_delay-0.042s.jpg",
    "aufzugbilder%20/frame_166_delay-0.041s.jpg",
    "aufzugbilder%20/frame_167_delay-0.042s.jpg",
    "aufzugbilder%20/frame_168_delay-0.042s.jpg",
    "aufzugbilder%20/frame_169_delay-0.041s.jpg",
    "aufzugbilder%20/frame_170_delay-0.042s.jpg",
    "aufzugbilder%20/frame_171_delay-0.042s.jpg",
    "aufzugbilder%20/frame_172_delay-0.041s.jpg",
    "aufzugbilder%20/frame_173_delay-0.042s.jpg",
    "aufzugbilder%20/frame_174_delay-0.042s.jpg",
    "aufzugbilder%20/frame_175_delay-0.041s.jpg",
    "aufzugbilder%20/frame_176_delay-0.042s.jpg",
    "aufzugbilder%20/frame_177_delay-0.042s.jpg",
    "aufzugbilder%20/frame_178_delay-0.041s.jpg",
    "aufzugbilder%20/frame_179_delay-0.042s.jpg",
    "aufzugbilder%20/frame_180_delay-0.042s.jpg",
    "aufzugbilder%20/frame_181_delay-0.041s.jpg",
    "aufzugbilder%20/frame_182_delay-0.042s.jpg",
    "aufzugbilder%20/frame_183_delay-0.042s.jpg",
    "aufzugbilder%20/frame_184_delay-0.041s.jpg",
    "aufzugbilder%20/frame_185_delay-0.042s.jpg",
    "aufzugbilder%20/frame_186_delay-0.042s.jpg",
    "aufzugbilder%20/frame_187_delay-0.041s.jpg",
    "aufzugbilder%20/frame_188_delay-0.042s.jpg",
    "aufzugbilder%20/frame_189_delay-0.042s.jpg",
    "aufzugbilder%20/frame_190_delay-0.041s.jpg",
    "aufzugbilder%20/frame_191_delay-0.042s.jpg"
  ];

  let lastIndex = -1;
  const setFrameForScroll = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
    const index = Math.max(0, Math.min(framePaths.length - 1, Math.round(progress * (framePaths.length - 1))));
    if (index === lastIndex) return;
    lastIndex = index;
    elevatorFrameImg.src = framePaths[index];
  };

  let preloadIndex = 0;
  const preloadBatch = () => {
    const batchSize = 8;
    for (let i = 0; i < batchSize && preloadIndex < framePaths.length; i += 1) {
      const img = new Image();
      img.src = framePaths[preloadIndex];
      preloadIndex += 1;
    }
    if (preloadIndex < framePaths.length) {
      window.setTimeout(preloadBatch, 120);
    }
  };
  preloadBatch();

  let scrollTicking = false;
  const requestFrameUpdate = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(() => {
      setFrameForScroll();
      scrollTicking = false;
    });
  };

  setFrameForScroll();
  window.addEventListener('scroll', requestFrameUpdate, { passive: true });
  window.addEventListener('resize', requestFrameUpdate);
}
