"use client";

import "./style.css";

import {
    ArrowCircleUp,
    CalendarBlank,
    CaretDown,
    CaretLeft,
    CaretRight,
    ChartLine,
    CheckCircle,
    CheckSquare,
    Clock,
    CurrencyDollarSimple,
    DotsSixVertical,
    DotsThree,
    DotsThreeVertical,
    File,
    Fingerprint,
    Fire,
    Hamburger,
    PlayCircle,
    PlusCircle,
    Timer,
    WarningCircle,
    XCircle
} from "@phosphor-icons/react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import "react-calendar/dist/Calendar.css";
import "../../../styles/mini-calendar.css";

import { Header } from "@/components/Header";

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    loading: () => <p>Loading...</p>,
    ssr: false,
})

const Calendar = dynamic(() => import('react-calendar'), {
    loading: () => <p>Loading...</p>,
    ssr: false,
})

const lineChartOptionsTotalSpent: any = {
    legend: {
        show: false,
    },

    theme: {
        mode: "light",
    },
    chart: {
        type: "line",

        toolbar: {
            show: false,
        },
    },

    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },

    tooltip: {
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000"
        },
        theme: 'dark',
        x: {
            format: "dd/MM/yy HH:mm",
        },
    },
    grid: {
        show: false,
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                colors: "#A3AED0",
                fontSize: "12px",
                fontWeight: "500",
            },
        },
        type: "text",
        range: undefined,
        categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    },

    yaxis: {
        show: false,
    },
};

const lineChartDataTotalSpent: any = [
    {
        name: "Revenue",
        data: [50, 64, 48, 66, 49, 68],
        color: "#4318FF",
    },
    {
        name: "Profit",
        data: [30, 40, 24, 46, 20, 46],
        color: "#6AD2FF",
    },
];

const barChartDataWeeklyRevenue: any = [
    {
        name: "PRODUCT A",
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
        color: "#6AD2Fa",
    },
    {
        name: "PRODUCT B",
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
        color: "#4318FF",
    },
    {
        name: "PRODUCT C",
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
        color: "#EFF4FB",
    },
];

const barChartOptionsWeeklyRevenue: any = {
    chart: {
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    // colors:['#ff3322','#faf']
    tooltip: {
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000"
        },
        theme: 'dark',
        onDatasetHover: {
            style: {
                fontSize: "12px",
                fontFamily: undefined,
            },
        },
    },
    xaxis: {
        categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
        show: false,
        labels: {
            show: true,
            style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500",
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
        color: "black",
        labels: {
            show: false,
            style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500",
            },
        },
    },

    grid: {
        borderColor: "rgba(163, 174, 208, 0.3)",
        show: true,
        yaxis: {
            lines: {
                show: false,
                opacity: 0.5,
            },
        },
        row: {
            opacity: 0.5,
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    fill: {
        type: "solid",
        colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
    },
    legend: {
        show: false,
    },
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: "20px",
        },
    },
};

const barChartDataDailyTraffic: any = [
    {
        name: "Daily Traffic",
        data: [20, 30, 40, 20, 45, 50, 30],
    },
];

const barChartOptionsDailyTraffic: any = {
    chart: {
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000"
        },
        onDatasetHover: {
            style: {
                fontSize: "12px",
                fontFamily: undefined,
            },
        },
        theme: "dark",
    },
    xaxis: {
        categories: ["00", "04", "08", "12", "14", "16", "18"],
        show: false,
        labels: {
            show: true,
            style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500",
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
        color: "black",
        labels: {
            show: true,
            style: {
                colors: "#CBD5E0",
                fontSize: "14px",
            },
        },
    },
    grid: {
        show: false,
        strokeDashArray: 5,
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "#4318FF",
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: "rgba(67, 24, 255, 1)",
                        opacity: 0.28,
                    },
                ],
            ],
        },
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: "20px",
        },
    },
};

const pieChartOptions: any = {
    labels: ["Your files", "System", "Empty"],
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
    chart: {
        width: "50px",
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            },
        },
    },
    fill: {
        colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
    },
    tooltip: {
        enabled: true,
        theme: "dark",
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000"
        },
    },
};

const pieChartData: any = [63, 25, 12];

export default function Dashboard() {
    return (
        <div className="main">
            <Header
                title="Dashboard"
                href="/admin/dashboard"
            />

            <div className="graphic-dashboard">
                {/* Card Stats */}
                <section className="stats">
                    <div className="stat">
                        <div className="icon">
                            <ChartLine size={24} />
                        </div>

                        <div className="info">
                            <span>Earnings</span>

                            <strong>$350.4</strong>
                        </div>
                    </div>

                    <div className="stat">
                        <div className="icon">
                            <CurrencyDollarSimple size={24} />
                        </div>

                        <div className="info">
                            <span>Spend this month</span>

                            <strong>$642.39</strong>
                        </div>
                    </div>

                    <div className="stat">
                        <div className="info">
                            <span>Sales</span>

                            <strong>$574.34</strong>

                            <p><span>+23%</span> since last month</p>
                        </div>
                    </div>

                    <div className="stat">
                        <div className="country">
                            <Image
                                src="/eua.png"
                                alt="Bandeira dos Estados Unidos"
                                width={50}
                                height={50}
                            />

                            <CaretDown size={24} />
                        </div>

                        <div className="info">
                            <span>Your balance</span>

                            <strong>$1,000</strong>
                        </div>
                    </div>

                    <div className="stat">
                        <div className="icon shadow">
                            <CheckCircle size={24} />
                        </div>

                        <div className="info">
                            <span>New Tasks</span>

                            <strong>154</strong>
                        </div>
                    </div>

                    <div className="stat">
                        <div className="icon">
                            <File size={24} />
                        </div>

                        <div className="info">
                            <span>Total Projects</span>

                            <strong>2935</strong>
                        </div>
                    </div>
                </section>

                {/* Charts */}
                <section className="charts">
                    <div className="graphic-1">
                        <header>
                            <button type="button">
                                <CalendarBlank size={20} />

                                This month
                            </button>

                            <button type="button">
                                <ChartLine size={24} className="purple" />
                            </button>
                        </header>

                        <div className="container">
                            <div className="info">
                                <div>
                                    <h1>$37.5K</h1>

                                    <div className="total-spent">
                                        <span>Total Spent</span>

                                        <div>
                                            <ArrowCircleUp size={16} />

                                            <span>+2.45%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="on-track">
                                    <CheckCircle size={24} weight="fill" />

                                    <span>On track</span>
                                </div>
                            </div>

                            <div className="graphic">
                                <ReactApexChart
                                    options={lineChartOptionsTotalSpent}
                                    series={lineChartDataTotalSpent}
                                    type="line"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="graphic-2">
                        <header>
                            <h2>Weekly Revenue</h2>

                            <button type="button">
                                <ChartLine size={24} className="purple" />
                            </button>
                        </header>

                        <div className="container">
                            <div className="graphic">
                                <ReactApexChart
                                    options={barChartOptionsWeeklyRevenue}
                                    series={barChartDataWeeklyRevenue}
                                    type="bar"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tables & Charts */}
                <section className="tables-charts">
                    {/* Check Table */}
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

                                        Horizon UI PRO
                                    </td>

                                    <td>17.5%</td>

                                    <td>2.458</td>

                                    <td>24.Jan.2021</td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" defaultChecked />

                                        Horizon UI Free
                                    </td>

                                    <td>10.8%</td>

                                    <td>1.485</td>

                                    <td>12.Jun.2021</td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" defaultChecked />

                                        Weekly Update
                                    </td>

                                    <td>21.3%</td>

                                    <td>1.024</td>

                                    <td>5.Jan.2021</td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" defaultChecked />

                                        Venus 3D Asset
                                    </td>

                                    <td>31.5%</td>

                                    <td>858</td>

                                    <td>7.Mar.2021</td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" />

                                        Marketplace
                                    </td>

                                    <td>12.2%</td>

                                    <td>258</td>

                                    <td>17.Dec.2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Traffic Chart & Pie Chart */}
                    <div className="traffic-chart-and-pie-chart">
                        <div className="traffic-chart">
                            <header>
                                <div>
                                    <span>Daily Traffic</span>

                                    <h2>2.579 <span>Visitors</span></h2>
                                </div>

                                <span>
                                    <ArrowCircleUp size={16} />

                                    +2.45%
                                </span>
                            </header>

                            <div className="chart">
                                <ReactApexChart
                                    options={barChartOptionsDailyTraffic}
                                    series={barChartDataDailyTraffic}
                                    type="bar"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>

                        <div className="pie-chart">
                            <header>
                                <h2>Your Pie Chart</h2>

                                <div>
                                    Monthly

                                    <CaretDown size={16} />
                                </div>
                            </header>

                            <div className="chart">
                                <ReactApexChart
                                    options={pieChartOptions}
                                    series={pieChartData}
                                    type="pie"
                                    width="100%"
                                    height="100%"
                                />
                            </div>

                            <div className="content">
                                <div className="info">
                                    <p className="purple">Your Files</p>

                                    <span>63%</span>
                                </div>

                                <hr />

                                <div className="info">
                                    <p className="aqua">System</p>

                                    <span>25%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Complex Table */}
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
                                    <td>Horizon UI PRO</td>

                                    <td className="approved">
                                        <CheckCircle size={24} weight="fill" />

                                        Approved
                                    </td>

                                    <td>18 Apr 2021</td>

                                    <td>
                                        <progress value="60" max="100">60%</progress>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Horizon UI Free</td>

                                    <td className="disable">
                                        <XCircle size={24} weight="fill" />

                                        Disable
                                    </td>

                                    <td>18 Apr 2021</td>

                                    <td>
                                        <progress value="25" max="100">25%</progress>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Marketplace</td>

                                    <td className="error">
                                        <WarningCircle size={24} weight="fill" />

                                        Error
                                    </td>

                                    <td>20 May 2021</td>

                                    <td>
                                        <progress value="80" max="100">80%</progress>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Weekly Updates</td>

                                    <td className="approved">
                                        <CheckCircle size={24} weight="fill" />

                                        Approved
                                    </td>

                                    <td>12 Jul 2021</td>

                                    <td>
                                        <progress value="45" max="100">45%</progress>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Task & Calendar */}
                    <div className="tasks-and-calendar">
                        <div className="tasks">
                            <header>
                                <div>
                                    <div className="icon">
                                        <CheckSquare size={24} weight="fill" />
                                    </div>

                                    <h2>Tasks</h2>
                                </div>

                                <button type="button">
                                    <DotsThree size={24} weight="bold" className="purple" />
                                </button>
                            </header>

                            <div className="list-task">
                                <div className="task">
                                    <div>
                                        <input type="checkbox" />

                                        <h2 className="unchecked">Landing Page Design</h2>
                                    </div>

                                    <DotsSixVertical size={24} weight="bold" />
                                </div>

                                <div className="task">
                                    <div>
                                        <input type="checkbox" defaultChecked />

                                        <h2 className="checked">Dashboard Builder</h2>
                                    </div>

                                    <DotsSixVertical size={24} weight="bold" />
                                </div>

                                <div className="task">
                                    <div>
                                        <input type="checkbox" defaultChecked />

                                        <h2 className="checked">Mobile App Design</h2>
                                    </div>

                                    <DotsSixVertical size={24} weight="bold" />
                                </div>

                                <div className="task">
                                    <div>
                                        <input type="checkbox" />

                                        <h2 className="unchecked">Illustrations</h2>
                                    </div>

                                    <DotsSixVertical size={24} weight="bold" />
                                </div>

                                <div className="task">
                                    <div>
                                        <input type="checkbox" defaultChecked />

                                        <h2 className="checked">Promotional LP</h2>
                                    </div>

                                    <DotsSixVertical size={24} weight="bold" />
                                </div>
                            </div>
                        </div>

                        <div className="calendar">
                            <Calendar
                                prevLabel={<CaretLeft size={24} style={{ marginLeft: "4px" }} />}
                                nextLabel={<CaretRight size={24} style={{ marginLeft: "4px" }} />}
                                view={"month"}
                                defaultValue={new Date()}
                            />
                        </div>
                    </div>
                </section>

                {/* Other Info */}
                <section className="other-info">
                    <div className="course-cta">
                        <header>
                            <div className="icon">
                                <Fire size={24} weight="fill" />
                            </div>

                            <div>
                                <span>Business Design</span>

                                <p>New lession is available</p>
                            </div>
                        </header>

                        <h2>What do you need to know to create better products?</h2>

                        <div className="info">
                            <div>
                                <Timer size={24} className="green" />

                                <span>85 mins</span>
                            </div>

                            <div>
                                <PlayCircle size={24} className="orange" />

                                <span>Video format</span>
                            </div>
                        </div>

                        <div className="started">
                            <div className="avatars">
                                <Image
                                    src="https://github.com/neanderdev.png"
                                    alt="Avatar do GitHub"
                                    width={40}
                                    height={40}
                                />

                                <Image
                                    src="https://github.com/neanderdev.png"
                                    alt="Avatar do GitHub"
                                    width={40}
                                    height={40}
                                />

                                <Image
                                    src="https://github.com/neanderdev.png"
                                    alt="Avatar do GitHub"
                                    width={40}
                                    height={40}
                                />

                                <Image
                                    src="https://github.com/neanderdev.png"
                                    alt="Avatar do GitHub"
                                    width={40}
                                    height={40}
                                />

                                <span className="more">18+</span>
                            </div>

                            <button type="button">Get Started</button>
                        </div>
                    </div>

                    <div className="teams">
                        <header>
                            <h2>Team members</h2>

                            <button type="button">
                                <PlusCircle size={24} weight="fill" className="purple" />
                            </button>
                        </header>

                        <div className="team-members">
                            <div className="card">
                                <div className="info">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={46}
                                        height={46}
                                    />

                                    <div>
                                        <p>Neander de Souza</p>

                                        <span>Creative Director</span>
                                    </div>
                                </div>

                                <DotsThreeVertical size={24} weight="bold" />
                            </div>

                            <div className="card">
                                <div className="info">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={46}
                                        height={46}
                                    />

                                    <div>
                                        <p>Neander de Souza</p>

                                        <span>Product Designer</span>
                                    </div>
                                </div>

                                <DotsThreeVertical size={24} weight="bold" />
                            </div>

                            <div className="card">
                                <div className="info">
                                    <Image
                                        src="https://github.com/neanderdev.png"
                                        alt="Avatar do GitHub"
                                        width={46}
                                        height={46}
                                    />

                                    <div>
                                        <p>Neander de Souza</p>

                                        <span>Junior Graphic Designer</span>
                                    </div>
                                </div>

                                <DotsThreeVertical size={24} weight="bold" />
                            </div>
                        </div>
                    </div>

                    <div className="safety">
                        <Fingerprint size={90} />

                        <h2>Control card security in-app with a tap</h2>

                        <span>Discover our cards benefits, with one tap.</span>

                        <button type="button">Cards</button>
                    </div>

                    <div className="cashback">
                        <div className="background">
                            <div className="icon">
                                <Clock size={24} />
                            </div>

                            <Image
                                src="/logo-starbucks.png"
                                alt="Logo do Starbucks"
                                width={60}
                                height={60}
                            />
                        </div>

                        <h4>Starbucks</h4>

                        <div className="info">
                            <Hamburger size={24} weight="fill" />

                            <span>10% cashback & off</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
