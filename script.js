const axios = require('axios');
const uuid = require('uuid');
const Cookies = require('js-cookie');

// Replace with your pixel ID
const pixelId = '1254725762274850';

// Replace with your access token
const accessToken = 'EAAG...'; // Correctly formatted access token

fbq('track', 'ArticleId',{
  content_name:'Article A',
}

function getClickId() {
  const clickId = Cookies.get('fbc');
  if (!clickId) {
    const newClickId = uuid.v4();
    Cookies.set('fbc', newClickId);
    return newClickId;
  }
  return clickId;
}

function getBrowserId() {
  const browserId = Cookies.get('fbp');
  if (!browserId) {
    const newBrowserId = uuid.v4();
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
      'fbc': getClickId(),
      'fbp': getBrowserId(),
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
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  // Send event data to Meta's servers using CAPI
  axios.post(`https://graph.facebook.com/v13.0/${pixelId}/events`, eventData, { headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
});
