const axios = require('axios');

// Replace with your pixel ID
const pixelId = '1254725762274850';

// Replace with your access token
const accessToken = 'EAAMyE4ynYOIBO2fUML9YgUICMGr2u8sZByAg6RlqK0R6blEshtv9aZCgWcFCNFcaRXkm0ddTDtW9VFNhfWTiAMM3ZA2ucZCuDXAqouHgdCmWAk13o18ZBpU6Lce79DWEdQUCZBfa2ul6jLNpbQR8ALMA6XiirsBt6piV5ZAQ95gB2JMfrCo04EmTqwkqZAmO9AkySCAvm9ks9riNbZAZBen58ZD';

function getClickId() {
  const clickId = Cookies.get('fbc');
  if (!clickId) {
    const newClickId = uuidv4();
    Cookies.set('fbc', newClickId);
    return newClickId;
  }
  return clickId;
}

function getBrowserId() {
  const browserId = Cookies.get('fbp');
  if (!browserId) {
    const newBrowserId = uuidv4();
    Cookies.set('fbp', newBrowserId);
    return newBrowserId;
  }
  return browserId;
}
// Event data
const pageViewEvent = {
  'event_name': 'PageView',
  'event_time': Date.now(),
  'user_data': {
    'client_user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    'client_ip_address': '192.168.1.1',
  },
};
const addToCartButton = document.getElementById('add-to-cart-button');
addToCartButton.addEventListener('click', () => {
  const addToCartEvent = {
    'event_name': 'AddToCart',
    'event_time': Date.now(),
    'user_data': {
      'client_user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      'client_ip_address': '192.168.1.1',
    },
    'custom_data': {
      'currency': 'USD',
      'value': 5.99,
    },
  };
const eventData = {
  'event_name': 'Purchase',
  'event_time': Date.now(),
  'user_data': {
    'client_user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    'client_ip_address': '192.168.1.1',
    'fbc': getClickId(),
    'fbp': getBrowserId(),
  },
  'custom_data': {
    'currency': 'USD',
    'value': 10.99,
  },
};

// Set up API request headers
const headers = {
  'Authorization': `Bearer ${EAACEdEose0cBO8OtPPdgeRkmFsI4h3VgrSahKni0EnsPwZBWJJ6w2qHjhUpzRZAXP2RkNAQRpUG4C657JpmYLJGIswfpM5vE4smVK91ZAnDHLiKhx8QDrouqfCZCXFQM63PWL3fXy3gelUpoiTz8pca0Wu40Cw5dNnzSHq7CNpZAJckZBgERP5tzxduwZCbzuQIT6EC5scaCVFYn3Tm928rWZC9ZCEl1miLaDG65x9ThkM3XmtnZB0X1Vm8uZBDbGruYcQLU2ZAH4y9k8vJJ}`,
  'Content-Type': 'application/json',
};

// Send event data to Meta's servers using CAPI
axios.post(`https://graph.facebook.com/v13.0/${1254725762274850}/events`, eventData, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
