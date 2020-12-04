import React from 'react';

export default class Services extends React.Component {
    render() {
        return (
            <div>
                <header className="masthead">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center justify-content-center text-center">
                                <div className="col-lg-10 align-self-end">
                                    <h1 className="text-uppercase text-white font-weight-bold">Services Page</h1>
                                    <hr className="divider my-4" />
                                </div>
                                <div className="col-lg-8 align-self-baseline">
                                    <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                                </div>
                            </div>
                        </div>
                    </header>
                <section className="page-section" id="services">
                    <div className="container">
                        <h2 className="text-center mt-0">At Your Service</h2>
                        <hr className="divider my-4" />
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-gem text-primary mb-4" />
                                    <h3 className="h4 mb-2">Sturdy Themes</h3>
                                    <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-laptop-code text-primary mb-4" />
                                    <h3 className="h4 mb-2">Up to Date</h3>
                                    <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-globe text-primary mb-4" />
                                    <h3 className="h4 mb-2">Ready to Publish</h3>
                                    <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-heart text-primary mb-4" />
                                    <h3 className="h4 mb-2">Made with Love</h3>
                                    <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

