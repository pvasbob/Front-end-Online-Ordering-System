const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev");
xhr.send();

//  message  = request
//  GET = get some information from the backend.
//  URL = Uniform Resource Locator
//        - Like an address, but for the Internet.
//        - Helps us locate another computer on the Internet.
//  URL Paths
//  https://supersimplebackend.dev/hello      URL Path: /hello
//  https://supersimplebackend.dev/products/first
//                  URL Path: /products/first
//  https://supersimplebackend.dev            URL Path: /

//  Status Code
//    Starts with 2 (200, 201, 204) = succeeded
//    Starts with 4 or 5 ( 400, 404, 500) = failed
//    Starts with 4: Our problem
//    Backend's problem
