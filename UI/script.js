const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
init();

let trails = [];
function createTrail() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.2,
        color: Math.random() > 0.5 ? "#00b4ff" : "#a855f7",
    };
}
for (let i = 0; i < 45; i++) trails.push(createTrail());

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let t of trails) {
        const grad = ctx.createLinearGradient(t.x, t.y, t.x, t.y + t.length);
        grad.addColorStop(0, t.color);
        grad.addColorStop(1, "transparent");
        ctx.globalAlpha = t.opacity;
        ctx.fillStyle = grad;
        ctx.fillRect(t.x, t.y, 2, t.length);
        t.y += t.speed;
        if (t.y > canvas.height) { t.x = Math.random() * canvas.width; t.y = -t.length; }
    }
    requestAnimationFrame(draw);
}
draw();

window.addEventListener("resize", init);