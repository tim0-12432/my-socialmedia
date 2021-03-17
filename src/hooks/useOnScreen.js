import React, { useState, useEffect } from "react";

const useOnScreen = (ref = (<div />), rootMargin = "40px", threshold = 1) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setTimeout(() => {
                    setIsIntersecting(entry.isIntersecting)
                }, 0);
            },
            {
                rootMargin,
                threshold,
            },
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    return isIntersecting;
}

export default useOnScreen;