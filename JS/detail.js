// Hàm chọn màu và cập nhật giá
function selectColor(element, color) {
    document.querySelectorAll('.color-option-form').forEach(option => option.classList.remove('selected'));
    element.classList.add('selected');

    // Reset số lượng về 1 khi chọn màu khác
    quantity = 1;
    document.getElementById('quantity-display').innerText = quantity;

    // Lấy giá trị từ phần tử .price-sale
    let basePrice = parseInt(document.querySelector('.price-sale').getAttribute('data-base-price'));

    // Cập nhật giá dựa trên màu sắc
    let price;
    switch (color) {
        case 'Trắng':
            price = basePrice;
            break;
        case 'Đỏ':
        case 'Xanh':
            price = basePrice - 90000;
            break;
        default:
            price = basePrice;
    }

    document.querySelector('.price-sale').innerText = price.toLocaleString('vi-VN') + ' VND';
    console.log(`Màu đã chọn: ${color}, Giá: ${price.toLocaleString('vi-VN')} VND`);
}
// JavaScript xử lý chọn số lượng
let quantity = 1;
function updateQuantity(change) {
    let selectedColor = document.querySelector('.color-option-form.selected img');
    if (!selectedColor) {
        alert('Vui lòng chọn màu sắc trước khi chọn số lượng.');
        return;
    }
    quantity += change;
    if (quantity < 1) quantity = 1;
    document.getElementById('quantity-display').innerText = quantity;
    updatePrice();
    console.log('Số lượng đã chọn:', quantity);
}
function updatePrice() {
    let selectedColor = document.querySelector('.color-option-form.selected img').alt;
    let basePrice = parseInt(document.querySelector('.price-sale').getAttribute('data-base-price'));
    let price;
    switch (selectedColor) {
        case 'Trắng':
            price = basePrice;
            break;
        case 'Đỏ':
        case 'Xanh':
            price = basePrice - 200;
            break;
        default:
            price = basePrice;
    }
    let totalPrice = price * quantity;
    document.querySelector('.price-sale').innerText = totalPrice.toLocaleString('vi-VN') + ' VND';
}
// Thiết lập giá trị ban đầu cho data-base-price
document.addEventListener('DOMContentLoaded', () => {
    let priceElement = document.querySelector('.price-sale');
    let basePrice = parseInt(priceElement.innerText.replace(/\D/g, ''));
    priceElement.setAttribute('data-base-price', basePrice);
});
// Hàm thêm sản phẩm vào giỏ hàng
function addToCart() {
    let selectedColorElement = document.querySelector('.color-option-form.selected img');
    if (!selectedColorElement) {
        alert('Vui lòng chọn màu sắc trước khi thêm vào giỏ hàng.');
        return;
    }

    let selectedColor = selectedColorElement.alt;
    let quantity = parseInt(document.getElementById('quantity-display').innerText);
    let price = document.querySelector('.price-sale').innerText;
    let imageUrl = document.getElementById('main-image').src;

    // Tạo đối tượng sản phẩm
    let product = {
        color: selectedColor,
        quantity: quantity,
        price: price,
        imageUrl: imageUrl
    };

    // Lưu thông tin sản phẩm vào localStorage
    localStorage.setItem('cart', JSON.stringify(product));

    // Chuyển hướng đến trang cart.html
    window.location.href = 'cart.html';
}
// Gán sự kiện click cho nút thêm vào giỏ hàng
document.getElementById('add-to-cart').addEventListener('click', addToCart);