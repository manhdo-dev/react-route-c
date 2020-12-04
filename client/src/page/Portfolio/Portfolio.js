import React from 'react';

export default class Portlio extends React.Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">
                                <h1 className="text-uppercase text-white font-weight-bold">Portfolio Page</h1>
                                <hr className="divider my-4" />
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/1.jpg">
                            <img className="img-fluid" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/thumbnails/1.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/2.jpg">
                            <img className="img-fluid" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/thumbnails/2.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/3.jpg">
                            <img className="img-fluid" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/thumbnails/3.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/4.jpg">
                            <img className="img-fluid" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/thumbnails/4.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/5.jpg">
                            <img className="img-fluid" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/thumbnails/5.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/6.jpg">
                            <img className="img-fluid" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/thumbnails/6.jpg" alt="" />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
