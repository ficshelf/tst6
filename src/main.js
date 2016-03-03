import $ from 'jquery';
import * as hljs from 'highlight.js';


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
    let head = xhr.responseHeader;
    console.log(head);
    /*
    console.log(doc);
    doc = doc.replace(/</g,"&lt;");
    console.log(doc);
    */
    document.getElementById('container').innerHTML = doc;
    $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});


ajax.load('http://localhost:3000/response.xml', function(xhr) {
    let doc = xhr.responseText;
    doc = doc.replace(/</g,"&lt;");
    document.getElementById('container2').innerHTML = doc;
    $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
