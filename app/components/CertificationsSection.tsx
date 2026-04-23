"use client";

import { Marquee } from "@/components/magicui/marquee";

const techs = [
    { name: "Google", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Meta", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" }, // Placeholder/CDN
    { name: "LinkedIn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
    { name: "X", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

export default function CertificationsSection() {
    return (
        <section className="py-12 bg-gray-50 border-t border-b border-gray-200">
            <div className="container mx-auto px-4 text-center mb-8">
                <h3 className="text-gray-400 uppercase tracking-widest text-sm font-semibold">
                    Certifications & Technologies
                </h3>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee className="[--duration:20s]">
                    {techs.map((tech, idx) => (
                        <div key={idx} className="mx-8 flex flex-col items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default">
                            <img src={tech.icon} alt={tech.name} className="h-10 md:h-12 w-auto object-contain" />
                            {/* <span className="text-xs font-medium">{tech.name}</span> */}
                        </div>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-50"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-50"></div>
            </div>
        </section>
    );
}
