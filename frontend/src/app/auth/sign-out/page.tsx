"use client";

import "./style.css";

import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function SignOut() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/auth/sign-in');
        }, 3000);
    }, [router]);

    return (
        <div className="container">
            <h1>Saindo</h1>

            <div className="loading" />
        </div>
    );
}
