import React from 'react'
import "../assets/styles/pageStyles/works.css"
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Works = () => {
    const [sideTransition, setSideTransition] = useState(null);

    const changeSideTransition = (event) => {
        const { clientX, clientY, target } = event;
        const { left, right, top, bottom, width, height } = target.getBoundingClientRect();

        const xRelativeToBox = clientX - left;
        const yRelativeToBox = clientY - top;

        const percentageX = (xRelativeToBox / width) * 100;
        const percentageY = (yRelativeToBox / height) * 100;

        if (percentageX < 10) {
            setSideTransition('from-left');
        } else if (percentageX > 90) {
            setSideTransition('from-right');
        } else if (percentageY < 10) {
            setSideTransition('from-top');
        } else if (percentageY > 90) {
            setSideTransition('from-bottom');
        }
    };

    const resetSideTransition = () => {
        setSideTransition(null);
    }
    return (
        <>
            <main className="works-main">
                <Navbar />
                <div className="works-main-container">
                    <div className="works-header-container">
                        <div className="transp-sec">
                            WORKS
                        </div>
                        <div className="head">
                            MY <span>PORTFOLIO</span>
                        </div>
                    </div>
                    <section className="portfolio-container">
                        <div
                            className="work-box"
                            onMouseEnter={changeSideTransition}
                            onMouseLeave={resetSideTransition}
                        >
                            <div className={`anime-wall ${sideTransition}`}></div>
                            <img
                                src="https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg"
                                alt=""
                                className="work-img"
                            />
                        </div>
                        <div
                            className="work-box"
                            onMouseEnter={changeSideTransition}
                            onMouseLeave={resetSideTransition}
                        >
                            <div className={`anime-wall ${sideTransition}`}></div>
                            <img
                                src="https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg"
                                alt=""
                                className="work-img"
                            />
                        </div>
                        <div
                            className="work-box"
                            onMouseEnter={changeSideTransition}
                            onMouseLeave={resetSideTransition}
                        >
                            <div className={`anime-wall ${sideTransition}`}></div>
                            <img
                                src="https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg"
                                alt=""
                                className="work-img"
                            />
                        </div>
                        <div
                            className="work-box"
                            onMouseEnter={changeSideTransition}
                            onMouseLeave={resetSideTransition}
                        >
                            <div className={`anime-wall ${sideTransition}`}></div>
                            <img
                                src="https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg"
                                alt=""
                                className="work-img"
                            />
                        </div>
                        <div
                            className="work-box"
                            onMouseEnter={changeSideTransition}
                            onMouseLeave={resetSideTransition}
                        >
                            <div className={`anime-wall ${sideTransition}`}></div>
                            <img
                                src="https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg"
                                alt=""
                                className="work-img"
                            />
                        </div>
                        <div
                            className="work-box"
                            onMouseEnter={changeSideTransition}
                            onMouseLeave={resetSideTransition}
                        >
                            <div className={`anime-wall ${sideTransition}`}></div>
                            <img
                                src="https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg"
                                alt=""
                                className="work-img"
                            />
                        </div>
                        <div
                            className="work-box"
                            onMouseEnter={changeSideTransition}
                            onMouseLeave={resetSideTransition}
                        >
                            <div className={`anime-wall ${sideTransition}`}></div>
                            <img
                                src="https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg"
                                alt=""
                                className="work-img"
                            />
                        </div>
                        <div
                            className="work-box"
                            onMouseEnter={changeSideTransition}
                            onMouseLeave={resetSideTransition}
                        >
                            <div className={`anime-wall ${sideTransition}`}></div>
                            <img
                                src="https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg"
                                alt=""
                                className="work-img"
                            />
                        </div>
                        <div
                            className="work-box"
                            onMouseEnter={changeSideTransition}
                            onMouseLeave={resetSideTransition}
                        >
                            <div className={`anime-wall ${sideTransition}`}></div>
                            <img
                                src="https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg"
                                alt=""
                                className="work-img"
                            />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Works