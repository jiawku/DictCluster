function search(){
  var word=document.getElementById('query').value;
  if (word!=""){
  // window.open('https://www.google.com/search?q=Dictionary#dobs='+word, '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
  // window.open('https://www.merriam-webster.com/dictionary/'+word, '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
  // window.open('http://www.iciba.com/'+word, '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');

  chrome.tabs.create({
    url: 'https://www.google.com/search?q=Dictionary#dobs='+word
  });
  chrome.tabs.create({
    url: 'https://www.merriam-webster.com/dictionary/'+word
  });
  chrome.tabs.create({
    url: 'http://www.iciba.com/'+word
  });
}
};


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('inputForm').addEventListener("submit",function(){
    search();
  });
});
