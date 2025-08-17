import React, { useRef, useEffect } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

const CanvasNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points: Point[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const width = canvas.width;
    const height = canvas.height;

    const pointCount = 70;
    // Màu điểm & line dịu hơn để không át card đỏ
    const colors = ["#FFD700", "#FFB347", "#FF8C00", "#FFFF66", "#FF4500"];

    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      // nền tối vừa đủ, không quá đen
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // vẽ line
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const grad = ctx.createLinearGradient(
              points[i].x,
              points[i].y,
              points[j].x,
              points[j].y
            );
            grad.addColorStop(0, points[i].color);
            grad.addColorStop(1, points[j].color);
            ctx.strokeStyle = grad;
            ctx.globalAlpha = 0.3 * (1 - dist / 150); // mờ hơn
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // vẽ point
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 3);
        grad.addColorStop(0, "#FFF9C4"); // center sáng dịu
        grad.addColorStop(1, p.color);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2); // điểm nhỏ hơn để không át box-shadow
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default CanvasNetwork;
