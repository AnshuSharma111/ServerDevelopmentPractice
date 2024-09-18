const http = require('http');
const { readFileSync, read, readFile } = require('fs');

const homePage = readFileSync("./structure/index.html");
const homePageCss = readFileSync("./styling/styles.css");
const aboutPage = readFileSync("./structure/about.html")

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url)
    // load the entire home page
    if (url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write(homePage);
        res.end();
    }
    // load home page css
    else if(url == '/styling/styles.css'){
        res.writeHead(200, {'content-type' : 'text/css'});
        res.write(homePageCss);
        res.end();
    }
    // load about page
    else if (url === '/about'){
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write(aboutPage);
        res.end();
    }
    // load about css
    else if(url == '/styling/styles.css'){
        res.writeHead(200, {'content-type' : 'text/css'});
        res.write(homePageCss);
        res.end();
    }
    else{
        res.writeHead(404, {'content-type' : 'text/html'});
        res.write('<h1>Not Found</h1>');
        res.end();
    }
});

server.listen(5000);

// we can see that the entire process is tedious. having to tend to every request manually. This can be made better using EXPRESS