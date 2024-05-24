import DOMPurify from 'dompurify';

export default {
    methods: {
      sanitizeHTML(html) {
        return DOMPurify.sanitize(html);
      }
    }
  }