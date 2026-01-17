const { google } = require('googleapis');
const fetch = require('node-fetch');

// 1. Setup Auth
const credentials = JSON.parse(process.env.INDEXING_SERVICE_ACCOUNT);
const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  null
);

async function indexMatches() {
  try {
    // 2. Fetch your latest matches
    const response = await fetch('https://yosintv-api.pages.dev/api/highlights.json');
    const matches = await response.json();

    // 3. Get the 5 most recent matches to avoid hitting API limits
    const latestMatches = matches.slice(0, 5);

    await auth.authorize();

    for (const match of latestMatches) {
      const url = `https://www.cricfoot.net/highlights.html?id=${match.id}`;
      
      const res = await google.indexing('v3').urlNotifications.publish({
        auth,
        requestBody: {
          url: url,
          type: 'URL_UPDATED'
        }
      });
      console.log(`Indexed: ${url} - Status: ${res.statusText}`);
    }
  } catch (error) {
    console.error('Error indexing:', error);
  }
}

indexMatches();
