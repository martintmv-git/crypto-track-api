
#### crypto-track-api - in development
##### BETA
**Cryptotrack-API** is a web scraper that collects cryptocurrency news articles from various sources and stores them in an array called "articles". It uses the axios library to send HTTP requests to the specified sources, the cheerio library to parse the HTML responses, and the express library to set up a server. </br> </br> The sources and their corresponding URLs are stored in the "sources" array, and the server listens for requests on port 9999. When the server receives a request, it sends a request to each of the sources in the "sources" array and searches the HTML response for links containing the words "crypto", "news", "market", "transactions", or "trades". If it finds a link, it stores the title and URL of the article in the "articles" array along with the name of the source.

##### /Price
<img src="https://i.imgur.com/L27Xn9s.png" width="1000">
<img src="https://i.imgur.com/9jee33A.png" width="1000">
<img src="https://i.imgur.com/g1cvSeF.png" width="1000">
    
##### /News    
<img src="https://i.imgur.com/lGaLv5y.png" width="1000">
<img src="https://i.imgur.com/L2HWMpr.png" width="1000">
<img src="https://i.imgur.com/291QWiA.png" width="1000">
