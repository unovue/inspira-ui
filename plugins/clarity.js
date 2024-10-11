export default defineNuxtPlugin(() => {
  console.log(process.env.NUXT_CLARITY_ID)
    if (process.env.NUXT_CLARITY_ID) {
      (function(c, l, a, r, i, t, y) {
        c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = `https://www.clarity.ms/tag/${process.env.NUXT_CLARITY_ID}`;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script");
    }
})
  