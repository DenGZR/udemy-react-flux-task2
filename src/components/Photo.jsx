var React = require('react');
var PhotoImg = require('./PhotoImg.jsx');

var Photo = React.createClass({
    render: function() {

        var pachImg,
            style = {
                photoContainer : {
                    background: '#FEFEFE',
                    padding: '25px'
                }
            },
            dataPhotos = {
                items: [
                    {
                        imgName: 'abstract-colourful.jpg',
                        pachImages: 'photo',
                        alt: 'abstract-colourful'
                    },
                    {
                        imgName: 'Angel-Cool-Wallpaper.jpg',
                        pachImages: 'photo',
                        alt: 'Angel'
                    },
                    {
                        imgName: 'abstract-rainbow.jpg',
                        pachImages: 'photo',
                        alt: 'abstract-rainbow '
                    },
                    {
                        imgName: 'abstract-colourful.jpg',
                        pachImages: 'photo',
                        alt: 'abstract-colourful'
                    },
                    {
                        imgName: 'Angel-Cool-Wallpaper.jpg',
                        pachImages: 'photo',
                        alt: 'Angel'
                    },
                    {
                        imgName: 'abstract-rainbow.jpg',
                        pachImages: 'photo',
                        alt: 'abstract-rainbow '
                    },{
                        imgName: 'Angel-Cool-Wallpaper.jpg',
                        pachImages: 'photo',
                        alt: 'Angel'
                    },
                    {
                        imgName: 'abstract-rainbow.jpg',
                        pachImages: 'photo',
                        alt: 'abstract-rainbow '
                    }

                ]
            };

        var photoItems = dataPhotos.items.map(function(item, index){
            return <PhotoImg data={item} key={index}/>
        });

        return (
            <div className='photo-container' style={style.photoContainer}>
                <div className='row'>
                    {photoItems}
                </div>
            </div>
        );
    }
});

module.exports = Photo;