(function () {
  window._pa = window._pa || {};
  // _pa.orderId = "myOrderId"; // OPTIONAL: attach unique conversion identifier to conversions
  // _pa.revenue = "19.99"; // OPTIONAL: attach dynamic purchase values to conversions
  // _pa.productId = "myProductId"; // OPTIONAL: Include product ID for use with dynamic ads

  const pa = document.createElement('script'); pa.type = 'text/javascript'; pa.async = true;
  pa.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//tag.perfectaudience.com/serve/5c58a08c02c410fb340000ff.js';
  const s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pa, s);
})();
