"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

// TypeScript declarations for UnicornStudio
declare global {
    interface Window {
        UnicornStudio: {
            isInitialized: boolean;
            init: () => void;
        };
    }
}

export default function MyComponent() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize UnicornStudio script
        if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: false, init: () => { } };
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
            script.onload = function () {
                if (!window.UnicornStudio.isInitialized) {
                    window.UnicornStudio.init();
                    window.UnicornStudio.isInitialized = true;
                }
            };
            (document.head || document.body).appendChild(script);
        }
    }, []);

    return (
        <div className="w-full h-screen bg-black flex justify-center items-center relative">
            <Image src="/images/retrotvnew.png" alt="unicorn" fill className="object-contain z-10 scale-80" />
            <div className="absolute w-full h-screen bg-black flex justify-center items-center -translate-x-10 -translate-y-12">
                <div
                    ref={containerRef}
                    data-us-project="AQzrSqi8FwxI4m4TBmBB"
                    style={{ width: "1440px", height: "900px" }}
                />
            </div>
        </div>
    );
} 