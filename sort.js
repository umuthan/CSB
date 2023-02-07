(function(){ // scoping

  var betList = document.querySelector('main section ul');
  var sortButton = document.querySelector('button#sort');

  sortButton.onclick = function(){
    Array.from(betList.getElementsByTagName("LI"))
      .sort((a, b) => a.getAttribute('data-title').localeCompare(b.getAttribute('data-title')))
      .forEach(li => betList.appendChild(li));
  };

})();
