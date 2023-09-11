"use client";

import "./style.css";

import {
    Bell,
    CurrencyEth,
    Info,
    List,
    MagnifyingGlass,
    Moon
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
    title: string;
    href: string;
    isNFT?: boolean;
}

export function Header({ title, href, isNFT = false }: HeaderProps) {
    return (
        <header>
            <h6>
                Pages / <Link href={href}>{title}</Link>
            </h6>

            <div className="header-container">
                <h1 className="title">{title}</h1>

                <div className="box-info">
                    <div className="input-wrapper">
                        <MagnifyingGlass size={20} />

                        <input
                            id="search"
                            name="search"
                            type="search"
                            placeholder="Search"
                        />
                    </div>

                    {isNFT &&
                        <div className="nft-wrapper">
                            <div className="icon">
                                <CurrencyEth size={20} />
                            </div>

                            <span>1,924 ETH</span>
                        </div>
                    }

                    <Bell size={20} />

                    <Moon size={20} />

                    <Info size={20} />

                    <List size={20} className="menu" />

                    <Image
                        src="https://github.com/neanderdev.png"
                        alt="Avatar do GitHub"
                        width={40}
                        height={40}
                    />
                </div>
            </div>
        </header>
    );
}
