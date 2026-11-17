// Set year in footer
(function(){
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();

// Highlight active nav by URL path
(function(){
  const path = location.pathname.replace(/\\/g,'/');
  document.querySelectorAll('header nav a').forEach(a => {
    const href = a.getAttribute('href');
    if(!href) return;
    if(href === '/' && (path.endsWith('/') || path.endsWith('/index.html'))){
      a.classList.add('active');
    } else if(path.endsWith(href)){
      a.classList.add('active');
    }
  });
})();
