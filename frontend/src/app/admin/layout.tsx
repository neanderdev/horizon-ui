"use client";

import "./style.css";

import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
    title: {
        default: 'Horizon UI',
        template: '%s | Horizon UI',
    },
}

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <main>
            <Sidebar />

            {children}
        </main>
    )
}