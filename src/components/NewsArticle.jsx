var React = require('react');

var NewsArticle = React.createClass({

    render: function () {

        var pachImg,
            style = {
                article:{
                    marginBottom: '30px',
                    background: '#FEFEFE'
                },
                profileIcon: {
                    width: '60%',
                    margin: '30px'
                },
                title:{
                    fontSize: '24px',
                    fontWidth: 'bold',
                    paddingTop: '20px'
                },
                subtitle:{
                    fontSize: '24px'
                },
                textContent:{
                    paddingTop: '20px',
                    paddingBottom: '20px'
                }
        };

        pachImg = this.props.data.pachImages;

        var pach = function(dirName , fileName){
            return 'img/' + dirName + '/' + fileName;
        };
        var galeryItems = this.props.data.images.map(function(img, index){
            return (
                <div className='col-xs-6 col-md-3' key={index}  >
                    <a href="#" className="thumbnail">
                        <img src={pach(pachImg, img )} alt='foto' />
                    </a>
                </div>
            )
        });

        return (
            <article style={style.article} className='box-shadow--8dp'>
                <div className='row'>
                    <div className='col-md-2'>
                        <img src={pach( pachImg, this.props.data.profileIcon)} style={style.profileIcon} alt='person profile icon'/>
                    </div>
                    <div className='col-md-8'>
                        <h3 style={style.title}>{this.props.data.title}</h3>
                        <p style={style.subtitle}>{this.props.data.subtitle}</p>
                        <p style={style.textContent}>{this.props.data.textContent}</p>
                        <div className='row galery-news-photo' >
                            {galeryItems}
                        </div>
                        <p style={style.authorLocation}>{this.props.data.authorLocation}</p>
                    </div>
                </div>
            </article>
        )
    }
});


module.exports = NewsArticle;