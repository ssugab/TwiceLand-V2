import { useEffect, useRef, useState } from 'react';
import './CandyBongCursor.css';

const CandyBongCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Jangan jalankan di perangkat layar sentuh (HP/Tablet)
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const handleMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);

            // Menggeser kursor menggunakan GPU transform (offset -16px agar center tepat di ujung klik)
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
            }

            // Deteksi hover pada tombol, link, atau elemen interaktif
            const target = e.target;
            const isClickable =
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(Boolean(isClickable));
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            ref={cursorRef}
            className={`candybong-cursor-wrapper ${isHovering ? 'is-hovering' : ''}`}
        >
            {/* Sesuaikan struktur HTML di dalam sini dengan index.html dari repo candybongz-ring-animation */}
            <div className="candybong-ring">
                <div className="candybong-inner-core" />
            </div>
        </div>
    );
};

export default CandyBongCursor;