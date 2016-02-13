var React = require('react');
var classNames = require('classnames');

var PhotoImg = React.createClass({

    getInitialState: function () {
        return {
            toggle: false
        };
    },

    clickHandler: function () {
        this.setState({ toggle: !this.state.toggle })
    },

    render: function() {

        var pach = function(dirName , fileName){
            return 'img/' + dirName + '/' + fileName;
        };
        var fileDir = this.props.data.pachImages;
        var imgName = this.props.data.imgName;
        var clsName = classNames({
            'col-xs-6': true,
            'col-md-3': true,
            'popup' : this.state.toggle
        });

        return (
            <div className={clsName} onClick={this.clickHandler}>
                <a href='javascript:void()' className='thumbnail' >
                    <img src={pach(fileDir,imgName)} alt={this.props.data.alt} />
                </a>
            </div>
        );
    }
});

module.exports = PhotoImg;