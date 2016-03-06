import * as hljs from 'highlight.js';

function displayData(req, xhr) {
  let doc = xhr.responseText;
  let headers = xhr.getResponseHeader('Content-Type');
  let status = xhr.status;
  if (headers == "application/xml") doc = doc.replace(/</g,"&lt;"); // Gotta escape those "<" 
  document.getElementById('url-info').innerHTML = "GET "+req;
  document.getElementById('headers').innerHTML = 'HTTP '+status+ "\n"+'Content-Type: ' + headers + "\n"
  document.getElementById('response').innerHTML = doc;
  hljs.highlightBlock(document.getElementById('response'));
};

function  getData(v) {

  //remove the very first option of the drop down AFTER the first AJAX call, to ensure we dont have an invalid one there anymore.
  if (v.length == 3) v.remove(0);  

  const that = v.options[v.selectedIndex].text;
  
  let req = '';

  switch (that) {
    case 'JSON':
      req = '/response.json';
      ajax.load(req, function(xhr) {
	displayData(req, xhr);
      });
      break;
    case 'XML':
      req = '/response.xml';
      ajax.load(req, function(xhr) {
	displayData(req, xhr);
      });
      break;
    default:
      throw('rogue select value');
  }
}

export { getData };


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

