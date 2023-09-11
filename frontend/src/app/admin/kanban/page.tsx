"use client";

import "./style.css";

import {
    Pencil,
    Plus
} from "@phosphor-icons/react";
import Image from "next/image";

import { Header } from "@/components/Header";

export default function KanbanPage() {
    return (
        <div className="main">
            <Header
                title="Kanban"
                href="/admin/kanban"
            />

            <div className="container">
                <section className="backlog">
                    <header>
                        <h2>Backlog</h2>

                        <button type="button">
                            <Plus size={20} className="purple" />
                        </button>
                    </header>

                    <div className="cards">
                        <div className="card">
                            <header>
                                <h4>Option to "use local/server version" feature</h4>

                                <button type="button">
                                    <Pencil size={24} weight="fill" />
                                </button>
                            </header>

                            <p>It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.</p>

                            <footer>
                                <div className="avatars">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />

                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />
                                </div>

                                <button type="button" className="updates">Updates</button>
                            </footer>
                        </div>

                        <div className="card">
                            <header>
                                <h4>Add/modify your own CSS-Selectors</h4>

                                <button type="button">
                                    <Pencil size={24} weight="fill" />
                                </button>
                            </header>

                            <Image
                                src="/cover-1.png"
                                alt="Cover 1"
                                width={350}
                                height={200}
                            />

                            <p>Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.</p>

                            <footer>
                                <div className="avatars">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />

                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />

                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />
                                </div>

                                <button type="button" className="pending">Pending</button>
                            </footer>
                        </div>

                        <div className="card">
                            <header>
                                <h4>Shortcode for templates to display correctly</h4>

                                <button type="button">
                                    <Pencil size={24} weight="fill" />
                                </button>
                            </header>

                            <p>When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.</p>

                            <footer>
                                <div className="avatars">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />
                                </div>

                                <button type="button" className="errors">Errors</button>
                            </footer>
                        </div>
                    </div>
                </section>

                <section className="in-progress">
                    <header>
                        <h2>In progress</h2>

                        <button type="button">
                            <Plus size={20} className="purple" />
                        </button>
                    </header>

                    <div className="cards">
                        <div className="card">
                            <header>
                                <h4>General ideas to improve 'Edit' workflow</h4>

                                <button type="button">
                                    <Pencil size={24} weight="fill" />
                                </button>
                            </header>

                            <p>Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default).</p>

                            <footer>
                                <div className="avatars">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />

                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />

                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />
                                </div>

                                <button type="button" className="pending">Pending</button>
                            </footer>
                        </div>

                        <div className="card">
                            <header>
                                <h4>Shortcode for templates to display correctly</h4>

                                <button type="button">
                                    <Pencil size={24} weight="fill" />
                                </button>
                            </header>

                            <p>When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.</p>

                            <footer>
                                <div className="avatars">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />
                                </div>

                                <button type="button" className="updates">Updates</button>
                            </footer>
                        </div>

                        <div className="card">
                            <header>
                                <h4>[UX Design] - Set the default Library tab</h4>

                                <button type="button">
                                    <Pencil size={24} weight="fill" />
                                </button>
                            </header>

                            <Image
                                src="/cover-2.png"
                                alt="Cover 2"
                                width={350}
                                height={200}
                            />

                            <p>I want to be able to set the default Library tab (or a way to remember the last active tab), especially when I already...</p>

                            <footer>
                                <div className="avatars">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />

                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />
                                </div>

                                <button type="button" className="errors">Errors</button>
                            </footer>
                        </div>
                    </div>
                </section>

                <section className="done">
                    <header>
                        <h2>Done</h2>

                        <button type="button">
                            <Plus size={20} className="purple" />
                        </button>
                    </header>

                    <div className="cards">
                        <div className="card">
                            <header>
                                <h4>Copy/Paste elements between pages</h4>

                                <button type="button">
                                    <Pencil size={24} weight="fill" />
                                </button>
                            </header>

                            <p>We can only copy/paste elements (or group of elements) in the same page, which is quite limited.</p>

                            <footer>
                                <div className="avatars">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />
                                </div>

                                <button type="button" className="done">Done</button>
                            </footer>
                        </div>

                        <div className="card">
                            <header>
                                <h4>Remove Extra DIV for each container added</h4>

                                <button type="button">
                                    <Pencil size={24} weight="fill" />
                                </button>
                            </header>

                            <p>I still hope there won't have an extra div for each container we added. It should be something for better styling...</p>

                            <footer>
                                <div className="avatars">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />

                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />

                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />
                                </div>

                                <button type="button" className="done">Done</button>
                            </footer>
                        </div>

                        <div className="card">
                            <header>
                                <h4>Add Figma files for the Library design blocks</h4>

                                <button type="button">
                                    <Pencil size={24} weight="fill" />
                                </button>
                            </header>

                            <p>I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads...</p>

                            <footer>
                                <div className="avatars">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />

                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={20}
                                        height={20}
                                    />
                                </div>

                                <button type="button" className="done">Done</button>
                            </footer>
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

