export const addMouseGlow = () => {
    const blob = document.createElement("div");
    blob.className = "blob";
    document.body.appendChild(blob);

    const moveBlob = (event: MouseEvent) => {
        const rec = blob.getBoundingClientRect();

        blob.animate(
            [
                {
                    transform: `translate(${event.clientX - rec.width / 2}px,${event.clientY - rec.height / 2}px)`,
                },
            ],
            {
                fill: "forwards",
            },
        );
    };

    window.addEventListener("mousemove", moveBlob);

    // Return a cleanup function to remove the event listener and the blob when the component unmounts
    return () => {
        window.removeEventListener("mousemove", moveBlob);
        document.body.removeChild(blob);
    };
};
