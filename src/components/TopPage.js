import React, { useRef } from 'react';
import About from './About';
import Introduction from './Introduction';

export default function TopPage() {

    return (
        <main className="container mx-auto px-4 py-8">
            <Introduction />
            <About />
        </main>            
    );
}