import "./style.css";

import {
    ChartLine,
    House,
    Kanban,
    ShoppingCart,
    SignOut,
    User
} from "@phosphor-icons/react";

import { Link } from "./components/Link";

export function Sidebar() {
    return (
        <aside>
            <div className="logo">
                <strong>HORIZON <span>FREE</span></strong>
            </div>

            <hr />

            <div className="info">
                <div className="links">
                    <Link
                        href="/admin/dashboard"
                        title="Dashboard"
                        icon={<House size={24} />}
                        shouldMatchExactHref
                    />

                    <Link
                        href="/admin/nft-marketplace"
                        title="NFT Marketplace"
                        icon={<ShoppingCart size={24} />}
                        shouldMatchExactHref
                    />

                    <Link
                        href="/admin/tables"
                        title="Tables"
                        icon={<ChartLine size={24} />}
                        shouldMatchExactHref
                    />

                    <Link
                        href="/admin/kanban"
                        title="Kanban"
                        icon={<Kanban size={24} />}
                        shouldMatchExactHref
                    />

                    <Link
                        href="/admin/profile"
                        title="Profile"
                        icon={<User size={24} />}
                        shouldMatchExactHref
                    />

                    <Link
                        href="/auth/sign-out"
                        title="Sign Out"
                        icon={<SignOut size={24} />}
                        shouldMatchExactHref
                    />
                </div>

                <div className="get-pro">
                    <div className="container">
                        <div className="background-top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                <path d="M10.0923 27.3033H30.8176V36.3143H10.0923V27.3033Z" fill="white" />

                                <path d="M31.5385 29.1956C31.5385 26.2322 30.3707 23.3901 28.2922 21.2947C26.2136 19.1992 23.3945 18.022 20.4549 18.022C17.5154 18.022 14.6963 19.1992 12.6177 21.2947C10.5392 23.3901 9.37143 26.2322 9.37143 29.1956L20.4549 29.1956H31.5385Z" fill="white" />

                                <path fillRule="evenodd" clipRule="evenodd" d="M20.5 31.989C26.8452 31.989 31.989 26.8452 31.989 20.5C31.989 14.1548 26.8452 9.01099 20.5 9.01099C14.1548 9.01099 9.01099 14.1548 9.01099 20.5C9.01099 26.8452 14.1548 31.989 20.5 31.989ZM20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z" fill="white" />
                            </svg>
                        </div>

                        <div className="info">
                            <h4>Upgrade to PRO</h4>

                            <p>to get access to all features! Connect with Venus World!</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
