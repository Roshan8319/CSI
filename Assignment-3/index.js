const http = require('http');
const fs = require('fs').promises; 
const path = require('path');

const filepath = path.join(__dirname, 'test.txt');
const port = 3000;

async function ensureFileExists() {
    try {
        await fs.access(filepath);
    } catch {
        try {
            await fs.writeFile(filepath, "Assignment-2 Data");
            console.log("File written successfully");
        } catch (err) {
            console.error("Error writing file:", err);
        }
    }
}

const server = http.createServer(async (req, res) => {
    try {
        if (req.url === '/read' && req.method === 'GET') {
            const data = await fs.readFile(filepath, 'utf-8');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        } else if (req.url === '/delete' && req.method === 'DELETE') {
            try {
                await fs.unlink(filepath);
                res.writeHead(200);
                res.end("File deleted");
                console.log("File deleted");
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error deleting file");
                console.error("Error deleting file:", err);
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Route not found");
        }
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end("Internal server error");
        console.error("Server error:", err);
    }
});

ensureFileExists().then(() => {
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
