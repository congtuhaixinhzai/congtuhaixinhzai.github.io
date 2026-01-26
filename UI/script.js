// Đợi cho DOM tải xong mới thực thi
document.addEventListener('DOMContentLoaded', () => {
    // Tạo container cho hoa rơi nếu chưa có trong HTML
    let snowflakeContainer = document.getElementById('snowflakeContainer');
    
    if (!snowflakeContainer) {
        snowflakeContainer = document.createElement('div');
        snowflakeContainer.id = 'snowflakeContainer';
        document.body.appendChild(snowflakeContainer);
    }

    // Hàm tạo hoa rơi
    function createSnowflake() {
        const snowflake = document.createElement('p');
        snowflake.className = 'snowflake';
        snowflake.textContent = '🌸'; // Bạn có thể đổi icon tùy thích

        // Vị trí và kích thước ngẫu nhiên
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.fontSize = 15 + Math.random() * 20 + 'px';

        // Thời gian và tốc độ rơi ngẫu nhiên (15s - 25s để tạo cảm giác chậm rãi)
        const fallDuration = 15 + Math.random() * 10;
        snowflake.style.animationDuration = fallDuration + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.opacity = 0.5 + Math.random() * 0.5;

        snowflakeContainer.appendChild(snowflake);

        // Xóa hoa khi rơi xong và tạo lại để duy trì hiệu ứng liên tục
        setTimeout(() => {
            snowflake.remove();
            createSnowflake();
        }, (fallDuration + 5) * 1000); 
    }

    // Khởi tạo 10 hoa ban đầu
    for (let i = 0; i < 10; i++) {
        setTimeout(createSnowflake, i * 500);
    }
});
