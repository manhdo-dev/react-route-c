import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                 <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">
                                <h1 className="text-uppercase text-white font-weight-bold">Contact Page</h1>
                                <hr className="divider my-4" />
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="mt-0">Let's Get In Touch!</h2>
                                <hr className="divider my-4" />
                                <p className="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                                <div>+1 (555) 123-4567</div>
                            </div>
                            <div className="col-lg-4 mr-auto text-center">
                                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                                <a className="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
