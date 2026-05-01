<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>aMazeThing</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .container {
            text-align: center;
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        h1 {
            color: #333;
            margin-bottom: 30px;
        }
        .links {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }
        a {
            display: inline-block;
            padding: 12px 30px;
            margin: 10px;
            text-decoration: none;
            color: white;
            background-color: #667eea;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }
        a:hover {
            background-color: #764ba2;
        }
        a.code {
            background-color: #764ba2;
        }
        a.code:hover {
            background-color: #667eea;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to aMazeThing</h1>
        <div class="links">
            <a href="README.md">📖 Read Me</a>
            <a href="index.js" class="code">💻 Code File</a>
        </div>
    </div>
</body>
</html>