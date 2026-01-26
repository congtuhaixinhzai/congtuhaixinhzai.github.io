document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('snowflakeContainer');

    function createFlower() {
        const flower = document.createElement('div');
        flower.className = 'snowflake';
        flower.innerHTML = '🌸'; // Bạn có thể thay bằng ❄️ nếu muốn tuyết

        // Ngẫu nhiên các thuộc tính
        const startX = Math.random() * 100;
        const size = 15 + Math.random() * 20;
        const duration = 10 + Math.random() * 15;
        const delay = Math.random() * 5;

        flower.style.left = startX + 'vw';
        flower.style.fontSize = size + 'px';
        flower.style.animationDuration = duration + 's';
        flower.style.animationDelay = delay + 's';
        flower.style.opacity = Math.random();

        container.appendChild(flower);

        // Xóa sau khi rơi xong để tiết kiệm tài nguyên
        setTimeout(() => {
            flower.remove();
            createFlower(); // Tạo lại hoa mới
        }, (duration + delay) * 1000);
    }

    // Khởi tạo 12 bông hoa lúc đầu
    for (let i = 0; i < 12; i++) {
        setTimeout(createFlower, i * 600);
    }
});
