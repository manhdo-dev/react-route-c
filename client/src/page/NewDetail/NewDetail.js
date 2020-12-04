import React from 'react';

class NewDetail extends React.Component {
    render() {
        return (
            <div>
                <header className="masthead">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center justify-content-center text-center">
                                <div className="col-lg-10 align-self-end">
                                    <h1 className="text-uppercase text-white font-weight-bold">New Detail Page</h1>
                                    <hr className="divider my-4" />
                                </div>
                                <div className="col-lg-8 align-self-baseline">
                                    <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                                </div>
                            </div>
                        </div>
                    </header>
                <div className="jumbotron jumbotron-fluid">
                    <img class="card-img-top" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/1.jpg" alt=""></img>
                    <div className="container">
                        <h1 className="display-4">New Detail</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>
                
        );
    }
}

export default NewDetail;