// components/WhatsAppButton.tsx
"use client";

import React from "react";

interface WhatsAppButtonProps {
    phoneNumber: string; // e.g., 2348000000000
    carName?: string;
    isSticky?: boolean;
}

export default function WhatsAppButton({ phoneNumber, carName, isSticky = false }: WhatsAppButtonProps) {
    // Dynamically generate the message based on whether they are looking at a specific car
    const defaultMessage = "Hello Waco Auto! I would like to book an inspection or make an inquiry.";
    const carMessage = `Hello Waco Auto! I am interested in booking an inspection for the ${carName}. Can we schedule a time?`;

    const textMessage = encodeURIComponent(carName ? carMessage : defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

    if (isSticky) {
        return (
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-2xl transition-transform hover:scale-105 font-bold"
            >
                <span>💬 Chat to Book</span>
            </a>
        );
    }

    // Standard inline button for the car cards
    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-waco-red hover:bg-red-700 text-white font-bold py-3 rounded-md transition-colors"
        >
            Book an Inspection
        </a>
    );
}