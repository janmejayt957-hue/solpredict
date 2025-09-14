<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Solar Sage Predict - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f9fafb;
      margin: 0;
      padding: 20px;
      color: #222;
      line-height: 1.6;
    }
    .container {
      max-width: 900px;
      margin: auto;
      background: #fff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    h1 {
      text-align: center;
      color: #f59e0b;
      margin-bottom: 10px;
    }
    h2 {
      margin-top: 30px;
      color: #2563eb;
    }
    code, pre {
      background: #f3f4f6;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 14px;
      display: block;
      overflow-x: auto;
    }
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    .screenshot {
      text-align: center;
      margin: 20px 0;
    }
    .screenshot img {
      max-width: 100%;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .footer {
      text-align: center;
      margin-top: 40px;
      font-size: 14px;
      color: gray;
    }
    .badge {
      display: inline-block;
      background: #e5e7eb;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 13px;
      margin: 4px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>☀️ Solar Sage Predict</h1>
    <div style="text-align:center;">
      <span class="badge">⚡ Vite + React</span>
      <span class="badge">🟦 TypeScript</span>
      <span class="badge">✅ Active</span>
    </div>

    <p><b>Solar Sage Predict</b> is an AI/ML-powered web app that predicts solar power generation 
    based on location, weather, and solar panel configurations. Built with 
    <b>Vite + React + TypeScript</b> for speed, modularity, and scalability.</p>

    <h2>🚀 Features</h2>
    <ul>
      <li>⚡ Real-time prediction interface</li>
      <li>🌍 Location & weather-aware analysis</li>
      <li>📊 Beautiful charts & data visualization</li>
      <li>🎨 Clean modern UI (Tailwind + shadcn/ui)</li>
    </ul>

    <h2>📂 Project Structure</h2>
    <pre>
solar-sage-predict-main/
│── public/         # Static assets
│── src/
│   ├── components/ # Reusable UI components
│   ├── pages/      # Pages (Predict, Home, etc.)
│   ├── assets/     # Images, icons
│   └── main.tsx    # App entry point
│── package.json
│── vite.config.ts
│── README.md
    </pre>

    <h2>🛠️ Installation & Setup</h2>
    <p><b>1️⃣ Prerequisites:</b> Node.js v18+ and npm</p>
    <pre>
# unzip or clone
unzip solar-sage-predict-main.zip
cd solar-sage-predict-main

# install dependencies
npm ci   # or npm install
    </pre>

    <p><b>2️⃣ Run Development Server:</b></p>
    <pre>
npm run dev
# App available at http://localhost:5173
    </pre>

    <p><b>3️⃣ Build for Production:</b></p>
    <pre>
npm run build
npm run preview
    </pre>

    <h2>🎨 Example Screenshot</h2>
    <div class="screenshot">
      <img src="https://via.placeholder.com/800x400.png?text=Solar+Sage+Predict+UI" alt="App Screenshot">
    </div>

    <h2>🤝 Contributing</h2>
    <ul>
      <li>Fork the repo 🍴</li>
      <li>Create a new branch (<code>feature/your-feature</code>)</li>
      <li>Commit changes (<code>git commit -m "Add feature"</code>)</li>
      <li>Push & Create Pull Request 🚀</li>
    </ul>

    <h2>📜 License</h2>
    <p>This project is licensed under the <b>MIT License</b>.</p>

    <div class="footer">
      Made with ❤️ using React, Vite, and TypeScript.
    </div>
  </div>
</body>
</html>
