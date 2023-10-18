document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements you want to interact with
    const buttons = {
        summary: document.getElementById('summary-button'),
        whoAmI: document.getElementById('whoami-button'),
        blog: document.getElementById('blog-button'),
        codeSnippets: document.getElementById('code-snippets-button'),
        contact: document.getElementById('contact-button'),
        pay: document.getElementById('pay-button'),
    };

    const sections = {
        summary: document.getElementById('summary-section'),
        whoAmI: document.getElementById('whoami-section'),
        blog: document.getElementById('blog-section'),
        codeSnippets: document.getElementById('code-snippets-section'),
        contact: document.getElementById('contact-section'),
        pay: document.getElementById('pay-section'),
    };

    // Define a function to toggle the visibility of sections
    function showSection(section) {
        for (const key in sections) {
            sections[key].style.display = section === sections[key] ? 'block' : 'none';
        }
    }

    // Add a single event listener to handle all button clicks
    for (const key in buttons) {
        buttons[key].addEventListener('click', () => {
            showSection(sections[key]);
        });
    }

    // Initially show the summary section (or any default section you prefer)
    showSection(sections.summary);
});

blogButton.addEventListener('click', () => {
    // Assuming you want to load blog posts from an external source
    fetch('blog-posts.json') // Replace 'blog-posts.json' with the actual URL or data source
        .then(response => response.json())
        .then(data => {
            const blogList = document.getElementById('blog-list');
            blogList.innerHTML = ''; // Clear the previous content
            data.forEach(post => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = post.link;
                link.textContent = post.title;
                listItem.appendChild(link);
                blogList.appendChild(listItem);
            });
        })
        .catch(error => {
            // Handle any errors, e.g., display an error message
            console.error(error);
        });
});

payButton.addEventListener('click', () => {
    // This section can display your payment information or form
    const paymentInfo = document.getElementById('payment-info');
    const moneroAddress = 'YOUR_MONERO_ADDRESS';

    paymentInfo.innerHTML = `
        <h2>Support My Work</h2>
        <p>If you appreciate my work and want to support me, you can donate Monero at the following address:</p>
        <p>${8993NE6LhN5FGFN6wTJKLgad8ygM72M6MBNTHPh4Tjuj1FsjApR3u9TKyegtbQ9rLMKNwSD63m1ceLPBQPK747fAF6rhQwc - monero mainnet}</p>
    `;
});
