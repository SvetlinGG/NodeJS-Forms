const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.url === '/'  && req.method === 'GET'){
        res.writeHead(200, {
            'content-type': 'text/html',
        })


        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Work with Forms</title>
            </head>
            <body>
                <form action="/" method="POST" enctype="multipart/form-data">
                    <div>
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>

                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <div>
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </body>
            </html>
            `)
        res.end();
    }else if(req.url === '/'  && req.method === 'POST'){

        let body = '';

        req.on('data', chunk => {
            console.log(chunk);
            body += chunk;
            
        });

        req.on('close', () => {
            
            //const data = querystring.parse(body);

            console.log(data);
            res.end(); 
        });
      
    };

    
});

server.listen(2000);
console.log('Server is listening on http://localhost:2000...');
