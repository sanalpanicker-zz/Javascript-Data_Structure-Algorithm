// Make a function that returns the host from a string that contains a URI that can be called like this: “someUri".host().
// Assumptions: URI is always valid and has scheme and uses a protocol that requires double slashes.
// Must support any combination of optional port number, path, query and fragment. Doesn’t have to support user/password.
// Example test code:
// console.log('beep://floppy#foo:hoo'.host()); // prints floppy
// console.log('boop://ding.dong.net/index.html'.host()); // prints ding.dong.net
// console.log('ftp://ftp.intuit.com'.host()); // prints ftp.intuit.com
// console.log('http://localhost?arg=val'.host()); // prints localhost

//https:/
// /
// www.intuit.com:443
// /
//   bla?a=n#foo


String.prototype.host = String.prototype.host || function(){
    const delimeters = ['#',':','/','?'];
    let str = ''
    const urlSplits = this.split('://');
    let uri = urlSplits[1];
  
    for(let d of delimeters){   
      if(uri.includes(d)){
        uri = uri.split(d)[0];
      }
    };
    return uri;
  };
  
  console.log('https://www.intuit.com:443/bla?a=n#foo'.host()); // prints www.intuit.com
  console.log('beep://floppy#foo:hoo'.host()); // prints floppy
  console.log('boop://ding.dong.net/index.html'.host()); // prints ding.dong.net
  console.log('ftp://ftp.intuit.com'.host()); // prints ftp.intuit.com
  console.log('http://localhost?arg=val'.host()); // prints localhost
  