// report button                      
const report = document.querySelectorAll(".report a");
const deleteBtn = document.querySelectorAll(".delete-article");
        
// article delete alert
function deleteArticle() {
    alert('are you sure you want to delete?');
}

deleteBtn.forEach(element => {
    element.addEventListener('click', deleteArticle);
});


