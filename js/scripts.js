const main = document.getElementsByTagName('main')
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const text = document.body.textContent;

window.addEventListener('DOMContentLoaded', event => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }

};

// Shrink the navbar 
navbarShrink();

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink);
})

// Executes the search
searchButton.addEventListener('click', () => {
  const searchText = searchInput.value.toLowerCase()
  const elements = main[0].getElementsByTagName('*')
  let targetElement;
  
  if (searchText.length > 0) {
    for(let i=0; i < elements.length; i++) {
      const elementText = elements[i].innerText.toLowerCase()
      
      if (elementText.includes(searchText) && elements[i] !== document.documentElement && elements[i] !== document.body) {
        targetElement = elements[i]
        break;
      }
    }
  }

  if (targetElement) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const elementTop = targetElement.getBoundingClientRect().top + scrollTop;
    
    window.scrollTo({
      top: elementTop - 50,
      behavior: 'smooth'
    });
    searchInput.value = ''
  } else {
    const popover = new mdb.Popover(searchButton, {
      content: 'Please try another search term...',
      title: 'Item not found!'
    })
    popover.show()
    const waitTime = 3500
    setTimeout(() => popover.hide(), waitTime)
    setTimeout(() => popover.dispose(), waitTime + 1000)
  }
});

// Executes search when "Enter is pressed"
searchInput.addEventListener('keyup', function(e) {
    if (e.key === "Enter") {
      searchButton.click();
    }
  });