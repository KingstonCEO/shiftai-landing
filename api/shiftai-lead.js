// ShiftAI Lead Capture & Email Automation
// Vercel Serverless Function

const https = require('https');

// SMTP.com API Configuration
const SMTP_API_KEY = '2ce407a47537ebd60d4eb453d23a1691ff30aaca';
const SMTP_CHANNEL = 'TheKingstonAgency';
const FROM_EMAIL = 'gregsain@thekingstonagency.io';
const FROM_NAME = 'Greg Sain';

// ShiftAI Access Link
const SHIFTAI_LINK = 'https://suite.shiftai.club/w/92a8dc44';

function sendEmail(to, firstName) {
  return new Promise((resolve, reject) => {
    const emailData = JSON.stringify({
      channel: SMTP_CHANNEL,
      recipients: {
        to: [{ email: to, name: firstName }]
      },
      originator: {
        from: { email: FROM_EMAIL, name: FROM_NAME }
      },
      subject: `Welcome to ShiftAI - Your Exclusive Access, ${firstName}`,
      body: {
        parts: [{
          type: 'text/html',
          content: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background: #000;
      color: #fff;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .logo {
      font-size: 3rem;
      font-weight: 900;
      background: linear-gradient(135deg, #FF1493, #9370DB, #00BFFF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .content {
      background: rgba(255, 255, 255, 0.05);
      border: 2px solid #FF1493;
      border-radius: 20px;
      padding: 30px;
      margin-bottom: 20px;
    }
    h1 {
      color: #FF1493;
      font-size: 1.8rem;
      margin-bottom: 15px;
    }
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 15px;
      color: #ddd;
    }
    .cta-button {
      display: inline-block;
      padding: 18px 40px;
      font-size: 1.2rem;
      font-weight: 900;
      color: #fff;
      background: linear-gradient(135deg, #FF1493, #9370DB);
      border-radius: 10px;
      text-decoration: none;
      margin: 20px 0;
      text-transform: uppercase;
    }
    .features {
      margin: 20px 0;
    }
    .feature {
      margin: 10px 0;
      padding-left: 25px;
      position: relative;
    }
    .feature:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #FF1493;
      font-weight: bold;
    }
    .launch-info {
      text-align: center;
      background: rgba(0, 191, 255, 0.1);
      border: 2px solid #00BFFF;
      border-radius: 10px;
      padding: 20px;
      margin: 20px 0;
    }
    .launch-date {
      font-size: 1.8rem;
      color: #FF1493;
      font-weight: 900;
      margin-bottom: 5px;
    }
    .launch-location {
      font-size: 1.2rem;
      color: #00BFFF;
      font-weight: 700;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      color: #666;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">SHIFT<span style="color: #00BFFF;">AI</span></div>
    </div>
    
    <div class="content">
      <h1>🎉 Welcome to The Founders Club, ${firstName}!</h1>
      
      <p>You're now part of something extraordinary.</p>
      
      <p>ShiftAI is where <strong>democratization meets decentralization</strong> — a global opportunity that combines powerful community, innovative technology, premium lifestyle, and the freedom to build your legacy.</p>
      
      <div class="features">
        <div class="feature">Global opportunity at your fingertips</div>
        <div class="feature">Connect with extraordinary founders</div>
        <div class="feature">Access cutting-edge AI technology</div>
        <div class="feature">Premium lifestyle & travel experiences</div>
        <div class="feature">Build wealth and leave a legacy</div>
      </div>
      
      <div class="launch-info">
        <div class="launch-date">JANUARY 1ST, 2027</div>
        <div class="launch-location">Las Vegas, Nevada</div>
      </div>
      
      <p><strong>Click below to access your exclusive Founders Club portal:</strong></p>
      
      <center>
        <a href="${SHIFTAI_LINK}" class="cta-button">Access Your Portal</a>
      </center>
      
      <p>This is your invitation to be part of the future. Don't miss it.</p>
      
      <p>See you in Vegas,<br><strong>Greg Sain</strong><br>ShiftAI Founder</p>
    </div>
    
    <div class="footer">
      <p>ShiftAI - The Founders Club<br>AI That Pays You</p>
    </div>
  </div>
</body>
</html>
          `
        }]
      }
    });

    const options = {
      hostname: 'api.smtp.com',
      port: 443,
      path: '/v4/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': emailData.length,
        'Authorization': SMTP_API_KEY
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          resolve({ success: true, data: JSON.parse(data) });
        } else {
          reject(new Error(`SMTP.com error: ${res.statusCode} - ${data}`));
        }
      });
    });

    req.on('error', (error) => reject(error));
    req.write(emailData);
    req.end();
  });
}

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, email, timestamp } = req.body;

    if (!firstName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log lead (you can add database storage here later)
    console.log('New ShiftAI Lead:', { firstName, email, timestamp });

    // Send welcome email with ShiftAI link
    await sendEmail(email, firstName);

    return res.status(200).json({ 
      success: true, 
      message: 'Welcome email sent successfully' 
    });

  } catch (error) {
    console.error('Error processing lead:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
};
