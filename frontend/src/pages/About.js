import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <section id="about" style={{marginTop: 56}}>
                    <div className="container px-4">
                        <div className="row gx-4 justify-content-center">
                            <div className="col-lg-8">
                                <h2>About this page</h2>
                                <p className="lead">This is a great place to talk about your webpage. This template is
                                    purposefully unstyled so you can use it as a boilerplate or starting point for you
                                    own landing page designs! This template features:</p>
                                <ul>
                                    <li>Clickable nav links that smooth scroll to page sections</li>
                                    <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                                    <li>Bootstrap's scrollspy feature which highlights which section of the page you're
                                        on in the navbar
                                    </li>
                                    <li>Minimal custom CSS so you are free to explore your own unique design options
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About


