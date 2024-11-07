$(document).ready(function() {
    $('.thumbnail').click(function(e) {
        e.preventDefault();
        var newSrc = $(this).attr('src');
        $('#main-image').attr('src', newSrc);
    });
});


document.getElementById('view-more-btn').addEventListener('click', function() {
    var moreContent = document.getElementById('more-content');
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        this.textContent = 'Thu gọn';
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'Xem thêm';
    }
});