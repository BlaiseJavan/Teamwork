// report button                      
const report = document.querySelectorAll(".report a");
const deleteBtn = document.querySelectorAll(".delete-article");

// report
for (let index = 0; index < report.length; index++) {
    report[index].onclick = function() {
        report[index].style.background  =  "rgb(231, 81, 81)";
        report[index].innerHTML  =  "inapro";
    };   
}          

// article delete alert
function deleteArticle() {
    alert('are you sure you want to delete?');
}

deleteBtn.forEach(element => {
    element.addEventListener('click', deleteArticle);
});


