import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import About from './About';
import Introduction from './Introduction';

export default function TopPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const introScale = useTransform(scrollYProgress, [0, 0.5], [1, 2.0]);
    const introOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const aboutOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const aboutY = useTransform(scrollYProgress, [0, 0.7], [10, 0]);

    return (
        <main ref={containerRef} className="container mx-auto px-4 py-8 min-h-[200vh]">
            <motion.div style={{ scale: introScale, opacity: introOpacity }}>
                <Introduction />
            </motion.div>
            <motion.div
                style={{
                    opacity: aboutOpacity,
                    y: aboutY
                }}
            >
                <About />
            </motion.div>
        </main>
    );
}