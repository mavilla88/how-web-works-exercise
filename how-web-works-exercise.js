// Solidify Terminology
// In your own terms, define the following terms:

// 1. What is HTTP?
// Hyper Text Transfer Protocol (HTTP) dictates how clients get/send data to a server.

// 2. What is a URL?
// Uniform Resource Locater is an address for some internet resource.

// 3. What is DNS?
// Domain Name System is what coverts readable URLs into IP addresses.

// 4. What is a query string?
// Query string allows users to enter key - values pairs into the URL.
// ex. ?key1=value1&key2=value2...

// 5. What are two HTTP verbs and how are they different?
// GET - retrieves data from a server
// POST - sends data to a server which will update the server in some way.

// 6. What is an HTTP request?
// An HTTP request is a request to a server from a client using HTTP protocol.

// 7. What is an HTTP response?
// An HTTP response is a response to a client from a server using HTTP protocol.


// 8. What is an HTTP header? Give a couple examples of request and response headers you have seen.
// Headers will provide additional information about the request / response.
// Request headers - Host, User - Agent, Accept, Cookie, Cache - Control
// Response headers - Content-Type, Last-Modified, Set-Cookie, Cache-Control

// 9. What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// 1 - the browser will use DNS to convert readable URL into an IP address. 
// 2 - Browser will make a request to the IP address and include Headers. 
// 3 - Server sends a response back to user
// 4 - Browser will render that content from HTML and additional resources. 
// 5 - Browser makes seperate HTTP requests for those additional resources. 