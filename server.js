import http from 'http';

const PORT = 3000;

const html = '<div style="background-color:blue; width: 100%; height: 100dvh; display:flex; justify-content:center; align-items:center;"><h1 style="font-weight: bold; font-size:64px; color: white;">Node.js Crash Course</h1></div>';

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;

    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 500, message: 'Server Error!' }));
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});