"use client";

import "./style.css";

import {
    CurrencyEth,
    Heart
} from "@phosphor-icons/react";
import Image from "next/image";

import { Header } from "@/components/Header";

export default function NFTMarketplace() {
    return (
        <div className="main">
            <Header
                title="NFT Marketplace"
                href="/admin/nft-marketplace"
                isNFT
            />

            <div className="container">
                <div className="marketplace">
                    <div className="banner">
                        <div className="info">
                            <span>Discover, collect, and sell extraordinary NFTs</span>

                            <p>Enter in this creative world. Discover now the latest NFTs or start creating your own!</p>
                        </div>

                        <div className="buttons-wrapper">
                            <button type="button">Discover now</button>

                            <button type="button" className="outline">Watch video</button>
                        </div>
                    </div>

                    <div className="trending-nfts">
                        <header>
                            <h2>Trending NFTs</h2>

                            <div className="badges">
                                <span className="active">Art</span>

                                <span>Music</span>

                                <span>Collectibles</span>

                                <span>Sports</span>
                            </div>
                        </header>

                        <div className="nfts">
                            <div className="nft">
                                <div className="background nft-1">
                                    <Heart size={16} />
                                </div>

                                <div className="info">
                                    <div>
                                        <span>Abstract Colors</span>

                                        <p>By Esthera Jackson</p>
                                    </div>

                                    <div className="avatars">
                                        <Image
                                            src="https://github.com/neanderdev.png"
                                            alt="Avatar do GitHub"
                                            width={30}
                                            height={30}
                                        />

                                        <Image
                                            src="https://github.com/neanderdev.png"
                                            alt="Avatar do GitHub"
                                            width={30}
                                            height={30}
                                        />

                                        <Image
                                            src="https://github.com/neanderdev.png"
                                            alt="Avatar do GitHub"
                                            width={30}
                                            height={30}
                                        />

                                        <span className="more">18+</span>
                                    </div>
                                </div>

                                <div className="footer">
                                    <span>Current Bid: 0.91 ETH</span>

                                    <button type="button">Place Bid</button>
                                </div>
                            </div>

                            <div className="nft">
                                <div className="background nft-2">
                                    <Heart size={16} />
                                </div>

                                <div className="info">
                                    <div>
                                        <span>ETH AI Brain</span>

                                        <p>By Nick Wilson</p>
                                    </div>

                                    <div className="avatars">
                                        <Image
                                            src="https://github.com/neanderdev.png"
                                            alt="Avatar do GitHub"
                                            width={30}
                                            height={30}
                                        />

                                        <Image
                                            src="https://github.com/neanderdev.png"
                                            alt="Avatar do GitHub"
                                            width={30}
                                            height={30}
                                        />

                                        <span className="more">18+</span>
                                    </div>
                                </div>

                                <div className="footer">
                                    <span>Current Bid: 2.82 ETH</span>

                                    <button type="button">Place Bid</button>
                                </div>
                            </div>

                            <div className="nft">
                                <div className="background nft-3">
                                    <Heart size={16} />
                                </div>

                                <div className="info">
                                    <div>
                                        <span>Mesh Gradients</span>

                                        <p>By Will Smith</p>
                                    </div>

                                    <div className="avatars">
                                        <Image
                                            src="https://github.com/neanderdev.png"
                                            alt="Avatar do GitHub"
                                            width={30}
                                            height={30}
                                        />

                                        <Image
                                            src="https://github.com/neanderdev.png"
                                            alt="Avatar do GitHub"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </div>

                                <div className="footer">
                                    <span>Current Bid: 0.56 ETH</span>

                                    <button type="button">Place Bid</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="recently-added">
                        <header>
                            <h2>Recently Added</h2>
                        </header>

                        <div className="nfts">
                            <div className="nft">
                                <div className="background nft-4">
                                    <Heart size={16} />
                                </div>

                                <div className="info">
                                    <div>
                                        <span>Swipe Circles</span>

                                        <p>By Peter Will</p>
                                    </div>

                                    <div className="avatars">
                                        <Image
                                            src="https://github.com/neanderdev.png"
                                            alt="Avatar do GitHub"
                                            width={30}
                                            height={30}
                                        />

                                        <span className="more">18+</span>
                                    </div>
                                </div>

                                <div className="footer">
                                    <span>Current Bid: 2.30 ETH</span>

                                    <button type="button">Place Bid</button>
                                </div>
                            </div>

                            <div className="nft">
                                <div className="background nft-5">
                                    <Heart size={16} />
                                </div>

                                <div className="info">
                                    <div>
                                        <span>Colorful Heaven</span>

                                        <p>By Mark Benjamin</p>
                                    </div>

                                    <div className="avatars">
                                        <Image
                                            src="https://github.com/neanderdev.png"
                                            alt="Avatar do GitHub"
                                            width={30}
                                            height={30}
                                        />

                                        <span className="more">18+</span>
                                    </div>
                                </div>

                                <div className="footer">
                                    <span>Current Bid: 1.30 ETH</span>

                                    <button type="button">Place Bid</button>
                                </div>
                            </div>

                            <div className="nft">
                                <div className="background nft-6">
                                    <Heart size={16} />
                                </div>

                                <div className="info">
                                    <div>
                                        <span>3D Cubes Art</span>

                                        <p>By Manny Gates</p>
                                    </div>

                                    <div className="avatars">
                                        <Image
                                            src="https://github.com/neanderdev.png"
                                            alt="Avatar do GitHub"
                                            width={30}
                                            height={30}
                                        />

                                        <Image
                                            src="https://github.com/neanderdev.png"
                                            alt="Avatar do GitHub"
                                            width={30}
                                            height={30}
                                        />

                                        <Image
                                            src="https://github.com/neanderdev.png"
                                            alt="Avatar do GitHub"
                                            width={30}
                                            height={30}
                                        />

                                        <span className="more">18+</span>
                                    </div>
                                </div>

                                <div className="footer">
                                    <span>Current Bid: 6.58 ETH</span>

                                    <button type="button">Place Bid</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tables">
                    <div className="top-creators">
                        <div className="header">
                            <header>
                                <h2>Top Creators</h2>

                                <button type="button">See all</button>
                            </header>

                            <div className="header-table">
                                <span>Name</span>

                                <span>Artworks</span>

                                <span>Rating</span>
                            </div>
                        </div>

                        <div className="creators">
                            <div className="creator">
                                <div className="user">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={30}
                                        height={30}
                                    />

                                    <span>@neanderdev</span>
                                </div>

                                <span>9821</span>

                                <progress value="90" max="100">90%</progress>
                            </div>

                            <div className="creator">
                                <div className="user">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={30}
                                        height={30}
                                    />

                                    <span>@neanderdev</span>
                                </div>

                                <span>7032</span>

                                <progress value="80" max="100">80%</progress>
                            </div>

                            <div className="creator">
                                <div className="user">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={30}
                                        height={30}
                                    />

                                    <span>@neanderdev</span>
                                </div>

                                <span>5204</span>

                                <progress value="70" max="100">70%</progress>
                            </div>

                            <div className="creator">
                                <div className="user">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={30}
                                        height={30}
                                    />

                                    <span>@neanderdev</span>
                                </div>

                                <span>4309</span>

                                <progress value="60" max="100">60%</progress>
                            </div>

                            <div className="creator">
                                <div className="user">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={30}
                                        height={30}
                                    />

                                    <span>@neanderdev</span>
                                </div>

                                <span>9821</span>

                                <progress value="50" max="100">50%</progress>
                            </div>

                            <div className="creator">
                                <div className="user">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={30}
                                        height={30}
                                    />

                                    <span>@neanderdev</span>
                                </div>

                                <span>7032</span>

                                <progress value="40" max="100">40%</progress>
                            </div>

                            <div className="creator">
                                <div className="user">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={30}
                                        height={30}
                                    />

                                    <span>@neanderdev</span>
                                </div>

                                <span>5204</span>

                                <progress value="25" max="100">25%</progress>
                            </div>
                        </div>
                    </div>

                    <div className="history">
                        <header>
                            <h2>History</h2>

                            <button type="button">See all</button>
                        </header>

                        <div className="histories">
                            <div className="data">
                                <div className="nft">
                                    <Image
                                        src="/nft-1.png"
                                        alt="NFT 1"
                                        width={60}
                                        height={60}
                                    />

                                    <div className="info">
                                        <p>Colorful Heaven</p>

                                        <span>By Mark Benjamin</span>
                                    </div>
                                </div>

                                <div className="value">
                                    <CurrencyEth size={18} weight="fill" />

                                    <span>1.30 ETH</span>
                                </div>

                                <span className="time">30s ago</span>
                            </div>

                            <div className="data">
                                <div className="nft">
                                    <Image
                                        src="/nft-2.png"
                                        alt="NFT 2"
                                        width={60}
                                        height={60}
                                    />

                                    <div className="info">
                                        <p>Abstract Colors</p>

                                        <span>By Esthera Jackson</span>
                                    </div>
                                </div>

                                <div className="value">
                                    <CurrencyEth size={18} weight="fill" />

                                    <span>0.91 ETH</span>
                                </div>

                                <span className="time">58s ago</span>
                            </div>

                            <div className="data">
                                <div className="nft">
                                    <Image
                                        src="/nft-3.png"
                                        alt="NFT 3"
                                        width={60}
                                        height={60}
                                    />

                                    <div className="info">
                                        <p>ETH AI Brain</p>

                                        <span>By Nick Wilson</span>
                                    </div>
                                </div>

                                <div className="value">
                                    <CurrencyEth size={18} weight="fill" />

                                    <span>2.82 ETH</span>
                                </div>

                                <span className="time">1m ago</span>
                            </div>

                            <div className="data">
                                <div className="nft">
                                    <Image
                                        src="/nft-4.png"
                                        alt="NFT 4"
                                        width={60}
                                        height={60}
                                    />

                                    <div className="info">
                                        <p>Swipe Circles</p>

                                        <span>By Peter Will</span>
                                    </div>
                                </div>

                                <div className="value">
                                    <CurrencyEth size={18} weight="fill" />

                                    <span>2.30 ETH</span>
                                </div>

                                <span className="time">1m ago</span>
                            </div>

                            <div className="data">
                                <div className="nft">
                                    <Image
                                        src="/nft-5.png"
                                        alt="NFT 5"
                                        width={60}
                                        height={60}
                                    />

                                    <div className="info">
                                        <p>Mesh Gradients</p>

                                        <span>By Will Smith</span>
                                    </div>
                                </div>

                                <div className="value">
                                    <CurrencyEth size={18} weight="fill" />

                                    <span>0.56 ETH</span>
                                </div>

                                <span className="time">2m ago</span>
                            </div>

                            <div className="data">
                                <div className="nft">
                                    <Image
                                        src="/nft-6.png"
                                        alt="NFT 6"
                                        width={60}
                                        height={60}
                                    />

                                    <div className="info">
                                        <p>3D Cubes Art</p>

                                        <span>By Manny Gates</span>
                                    </div>
                                </div>

                                <div className="value">
                                    <CurrencyEth size={18} weight="fill" />

                                    <span>6.58 ETH</span>
                                </div>

                                <span className="time">3m ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <span>© 2022 Horizon UI. All Rights Reserved. Made with love by <span className="simmmple">Simmmple!</span></span>

                <div className="links">
                    <a href="">Marketplace</a>

                    <a href="">License</a>

                    <a href="">Terms of Use</a>

                    <a href="">Blog</a>
                </div>
            </footer>
        </div>
    )
}
