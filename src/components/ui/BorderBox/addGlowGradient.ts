export const addGlowGradient = (
    svgRef: SVGSVGElement,
    glowRect: SVGRectElement,
    radialGradient: SVGRadialGradientElement,
) => {
    const handleGlowGradient = (event: MouseEvent) => {
        if (!glowRect || !radialGradient) {
            return;
        }

        const rect = svgRef.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        // If the mouse is too far away from the box, hide the glow
        if (x < -20 || x > 120 || y < -20 || y > 120) {
            glowRect.style.opacity = "0";
        }
        // Otherwise, update the glow position
        else {
            glowRect.style.opacity = "1";
            radialGradient.setAttribute("fx", `${x}%`);
            radialGradient.setAttribute("fy", `${y}%`);
        }
    };

    window.addEventListener("mousemove", (event) => handleGlowGradient(event));

    return () => {
        window.removeEventListener("mousemove", handleGlowGradient);
    };
};
