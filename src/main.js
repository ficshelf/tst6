//import $ from 'jquery';
import * as hljs from 'highlight.js';

function  getdata(v) {
  //const r = document.getElementById('format').options[document.getElementById('format').selectedIndex].text;
  //console.log(r);

  const t = v.options[v.selectedIndex].text;
  console.log(t);
  let req = '';

  switch (t) {
    case 'JSON':
      req = 'http://localhost:3000/response.json';
      ajax.load(req, function(xhr) {
        let doc = xhr.responseText;
        let headers = xhr.getResponseHeader('Content-Type');
        let status = xhr.status;
        document.getElementById('url-info').innerHTML = "GET "+req;
        document.getElementById('headers').innerHTML = 'HTTP '+status+ "\n"+'Content-Type: ' + headers + "\n"
        document.getElementById('response').innerHTML = doc;
        hljs.highlightBlock(document.getElementById('response'));
      });
      break;
    case 'XML':
      req = 'http://localhost:3000/response.xml';
      ajax.load(req, function(xhr) {
        let doc = xhr.responseText;
        let headers = xhr.getResponseHeader('Content-Type');
        let status = xhr.status;
        doc = doc.replace(/</g,"&lt;"); // THAT IS THE ONLY DIFF. DRY THIS CODE!
        document.getElementById('url-info').innerHTML = "GET "+req;
        document.getElementById('headers').innerHTML = 'HTTP '+status+ "\n"+'Content-Type: ' + headers + "\n"
        document.getElementById('response').innerHTML = doc;
        hljs.highlightBlock(document.getElementById('response'));
      });
      break;
    default:
      console.log('rogue select value');
  }
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

