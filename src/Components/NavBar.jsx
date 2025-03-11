import { useState } from "react";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div>
            {/* Bouton de toggling de la sidebar */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } sm:translate-x-0 bg-gray-50 dark:bg-gray-800`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a
                                href="https://julesmukadi.me"
                                className="flex items-center justify-center mb-10 p-2 text-gray-900 transition duration-300 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className="size-10 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                    <path fill="#399bdf" d="M7.873,17.805c-0.153-0.249-0.569-0.778-0.467-1.112c0.068-0.225,0.294-0.125,0.53-0.105 c0.939,0.082,1.763,0.039,2.502-0.623c0.683-0.613,1.013-1.562,0.848-2.462c-0.024-0.133-0.247-1.128-0.343-1.147 c0.061,0.012-0.114,0.199-0.114,0.193c0.001,0.018-0.076,0.021-0.079,0.016c0.001,0.001,0.259-0.003,0.289-0.002 c0.574,0.023,1.175,0.202,1.788,0.116c0.807-0.113,1.44-0.69,1.568-1.508c0.068-0.44-0.032-0.865-0.125-1.294 c-0.024-0.108-0.014-0.33-0.074-0.268c0.025-0.026,0.087-0.039,0.122-0.046c0.336-0.067,0.692,0.103,0.999,0.213 c0.481,0.173,0.964,0.344,1.482,0.357c2.251,0.059,3.732-2.616,2.061-4.313c-0.904-0.919-2.318,0.496-1.414,1.414 c0.449,0.456-0.171,0.929-0.647,0.899c-0.862-0.055-1.576-0.635-2.48-0.571c-0.878,0.062-1.734,0.527-2.009,1.409 c-0.13,0.416-0.083,0.848-0.004,1.268c0.049,0.257,0.032,0.878,0.301,0.448c-0.017,0.028-0.035,0.019-0.137,0.024 c-0.141,0.007-0.286-0.011-0.425-0.027c-0.251-0.028-0.59-0.092-0.884-0.115c-0.687-0.055-1.395,0.12-1.831,0.687 c-0.26,0.338-0.396,0.762-0.377,1.19c0.022,0.509,0.308,0.928,0.371,1.417c0.09,0.707-0.569,0.806-1.104,0.753 c-1.04-0.103-2.075,0.066-2.578,1.101c-0.518,1.065-0.066,2.16,0.505,3.095C6.817,19.911,8.547,18.907,7.873,17.805L7.873,17.805z"></path><path fill="#fd2923" d="M42.234,40.573c-0.039-1.045-0.081-2.089-0.121-3.134c-0.081-2.089-0.161-4.179-0.242-6.268 c-0.078-2.028-0.046-4.093-0.33-6.108c-0.256-1.817-0.985-3.433-2.192-4.893c-1.196-1.446-2.664-2.679-4.081-3.937 c-1.632-1.449-3.265-2.898-4.897-4.346c-0.811-0.719-1.618-1.442-2.432-2.158c-0.63-0.555-1.301-1.112-2.104-1.449 c-1.784-0.75-3.323,0.128-4.624,1.236c-3.31,2.82-6.59,5.672-9.868,8.523c-1.314,1.143-2.632,2.369-3.326,3.932 c-0.784,1.764-0.561,3.746-0.507,5.604c0.124,4.223,0.249,8.445,0.373,12.668c0.021,0.721,0.042,1.442,0.064,2.163 C7.945,42.41,7.94,42.413,7.939,42.42c-0.111,0.436-0.069,0.818,0.077,1.148c0.004,0.009,0.009,0.017,0.014,0.026 c0.441,0.947,1.762,1.458,2.906,1.576c2.122,0.219,4.279,0.289,6.411,0.402c4.333,0.231,8.688,0.346,13.018,0.003 c2.114-0.168,4.222-0.442,6.294-0.863c1.03-0.209,2.06-0.445,3.063-0.743c0.743-0.22,1.507-0.521,1.994-1.105 C42.268,42.2,42.264,41.369,42.234,40.573z"></path><path fill="#fff" d="M35.771,29.188c-3.256-0.976-6.768-0.734-10.133-0.635c-0.038-3.533-0.084-7.065-0.144-10.598 c-0.033-1.928-3.033-1.934-3,0c0.06,3.567,0.107,7.135,0.145,10.703c-2.801,0.098-5.601,0.224-8.399,0.398 c-1.918,0.12-1.931,3.121,0,3c2.807-0.175,5.616-0.302,8.426-0.401c0.029,3.179,0.055,6.357,0.067,9.536 c0.007,1.93,3.007,1.934,3,0c-0.012-3.215-0.038-6.429-0.067-9.644c3.089-0.116,6.34-0.355,9.308,0.534 C36.826,32.636,37.618,29.742,35.771,29.188z"></path><path fill="#231f20" d="M12.28,26.637c-0.049-2.754,1.155-5.411,3.242-7.204c0.489-0.42-0.221-1.125-0.707-0.707 c-2.275,1.955-3.589,4.915-3.535,7.911C11.292,27.28,12.292,27.282,12.28,26.637L12.28,26.637z"></path><path fill="#231f20" d="M38.307,34.761c0.103,1.116,0.118,2.236,0.032,3.354c-0.072,0.928-0.107,2.102-0.761,2.835 c-0.541,0.605-1.361,0.874-2.124,1.068c-1.043,0.265-2.112,0.449-3.174,0.62c-0.634,0.102-0.365,1.066,0.266,0.964 c1.14-0.183,2.296-0.372,3.409-0.683c0.886-0.247,1.799-0.631,2.406-1.35c0.703-0.832,0.828-1.932,0.935-2.977 c0.13-1.274,0.129-2.556,0.011-3.831C39.249,34.126,38.248,34.12,38.307,34.761L38.307,34.761z"></path><path fill="#ff9600" d="M35.782,6.434c-0.388,0.525-0.508,1.165-0.591,1.797c-0.078,0.594-0.109,1.191-0.054,1.789 c0.113,1.223,0.481,2.4,1.235,3.383c1.405,1.832,3.681,2.559,5.832,3.107c1.248,0.318,1.78-1.611,0.532-1.929 c-1.665-0.424-3.497-0.903-4.668-2.243c-0.537-0.615-0.83-1.446-0.924-2.25c-0.094-0.803-0.136-1.966,0.365-2.644 c0.321-0.435,0.072-1.116-0.359-1.368C36.641,5.777,36.103,5.998,35.782,6.434L35.782,6.434z"></path><path fill="#ff9600" d="M39.141,7.549c-0.082,0.559-0.083,1.111,0.088,1.657c0.162,0.516,0.43,0.984,0.798,1.381 c0.675,0.728,1.726,1.148,2.717,1.082c0.267-0.018,0.514-0.099,0.707-0.293c0.173-0.173,0.304-0.458,0.293-0.707 c-0.023-0.512-0.441-1.037-1-1c-0.164,0.011-0.327,0.006-0.49-0.013c0.089,0.012,0.177,0.024,0.266,0.036 c-0.223-0.031-0.437-0.088-0.645-0.172c0.08,0.034,0.159,0.067,0.239,0.101c-0.207-0.088-0.399-0.198-0.578-0.334 c0.067,0.052,0.135,0.104,0.202,0.156c-0.166-0.131-0.313-0.278-0.443-0.445c0.052,0.067,0.104,0.135,0.156,0.202 c-0.128-0.171-0.232-0.355-0.316-0.552c0.034,0.08,0.067,0.159,0.101,0.239c-0.086-0.213-0.144-0.431-0.175-0.659 c0.012,0.089,0.024,0.177,0.036,0.266c-0.025-0.212-0.025-0.423,0.002-0.636c-0.012,0.089-0.024,0.177-0.036,0.266 c0.002-0.015,0.004-0.03,0.007-0.045c0.041-0.277,0.046-0.519-0.101-0.771c-0.121-0.207-0.359-0.405-0.598-0.46 c-0.256-0.058-0.543-0.046-0.771,0.101C39.397,7.083,39.178,7.298,39.141,7.549L39.141,7.549z"></path><path fill="#ff9600" d="M43.702,8.362c1.287,0,1.289-2,0-2C42.415,6.362,42.413,8.362,43.702,8.362L43.702,8.362z"></path>
                                </svg>

                                <span className="ms-3 text-xl font-bold">Urgences</span>
                            </a>
                            <div className=" flex justify-center items-center">
                            <input className="h-10 border rounded-lg" type="search" name="" id="" />
                            </div>
                        </li>

                        {/* Users */}
                        <li className="border border-gray-200 rounded-lg dark:border-gray-700  hover:outline-2 outline-offset-2 outline-sky-700">
                            <div
                                href=""
                                className="flex items-center p-2 cursor-grab text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-sky-900 group transition duration-300"
                            >
                                <div className="bg-gray-300 rounded-full dark:bg-gray-600">
                                    <img
                                        className="w-10 h-10 rounded-full"
                                        src="https://avatars.githubusercontent.com/u/146131402?s=96&v=4"
                                        alt="Jules MUKADI"
                                    />
                                </div>
                                <div className="">
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        Jules MUKADI
                                    </span>
                                </div>
                                <div className="">
                                    <div className="inline-flex items-center justify-center cursor-pointer p-2 ms-3 bg-gray-100 rounded-full dark:bg-gray-700 border border-gray-500 dark:border-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg></div>
                                </div>
                            </div>
                        </li>

                        <li className="border border-gray-200 rounded-lg dark:border-gray-700  hover:outline-2 outline-offset-2 outline-sky-700">
                            <div
                                href=""
                                className="flex items-center p-2 cursor-grab text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-sky-900 group transition duration-300"
                            >
                                <div className="bg-gray-300 rounded-full dark:bg-gray-600">
                                    <img
                                        className="w-10 h-10 rounded-full"
                                        src="https://avatars.githubusercontent.com/u/146131402?s=96&v=4"
                                        alt="Jules MUKADI"
                                    />
                                </div>
                                <div className="">
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        Jules MUKADI
                                    </span>
                                </div>
                                <div className="">
                                    <div className="inline-flex items-center justify-center cursor-pointer p-2 ms-3 bg-gray-100 rounded-full dark:bg-gray-700 border border-gray-500 dark:border-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div
                        id="dropdown-cta"
                        className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
                        role="alert"
                    >
                        <div className="flex items-center mb-3">
                            <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-white dark:text-orange-800">
                                Beta
                            </span>
                            <button
                                type="button"
                                className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                                data-dismiss-target="#dropdown-cta"
                                aria-label="Close"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="w-2.5 h-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                            </button>
                        </div>
                        <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
                            L&apos;application est encore en phase de test. Des améliorations
                            sont à venir. Merci pour votre patience ! 💙
                        </p>
                        <a
                            className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                            href="https://julesmukadi.me"
                        >
                            Laisser un commetaire
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Navbar;
