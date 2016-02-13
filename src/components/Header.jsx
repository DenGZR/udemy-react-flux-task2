var React = require('react');

var MainHeader = React.createClass({
    render: function() {

        return (
            <header>
                <h1>Country News</h1>
                <ul className="social-icons">
                    <li>
                        <a className="btn btn-social-icon btn-twitter">
                            <span className="fa fa-twitter"></span>
                        </a>
                    </li>
                    <li>
                        <a className="btn btn-social-icon btn-facebook">
                            <span className="fa fa-facebook"></span>
                        </a>
                    </li>
                    <li>
                        <a className="btn btn-social-icon btn-instagram">
                            <span className="fa fa-instagram"></span>
                        </a>
                    </li>
                    <li>
                        <a className="btn btn-social-icon btn-linkedin">
                            <span className="fa fa-linkedin"></span>
                        </a>
                    </li>
                    <li>
                        <a className="btn btn-social-icon btn-envelope-o">
                            <span className="fa fa-envelope-o"></span>
                        </a>
                    </li>
                </ul>
                <h4>Top stories in my country</h4>
            </header>
        );
    }
});

module.exports = MainHeader;