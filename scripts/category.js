document.addEventListener('DOMContentLoaded', () => {
    fetchCategories();
  });
  
  function fetchCategories() {
    fetch('https://khmer-shoping.onrender.com/categories')
      .then(response => response.json())
      .then(data => {
        const dropdownContent = document.getElementById('dropdown-content');
        data.forEach(category => {
          const categoryElement = document.createElement('a');
          categoryElement.href = '#';
          categoryElement.dataset.category = category.id;
          categoryElement.innerHTML = `<span class="ticket">&#9679;</span> ${category.name}`;
          dropdownContent.appendChild(categoryElement);
        });
      })
      .catch(error => console.error('Error fetching categories:', error));
  }
//   <span class="ticket">&#9679;</span>
  function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.nav-btn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  function filterCategories() {
    const input = document.getElementById('category-search');
    const filter = input.value.toLowerCase();
    const links = document.querySelectorAll('.dropdown-content a');
    
    links.forEach(link => {
      const text = link.textContent || link.innerText;
      if (text.toLowerCase().indexOf(filter) > -1) {
        link.style.display = "";
      } else {
        link.style.display = "none";
      }
    });
  }
  
  function loadAddProductPage() {
    fetch('../page/addproduct.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('add-product-container').innerHTML = html;
        })
        .catch(error => console.error('Error fetching Add Product page:', error));
  }
  
  // Event listener to trigger loading of Add Product page content
  document.getElementById('add-product-link').addEventListener('click', loadAddProductPage);
  