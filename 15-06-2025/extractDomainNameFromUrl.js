/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

function domainName(url){
  //your code here
//   removing the http://, https:// 
    let str = url.replace("https://", "").replace("http://", "").replace("www.","").trim()
    console.log(str)
    return str.split(".")[0]
}

