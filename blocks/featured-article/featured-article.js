import { isElementInViewport } from '../../scripts/aem.js';

/**
 * handler for featured-article
 * @param {Element} block
 */
export default function decorate(block) {
  const img = block.querySelector('img');
  if (!img) {
    return;
  }

  if (isElementInViewport(img)) {
    img.loading = 'eager';
  }
}
