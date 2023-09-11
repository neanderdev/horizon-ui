"use client";

import "./style.css";

import {
    CloudCheck,
    DotsThreeOutline,
    FileArrowUp,
    Pencil
} from "@phosphor-icons/react";
import Image from "next/image";

import { Header } from "@/components/Header";

export default function Profile() {
    return (
        <div className="main">
            <Header
                title="Profile"
                href="/admin/profile"
            />

            <div className="container">
                <section className="info">
                    <div className="profile">
                        <div className="capa">
                            <Image
                                src="https://github.com/neanderdev.png"
                                alt="Avatar do GitHub"
                                width={80}
                                height={80}
                            />
                        </div>

                        <div className="user">
                            <span>Adela Parkson</span>

                            <p>Product Designer</p>
                        </div>

                        <div className="user-info">
                            <div>
                                <span>17</span>

                                <p>Posts</p>
                            </div>

                            <div>
                                <span>9.7k</span>

                                <p>Followers</p>
                            </div>

                            <div>
                                <span>274</span>

                                <p>Followers</p>
                            </div>
                        </div>
                    </div>

                    <div className="storage">
                        <button type="button">
                            <DotsThreeOutline size={24} weight="fill" />
                        </button>

                        <div>
                            <div className="icon">
                                <CloudCheck size={40} />
                            </div>

                            <span>Your storage</span>

                            <p>Supervise your drive space in the easiest way</p>
                        </div>

                        <div className="bar-progress">
                            <div>
                                <span>25.6 Gb</span>

                                <span>50 Gb</span>
                            </div>

                            <progress value="60.5" max="100">60.5%</progress>
                        </div>
                    </div>

                    <div className="complete-your-profile">
                        <div
                            className="drop-zone"
                            onClick={() => {
                                const dropZoneElement = document.getElementsByClassName('drop-zone')[0] as any;

                                dropZoneElement.children[1].click();
                            }}
                            onDragOver={(event) => {
                                event.preventDefault();

                                const dropZoneElement = document.getElementsByClassName('drop-zone')[0] as any;

                                dropZoneElement.classList.add("drop-zone--over");
                            }}
                            onDragLeave={(event) => {
                                const dropZoneElement = document.getElementsByClassName('drop-zone')[0] as any;

                                dropZoneElement.classList.remove("drop-zone--over");
                            }}
                            onDragEnd={(event) => {
                                const dropZoneElement = document.getElementsByClassName('drop-zone')[0] as any;

                                dropZoneElement.classList.remove("drop-zone--over");
                            }}
                            onDrop={(event) => {
                                event.preventDefault();

                                if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
                                    const reader = new FileReader();

                                    reader.addEventListener("load", () => console.log(reader.result), false);
                                    reader.readAsDataURL(event.dataTransfer.files[0]);
                                }

                                const dropZoneElement = document.getElementsByClassName('drop-zone')[0] as any;

                                dropZoneElement.classList.remove("drop-zone--over");
                            }}
                        >
                            <div className="drop-zone__prompt">
                                <FileArrowUp size={40} weight="fill" />

                                <span>Upload Files</span>

                                <p>PNG, JPG and GIF files are allowed</p>
                            </div>

                            <input
                                type="file"
                                name="upload"
                                className="drop-zone__input"
                                onChange={(event) => {
                                    if (event.target.files && event.target.files.length > 0) {
                                        const reader = new FileReader();

                                        reader.addEventListener("load", () => console.log(reader.result), false);
                                        reader.readAsDataURL(event.target.files[0]);

                                        event.target.value = '';
                                    }
                                }}
                            />
                        </div>

                        <div className="info">
                            <div>
                                <span>Complete your profile</span>

                                <p>Stay on the pulse of distributed projects with an anline whiteboard to plan, coordinate and discuss</p>
                            </div>

                            <button type="button">Publish now</button>
                        </div>
                    </div>
                </section>

                <section className="other-info">
                    <div className="all-projects">
                        <h4>All Projects</h4>

                        <p>Here you can find more details about your projects. Keep you user engaged by providing meaningful information.</p>

                        <div className="cards">
                            <div className="card">
                                <div>
                                    <Image
                                        src="/project-1.png"
                                        alt="Projeto 1"
                                        width={80}
                                        height={80}
                                    />

                                    <div className="info">
                                        <span>Technology behind the Blockchain</span>

                                        <p>Project #1 • <a href="">See project details</a></p>
                                    </div>
                                </div>

                                <button type="button">
                                    <Pencil size={20} weight="fill" />
                                </button>
                            </div>

                            <div className="card">
                                <div>
                                    <Image
                                        src="/project-2.png"
                                        alt="Projeto 2"
                                        width={80}
                                        height={80}
                                    />

                                    <div className="info">
                                        <span>Greatest way to a good Economy</span>

                                        <p>Project #2 • <a href="">See project details</a></p>
                                    </div>
                                </div>

                                <button type="button">
                                    <Pencil size={20} weight="fill" />
                                </button>
                            </div>

                            <div className="card">
                                <div>
                                    <Image
                                        src="/project-3.png"
                                        alt="Projeto 3"
                                        width={80}
                                        height={80}
                                    />

                                    <div className="info">
                                        <span>Most essential tips for Burnout</span>

                                        <p>Project #3 • <a href="">See project details</a></p>
                                    </div>
                                </div>

                                <button type="button">
                                    <Pencil size={20} weight="fill" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="general-information">
                        <h4>General Information</h4>

                        <p>As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all...</p>

                        <div className="cards">
                            <div className="card">
                                <span>Education</span>

                                <p>Stanford University</p>
                            </div>

                            <div className="card">
                                <span>Languages</span>

                                <p>English, Spanish, Italian</p>
                            </div>

                            <div className="card">
                                <span>Department</span>

                                <p>Product Design</p>
                            </div>

                            <div className="card">
                                <span>Work History</span>

                                <p>Google, Facebook</p>
                            </div>

                            <div className="card">
                                <span>Organization</span>

                                <p>Simmmple Web LLC</p>
                            </div>

                            <div className="card">
                                <span>Birthday</span>

                                <p>20 July 1986</p>
                            </div>
                        </div>
                    </div>

                    <div className="notifications">
                        <header>
                            <h4>Notifications</h4>

                            <button type="button">
                                <DotsThreeOutline size={20} weight="bold" className="purple" />
                            </button>
                        </header>

                        <div className="items">
                            <div className="item">
                                <label className="switch">
                                    <input type="checkbox" defaultChecked />

                                    <span className="slider round"></span>
                                </label>

                                <span>Item update notifications</span>
                            </div>

                            <div className="item">
                                <label className="switch">
                                    <input type="checkbox" />

                                    <span className="slider round"></span>
                                </label>

                                <span>Item comment notifications</span>
                            </div>

                            <div className="item">
                                <label className="switch">
                                    <input type="checkbox" defaultChecked />

                                    <span className="slider round"></span>
                                </label>

                                <span>Buyer review notifications</span>
                            </div>

                            <div className="item">
                                <label className="switch">
                                    <input type="checkbox" />

                                    <span className="slider round"></span>
                                </label>

                                <span>Rating reminders notifications</span>
                            </div>

                            <div className="item">
                                <label className="switch">
                                    <input type="checkbox" />

                                    <span className="slider round"></span>
                                </label>

                                <span>Meetups near you notifications</span>
                            </div>

                            <div className="item">
                                <label className="switch">
                                    <input type="checkbox" defaultChecked />

                                    <span className="slider round"></span>
                                </label>

                                <span>Company news notifications</span>
                            </div>

                            <div className="item">
                                <label className="switch">
                                    <input type="checkbox" defaultChecked />

                                    <span className="slider round"></span>
                                </label>

                                <span>New launches and projects</span>
                            </div>

                            <div className="item">
                                <label className="switch">
                                    <input type="checkbox" />

                                    <span className="slider round"></span>
                                </label>

                                <span>Monthly product changes</span>
                            </div>

                            <div className="item">
                                <label className="switch">
                                    <input type="checkbox" />

                                    <span className="slider round"></span>
                                </label>

                                <span>Subscribe to newsletter</span>
                            </div>

                            <div className="item">
                                <label className="switch">
                                    <input type="checkbox" defaultChecked />

                                    <span className="slider round"></span>
                                </label>

                                <span>Email me when someone follows me</span>
                            </div>
                        </div>
                    </div>
                </section>
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


