//import $ from 'jquery';
import * as hljs from 'highlight.js';

function  getdata(v) {
 console.log(v);
}

export { getdata };


var ajax = {
   load : function load(url, callback) {
        var xhr;
         
        if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
        
         
        xhr.onreadystatechange = ensureReadiness;
         
        function ensureReadiness() {
            if(xhr.readyState < 4) {
                return;
            }
             
            if(xhr.status !== 200) {
                return;
            }
 
            if(xhr.readyState === 4) {
                callback(xhr);
            }           
        }
         
        xhr.open('GET', url, true);
        xhr.send('');
    }
};
 

ajax.load('http://localhost:3000/response.json', function(xhr) {
    let doc = xhr.responseText;
    //let headers = XMLHttpRequest.getAllResponseHeaders(); 
    let headers = xhr.getResponseHeader('Content-Type');
    let status = xhr.status;
    console.log(headers);
    console.log(status);
    document.getElementById('container').innerHTML = doc;
    hljs.highlightBlock(document.getElementById('container'));
});


ajax.load('http://localhost:3000/response.xml', function(xhr) {
    let doc = xhr.responseText;
    let headers = xhr.getResponseHeader('Content-Type');
    let status = xhr.status;
    console.log(headers);
    console.log(status);
    doc = doc.replace(/</g,"&lt;");
    document.getElementById('container2').innerHTML = doc;
    hljs.highlightBlock(document.getElementById('container2'));
});
