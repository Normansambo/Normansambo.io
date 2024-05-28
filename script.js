function search() {
    // Get the search query
    var query = document.getElementById("searchInput").value.toLowerCase();

    // Get all sections
    var sections = document.querySelectorAll("section");

    // Remove previous highlights
    sections.forEach(section => {
        section.innerHTML = section.innerHTML.replace(/<span class="highlight">|<\/span>/g, '');
    });

    // If the query is empty, return
    if (!query) return;

    // Search through sections and highlight matching text
    sections.forEach(section => {
        var content = section.innerHTML.toLowerCase();
        var index = content.indexOf(query);
        if (index !== -1) {
            var originalContent = section.innerHTML;
            var regex = new RegExp(query, 'gi');
            section.innerHTML = originalContent.replace(regex, match => `<span class="highlight">${match}</span>`);
        }
    });
}
