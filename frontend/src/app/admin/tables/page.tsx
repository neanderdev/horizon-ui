"use client";

import "./style.css";

import {
    AndroidLogo,
    AppleLogo,
    CheckCircle,
    DotsThree,
    WarningCircle,
    WindowsLogo,
    XCircle
} from "@phosphor-icons/react";

import { Header } from "@/components/Header";

export default function Tables() {
    return (
        <div className="main">
            <Header
                title="Tables"
                href="/admin/tables"
            />

            <div className="container">
                <div className="development-table">
                    <header>
                        <h2>Development Table</h2>

                        <button type="button">
                            <DotsThree size={24} weight="bold" className="purple" />
                        </button>
                    </header>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>

                                <th>System OS</th>

                                <th>Date</th>

                                <th>Progress</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Marketplace</td>

                                <td>
                                    <div className="system-os">
                                        <AppleLogo size={16} weight="fill" />

                                        <AndroidLogo size={16} weight="fill" />

                                        <WindowsLogo size={16} weight="fill" />
                                    </div>
                                </td>

                                <td>12.Jan.2021</td>

                                <td>
                                    75.5%

                                    <progress value="75.5" max="100">75.5%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Venus DB Pro</td>

                                <td>
                                    <div className="system-os">
                                        <AppleLogo size={16} weight="fill" />
                                    </div>
                                </td>

                                <td>21.Feb.2021</td>

                                <td>
                                    35.4%

                                    <progress value="35.4" max="100">35.4%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Venus DS</td>

                                <td>
                                    <div className="system-os">
                                        <AppleLogo size={16} weight="fill" />

                                        <AndroidLogo size={16} weight="fill" />

                                        <WindowsLogo size={16} weight="fill" />
                                    </div>
                                </td>

                                <td>13.Mar.2021</td>

                                <td>
                                    25%

                                    <progress value="25" max="100">25%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Venus 3D Asset</td>

                                <td>
                                    <div className="system-os">
                                        <AppleLogo size={16} weight="fill" />

                                        <WindowsLogo size={16} weight="fill" />
                                    </div>
                                </td>

                                <td>24.Jan.2021</td>

                                <td>
                                    100%

                                    <progress value="100" max="100">100%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Uranus</td>

                                <td>
                                    <div className="system-os">
                                        <AndroidLogo size={16} weight="fill" />

                                        <WindowsLogo size={16} weight="fill" />
                                    </div>
                                </td>

                                <td>21.Sep.2021</td>

                                <td>
                                    12.2%

                                    <progress value="12.2" max="100">12.2%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Uranus</td>

                                <td>
                                    <div className="system-os">
                                        <AndroidLogo size={16} weight="fill" />

                                        <WindowsLogo size={16} weight="fill" />
                                    </div>
                                </td>

                                <td>21.Sep.2021</td>

                                <td>
                                    12.2%

                                    <progress value="12.2" max="100">12.2%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Uranus</td>

                                <td>
                                    <div className="system-os">
                                        <AndroidLogo size={16} weight="fill" />

                                        <WindowsLogo size={16} weight="fill" />
                                    </div>
                                </td>

                                <td>21.Sep.2021</td>

                                <td>
                                    12.2%

                                    <progress value="12.2" max="100">12.2%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Uranus</td>

                                <td>
                                    <div className="system-os">
                                        <AndroidLogo size={16} weight="fill" />

                                        <WindowsLogo size={16} weight="fill" />
                                    </div>
                                </td>

                                <td>21.Sep.2021</td>

                                <td>
                                    12.2%

                                    <progress value="12.2" max="100">12.2%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Uranus</td>

                                <td>
                                    <div className="system-os">
                                        <AndroidLogo size={16} weight="fill" />

                                        <WindowsLogo size={16} weight="fill" />
                                    </div>
                                </td>

                                <td>21.Sep.2021</td>

                                <td>
                                    12.2%

                                    <progress value="12.2" max="100">12.2%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Uranus</td>

                                <td>
                                    <div className="system-os">
                                        <AndroidLogo size={16} weight="fill" />

                                        <WindowsLogo size={16} weight="fill" />
                                    </div>
                                </td>

                                <td>21.Sep.2021</td>

                                <td>
                                    12.2%

                                    <progress value="12.2" max="100">12.2%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Uranus</td>

                                <td>
                                    <div className="system-os">
                                        <AndroidLogo size={16} weight="fill" />

                                        <WindowsLogo size={16} weight="fill" />
                                    </div>
                                </td>

                                <td>21.Sep.2021</td>

                                <td>
                                    12.2%

                                    <progress value="12.2" max="100">12.2%</progress>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="check-table">
                    <header>
                        <h2>Check Table</h2>

                        <button type="button">
                            <DotsThree size={24} weight="bold" className="purple" />
                        </button>
                    </header>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>

                                <th>Progress</th>

                                <th>Quantity</th>

                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" />

                                    Marketplace
                                </td>

                                <td>17.5%</td>

                                <td>2.458</td>

                                <td>24.Jan.2021</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" defaultChecked />

                                    Venus PRO
                                </td>

                                <td>10.8%</td>

                                <td>1.485</td>

                                <td>12.Jun.2021</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" defaultChecked />

                                    Uranus Kit
                                </td>

                                <td>21.3%</td>

                                <td>1.024</td>

                                <td>5.Jan.2021</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" defaultChecked />

                                    Venus DS
                                </td>

                                <td>31.5%</td>

                                <td>858</td>

                                <td>7.Mar.2021</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" />

                                    Venus 3D Asset
                                </td>

                                <td>12.2%</td>

                                <td>258</td>

                                <td>17.Dec.2021</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" />

                                    Venus 3D Asset
                                </td>

                                <td>12.2%</td>

                                <td>258</td>

                                <td>17.Dec.2021</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" />

                                    Venus 3D Asset
                                </td>

                                <td>12.2%</td>

                                <td>258</td>

                                <td>17.Dec.2021</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" />

                                    Venus 3D Asset
                                </td>

                                <td>12.2%</td>

                                <td>258</td>

                                <td>17.Dec.2021</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" />

                                    Venus 3D Asset
                                </td>

                                <td>12.2%</td>

                                <td>258</td>

                                <td>17.Dec.2021</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" />

                                    Venus 3D Asset
                                </td>

                                <td>12.2%</td>

                                <td>258</td>

                                <td>17.Dec.2021</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" />

                                    Venus 3D Asset
                                </td>

                                <td>12.2%</td>

                                <td>258</td>

                                <td>17.Dec.2021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="column-table">
                    <header>
                        <h2>4-Column Table</h2>

                        <button type="button">
                            <DotsThree size={24} weight="bold" className="purple" />
                        </button>
                    </header>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>

                                <th>Progress</th>

                                <th>Quantity</th>

                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Marketplace</td>

                                <td>17.5%</td>

                                <td>2.458</td>

                                <td>24.Jan.2021</td>
                            </tr>

                            <tr>
                                <td>Venus PRO</td>

                                <td>10.8%</td>

                                <td>1.485</td>

                                <td>12.Jun.2021</td>
                            </tr>

                            <tr>
                                <td>Uranus Kit</td>

                                <td>21.3%</td>

                                <td>1.024</td>

                                <td>5.Jan.2021</td>
                            </tr>

                            <tr>
                                <td>Venus DS</td>

                                <td>31.5%</td>

                                <td>858</td>

                                <td>7.Mar.2021</td>
                            </tr>

                            <tr>
                                <td>Venus 3D Asset</td>

                                <td>12.2%</td>

                                <td>258</td>

                                <td>17.Dec.2021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="complex-table">
                    <header>
                        <h2>Complex Table</h2>

                        <button type="button">
                            <DotsThree size={24} weight="bold" className="purple" />
                        </button>
                    </header>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>

                                <th>Status</th>

                                <th>Date</th>

                                <th>Progress</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Marketplace</td>

                                <td className="approved">
                                    <CheckCircle size={24} weight="fill" />

                                    Approved
                                </td>

                                <td>24.Jan.2021</td>

                                <td>
                                    <progress value="60" max="100">60%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Venus Dashboard Builder</td>

                                <td className="disable">
                                    <XCircle size={24} weight="fill" />

                                    Disable
                                </td>

                                <td>30.Dec.2021</td>

                                <td>
                                    <progress value="25" max="100">25%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Venus Design System</td>

                                <td className="error">
                                    <WarningCircle size={24} weight="fill" />

                                    Error
                                </td>

                                <td>20.May.2021</td>

                                <td>
                                    <progress value="80" max="100">80%</progress>
                                </td>
                            </tr>

                            <tr>
                                <td>Uranus</td>

                                <td className="approved">
                                    <CheckCircle size={24} weight="fill" />

                                    Approved
                                </td>

                                <td>12.Jun.2021</td>

                                <td>
                                    <progress value="45" max="100">45%</progress>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
