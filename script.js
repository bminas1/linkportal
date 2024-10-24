document.addEventListener("DOMContentLoaded", function() {
    
    const toggleButtons = document.querySelectorAll('.category-toggle');
    
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const linkList = this.nextElementSibling; 
            
        
            if (linkList.style.display === "block" || linkList.style.display === "") {
                linkList.style.display = "none"; // göm
            } else {
                linkList.style.display = "block"; // visa 
            }
        });
    });
});
