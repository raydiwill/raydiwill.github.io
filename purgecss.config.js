module.exports = {
  content: [
    './index.html',
    './about.html',
    './experience.html',
    './gallery.html',
    './elements.html',
    './assets/js/**/*.js'
  ],
  css: ['./assets/css/main.css'],
  output: './assets/css/',
  
  // Safelist classes that are added dynamically or by JavaScript
  safelist: {
    standard: [
      'is-preload',
      'is-navPanel-visible',
      'fade-in',
      'hidden',
      'active',
      'visible',
      'scrolly',
      'fixed',
      // Gallery classes
      'gallery-grid',
      'grid-item',
      'grid-item-wide',
      'grid-item-tall',
      'grid-item-large',
      'gallery-image',
      'lightbox-modal',
      'lightbox-content',
      'lightbox-close',
      'lightbox-nav',
      'lightbox-prev',
      'lightbox-next',
      /^fa-/,  // FontAwesome icons
      /^icon-/, // Custom icons
    ],
    deep: [
      /^fa-/,
      /^icon/,
      /actions/,
      /button/,
      /gallery/,
      /grid-item/,
      /lightbox/,
    ],
    greedy: [
      /^is-/,
      /scrolly/,
      /scrollex/,
      /gallery/,
      /lightbox/,
    ]
  },
  
  // Keep keyframes and font-face
  keyframes: true,
  fontFace: true,
  
  // Don't remove variables
  variables: true,
  
  // Rejected selectors (log for debugging)
  rejected: false
};
