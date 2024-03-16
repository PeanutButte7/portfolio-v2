export type Dimensions = {
    width: number;
    height: number;
};

export const observeSize = (
    observeTarget: HTMLDivElement,
    setDimensions: (dimensions: Dimensions) => void,
) => {
    const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            const { width, height } = entry.contentRect;

            // Compute padding
            const computedStyle = getComputedStyle(observeTarget);
            const paddingTop = parseFloat(computedStyle.paddingTop);
            const paddingBottom = parseFloat(computedStyle.paddingBottom);
            const paddingLeft = parseFloat(computedStyle.paddingLeft);
            const paddingRight = parseFloat(computedStyle.paddingRight);

            // Adjust dimensions to include padding
            const adjustedWidth = width + paddingLeft + paddingRight;
            const adjustedHeight = height + paddingTop + paddingBottom;

            setDimensions({ width: adjustedWidth, height: adjustedHeight });
        }
    });

    resizeObserver.observe(observeTarget);

    return () => {
        resizeObserver.unobserve(observeTarget);
    };
};
