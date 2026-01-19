export const smoothScroll = (
    targetId: string,
    duration = 800,
    offset = 96 // navbar height
    ) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const startPosition = window.scrollY;
    const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - offset;

    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(
        0,
        startPosition + distance * easeInOutCubic(progress)
        );

        if (elapsed < duration) {
        requestAnimationFrame(animation);
        }
    };
    requestAnimationFrame(animation);
};
