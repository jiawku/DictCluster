function search(){
  var word=document.getElementById('query').value;
  if (word!=""){
  window.open('https://www.google.com/search?q=Dictionary#dobs='+word, '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
}
};


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('inputForm').addEventListener("submit",function(){
    search();
  });
});
