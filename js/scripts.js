const main = document.getElementsByTagName('main')
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const text = document.body.textContent;

// Executes the search
searchButton.addEventListener('click', () => {
    const searchText = searchInput.value.toLowerCase()
    const elements = main[0].getElementsByTagName('*')
    let targetElement;

    for(let i=0; i < elements.length; i++) {
        const elementText = elements[i].innerText.toLowerCase()

        if (elementText.includes(searchText) && elements[i] !== document.documentElement && elements[i] !== document.body) {
            targetElement = elements[i]
            break;
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
    }
});

// Executes search when "Enter is pressed"
searchInput.addEventListener('keyup', function(e) {
    if (e.key === "Enter") {
      searchButton.click();
    }
  });