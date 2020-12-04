import React from 'react';

class News extends React.Component {
    render() {
        return (
            <div>
                <header className="masthead">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center justify-content-center text-center">
                                <div className="col-lg-10 align-self-end">
                                    <h1 className="text-uppercase text-white font-weight-bold">News Page</h1>
                                    <hr className="divider my-4" />
                                </div>
                                <div className="col-lg-8 align-self-baseline">
                                    <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                                </div>
                            </div>
                        </div>
                    </header>
                <div className="container">
                    <h2 className="text-center mt-5">List News</h2>
                    <div className="row mt-3">
                        <div className="col-4 mt-2 mb-2">
                        <div className="card-deck">
                            <div className="card">
                            <img className="card-img-top" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/1.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">New One</h4>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quia ab quidem harum tenetur modi eum mollitia error dignissimos consectetur, doloremque optio unde alias maxime natus, consequatur minima laudantium omnis!</p>
                                <a className="btn btn-primary btn-xl js-scroll-trigger" href="/news-detail" style={{color: 'white'}}>Go somewhere</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-4 mt-2 mb-2">
                        <div className="card-deck">
                            <div className="card">
                            <img className="card-img-top" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/1.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">New Two</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio natus itaque velit alias repudiandae quidem, dolorem aut hic, vel dolores voluptatem suscipit ducimus esse. Magni aliquid modi odit exercitationem.</p>
                                <a className="btn btn-primary btn-xl js-scroll-trigger" href="/news-detail" style={{color: 'white'}}>Go somewhere</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-4 mt-2 mb-2">
                        <div className="card-deck">
                            <div className="card">
                            <img className="card-img-top" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/1.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">New Three</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio natus itaque velit alias repudiandae quidem, dolorem aut hic, vel dolores voluptatem suscipit ducimus esse. Magni aliquid modi odit exercitationem.</p>
                                <a className="btn btn-primary btn-xl js-scroll-trigger" href="/news-detail" style={{color: 'white'}}>Go somewhere</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-4 mt-2 mb-2">
                        <div className="card-deck">
                            <div className="card">
                            <img className="card-img-top" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/1.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">New Four</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio natus itaque velit alias repudiandae quidem, dolorem aut hic, vel dolores voluptatem suscipit ducimus esse. Magni aliquid modi odit exercitationem.</p>
                                <a className="btn btn-primary btn-xl js-scroll-trigger" href="/news-detail" style={{color: 'white'}}>Go somewhere</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-4 mt-2 mb-2">
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/1.jpg" alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">New Five</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio natus itaque velit alias repudiandae quidem, dolorem aut hic, vel dolores voluptatem suscipit ducimus esse. Magni aliquid modi odit exercitationem.</p>
                                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="/news-detail" style={{color: 'white'}}>Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-2 mb-2">
                            <div className="card-deck">
                                <div className="card">
                                    <img className="card-img-top" src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/1.jpg" alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">New Six</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio natus itaque velit alias repudiandae quidem, dolorem aut hic, vel dolores voluptatem suscipit ducimus esse. Magni aliquid modi odit exercitationem.</p>
                                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="/news-detail" style={{color: 'white'}}>Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default News;
