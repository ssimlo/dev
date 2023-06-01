function initializeOAuth() {
  const oauth2Client = new google.auth.OAuth2(
    '715873543926-1qv5vecvujcda96rtdaluok68fkd1u1k.apps.googleusercontent.com',
    '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',
    'https://stayontrackvp.wixsite.com'
  );

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/gmail.send']
  });

  console.log('Authorization URL:', authUrl);
  console.log(authUrl); // Add this line to check the value of authUrl
}

function loadGoogleAPI() {
  if (typeof google === 'undefined') {
    // Wait for Google API script to load
    setTimeout(loadGoogleAPI, 100);
  } else {
    initializeOAuth();
  }
}

loadGoogleAPI();
