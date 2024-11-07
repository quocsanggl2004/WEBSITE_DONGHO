document.addEventListener('DOMContentLoaded', () => {
    // Lấy dữ liệu từ localStorage
    let cartData = localStorage.getItem('cart');
    if (cartData) {
        let product = JSON.parse(cartData);

        // Hiển thị dữ liệu trong giỏ hàng
        let cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = `
            <div class="cart-item">
                <img src="${product.imageUrl}" alt="Product Image">
                <div class="cart-item-details">
                    <p>Màu sắc: ${product.color}</p>
                    <p>Số lượng: ${product.quantity}</p>
                    <p>Giá: ${product.price}</p>
                </div>
            </div>
        `;
    } else {
        document.getElementById('cart-items').innerText = 'Giỏ hàng của bạn trống.';
    }

    // Xóa giỏ hàng
    document.getElementById('clear-cart').addEventListener('click', () => {
        localStorage.removeItem('cart');
        document.getElementById('cart-items').innerText = 'Giỏ hàng của bạn trống.';
    });

    // Quay lại trang chủ
    document.getElementById('back-to-shop').addEventListener('click', () => {
        window.location.href = 'home.html';
    });

    // Thanh toán
    document.getElementById('checkout').addEventListener('click', () => {
        alert('Thanh toán thành công!');
        localStorage.removeItem('cart');
        document.getElementById('cart-items').innerText = 'Giỏ hàng của bạn trống.';
    });
});
