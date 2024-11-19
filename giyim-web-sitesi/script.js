document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "fromksc" && password === "1234") {
        
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-page').style.display = 'block';
    } else {
       
        document.getElementById('login-error').style.display = 'block';
    }
});


function submitReview(productId) {
    const rating = document.getElementById("rating-" + productId).value;
    const comment = document.getElementById("comment-" + productId).value;

    
    if (rating && comment) {
        
        const reviewSummary = document.createElement("div");
        reviewSummary.innerHTML = `<h3>Elbise ${productId} Yorumları</h3><p>Puan: ${rating}</p><p>Yorum: ${comment}</p>`;
        document.getElementById("ratings-summary").appendChild(reviewSummary);

        
        alert("Yorumunuz başarıyla gönderildi!");

        
        document.getElementById("rating-" + productId).value = "";
        document.getElementById("comment-" + productId).value = "";
    } else {
        
        alert("Lütfen puan ve yorum girin.");
    }
}


function scrollToTop() {
    window.scrollTo(0, 0);
}


function logout() {
    
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
}