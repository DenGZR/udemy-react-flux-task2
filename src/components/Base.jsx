var React = require('react');
var News = require('./News.jsx');
var Link = require('react-router').Link;

var Base = React.createClass({

    render: function() {

        var children,
            style;

        style = {
            contentWrap:{
                position: 'relative'               
            },
            linkListUl:{
                position: 'absolute',
                top: '-40px',
                right: '0'
            },
            linkListLi:{
                display: 'inline-block',
                padding: '10px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#fff'
            },
            linkListA:{
                color: '#fff'
            }

        };
        children = this.props.children ? this.props.children : <News/>;

        return (
            <div className="content-wrap" style={style.contentWrap}>
                <ul className="link-list" style={style.linkListUl}>
                    <li style={style.linkListLi}><Link to="/news" style={style.linkListA}>News</Link></li>
                    <li style={style.linkListLi}><Link to="/photo" style={style.linkListA}>Photo</Link></li>
                </ul>
                {children}
            </div>
        )
    }
});
module.exports = Base;