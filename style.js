document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements you want to interact with
    const summaryButton = document.getElementById('summary-button');
    const whoAmIButton = document.getElementById('whoami-button');
    const blogButton = document.getElementById('blog-button');
    const codeSnippetsButton = document.getElementById('code-snippets-button');
    const contactButton = document.getElementById('contact-button');
    const payButton = document.getElementById('pay-button');

    const summarySection = document.getElementById('summary-section');
    const whoAmISection = document.getElementById('whoami-section');
    const blogSection = document.getElementById('blog-section');
    const codeSnippetsSection = document.getElementById('code-snippets-section');
    const contactSection = document.getElementById('contact-section');
    const paySection = document.getElementById('pay-section');

    // Define functions to toggle the visibility of sections
    function showSection(section) {
        section.style.display = 'block';
    }

    function hideSection(section) {
        section.style.display = 'none';
    }

    // Event listeners for button clicks
    summaryButton.addEventListener('click', () => {
        hideSection(whoAmISection);
        hideSection(blogSection);
        hideSection(codeSnippetsSection);
        hideSection(contactSection);
        hideSection(paySection);
        showSection(summarySection);
    });

    whoAmIButton.addEventListener('click', () => {
        hideSection(summarySection);
        hideSection(blogSection);
        hideSection(codeSnippetsSection);
        hideSection(contactSection);
        hideSection(paySection);
        showSection(whoAmISection);
    });

    blogButton.addEventListener('click', () => {
        hideSection(summarySection);
        hideSection(whoAmISection);
        hideSection(codeSnippetsSection);
        hideSection(contactSection);
        hideSection(paySection);
        showSection(blogSection);
    });

    codeSnippetsButton.addEventListener('click', () => {
        hideSection(summarySection);
        hideSection(whoAmISection);
        hideSection(blogSection);
        hideSection(contactSection);
        hideSection(paySection);
        showSection(codeSnippetsSection);
    });

    contactButton.addEventListener('click', () => {
        hideSection(summarySection);
        hideSection(whoAmISection);
        hideSection(blogSection);
        hideSection(codeSnippetsSection);
        hideSection(paySection);
        showSection(contactSection);
    });

    payButton.addEventListener('click', () => {
        hideSection(summarySection);
        hideSection(whoAmISection);
        hideSection(blogSection);
        hideSection(codeSnippetsSection);
        hideSection(contactSection);
        showSection(paySection);
    });

    // Initially show the summary section (or any default section you prefer)
    showSection(summarySection);
});

