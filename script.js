const axios = require('axios');

// Replace with your pixel ID
const pixelId = '1254725762274850';

// Replace with your access token
const accessToken = 'EAAMyE4ynYOIBO2fUML9YgUICMGr2u8sZByAg6RlqK0R6blEshtv9aZCgWcFCNFcaRXkm0ddTDtW9VFNhfWTiAMM3ZA2ucZCuDXAqouHgdCmWAk13o18ZBpU6Lce79DWEdQUCZBfa2ul6jLNpbQR8ALMA6XiirsBt6piV5ZAQ95gB2JMfrCo04EmTqwkqZAmO9AkySCAvm9ks9riNbZAZBen58ZD';

// Event data
const eventData = {
  'event_name': 'Purchase',
  'event_time': Date.now(),
  'user_data': {
    'client_user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    'client_ip_address': '192.168.1.1',
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
axios.post(`https://graph.facebook.com/v13.0/${1254725762274850}/events`, eventData, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
