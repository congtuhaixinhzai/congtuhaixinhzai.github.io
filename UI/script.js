document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('snowflakeContainer');
    function createFlower() {
        const flower = document.createElement('div');
        flower.className = 'snowflake';
        flower.innerHTML = '🌸';
        const startX = Math.random() * 100;
        const size = 15 + Math.random() * 15;
        const duration = 12 + Math.random() * 8;
        flower.style.left = startX + 'vw';
        flower.style.fontSize = size + 'px';
        flower.style.animationDuration = duration + 's';
        container.appendChild(flower);
        setTimeout(() => { flower.remove(); createFlower(); }, duration * 1000);
    }
    for (let i = 0; i < 10; i++) { setTimeout(createFlower, i * 1000); }
});
