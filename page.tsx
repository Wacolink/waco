// app/page.tsx
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";

// Dummy data for your initial layout - you will replace this with real inventory later
const inventory = [
    { id: 1, name: "2019 Lexus RX 350 F-Sport", specs: "Foreign Used • Lagos", tag: "High Demand" },
    { id: 2, name: "2021 Mercedes-Benz GLE 450", specs: "Foreign Used • Abuja", tag: "Only 1 Available" },
];

export default function Home() {
    return (
        <div className="min-h-screen">

            {/* 1. HERO SECTION */}
            <section className="relative px-6 py-24 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
                    The Premium Auto <span className="text-waco-red">Concierge</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
                    Stop wasting time at sketchy lots. We source, physically inspect, and negotiate the absolute best deals on verified vehicles.
                </p>
                <a href="#inventory" className="bg-waco-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md text-lg transition-transform hover:scale-105">
                    View Available Cars
                </a>
            </section>

            {/* 2. INVENTORY SECTION (The Bait) */}
            <section id="inventory" className="px-6 py-16 bg-black border-t border-gray-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 border-l-4 border-waco-red pl-4">Verified Inventory</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {inventory.map((car) => (
                            <div key={car.id} className="bg-waco-card rounded-lg overflow-hidden shadow-xl border border-gray-800">
                                {/* Image Placeholder */}
                                <div className="bg-gray-800 h-64 w-full flex items-center justify-center relative">
                                    <span className="text-gray-500">[Car Image Placeholder]</span>
                                    <div className="absolute top-4 left-4 bg-waco-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                                        {car.tag}
                                    </div>
                                </div>

                                {/* Details & CTA */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                                    <p className="text-gray-400 mb-6">{car.specs}</p>
                                    {/* Notice how we pass the specific car name to the button! */}
                                    <WhatsAppButton phoneNumber="2349132247092" carName={car.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TRUST & BROKER ADVANTAGE SECTION */}
            <section className="px-6 py-20 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-waco-red uppercase tracking-widest">Why Choose Waco Auto?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div className="p-6 bg-waco-card rounded-lg">
                        <div className="text-4xl mb-4">🛡️</div>
                        <h3 className="text-xl font-bold mb-3">100% Verified</h3>
                        <p className="text-gray-400 text-sm">Every vehicle undergoes a rigorous physical inspection. No hidden faults, no tampered mileage.</p>
                    </div>
                    <div className="p-6 bg-waco-card rounded-lg border border-waco-red/30">
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="text-xl font-bold mb-3">Expert Negotiation</h3>
                        <p className="text-gray-400 text-sm">We leverage our network to get you the true market value, protecting you from inflated lot prices.</p>
                    </div>
                    <div className="p-6 bg-waco-card rounded-lg">
                        <div className="text-4xl mb-4">📑</div>
                        <h3 className="text-xl font-bold mb-3">Safe & Secure</h3>
                        <p className="text-gray-400 text-sm">We handle the complex paperwork, verify customs duty, and secure a transparent handover process.</p>
                    </div>
                </div>
            </section>

            {/* 4. FOOTER */}
            <footer className="bg-black py-10 border-t border-gray-900 text-center text-gray-500 text-sm">
                <p className="mb-2">© 2026 Waco Auto. All rights reserved.</p>
                <p>Waco Auto operates as a verified automotive brokerage and concierge service.</p>
            </footer>
        </div>
    );
}