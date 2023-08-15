// Function genereates code verifier
function generateRandomString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

// Function hashes code verifier
async function generateCodeChallenge(codeVerifier) {
    function base64encode(string) {
      return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }
  
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
  
    return base64encode(digest);
}

// Function returns auth URI and code verifier
async function getAuthUrl(clientId, redirectUri){
    const scopes = ['user-read-private', 'user-read-email'];    // Add required scopes

    // If verifier is not in local storage - put it there
    if (!localStorage.getItem('code_verifier')){
        const codeVerifier = generateRandomString(128);
        localStorage.setItem('code_verifier', codeVerifier);
    }

    // Generate challenge
    const codeChallenge = await generateCodeChallenge(localStorage.getItem('code_verifier'));  

    const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&code_challenge_method=S256&code_challenge=${codeChallenge}&scope=${scopes.join(' ')}`;
    
    return authorizationUrl;
}

export {getAuthUrl};