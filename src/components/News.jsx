var React = require('react');
var NewsArticle = require('./NewsArticle.jsx');

//The NEWS page will have:
    //A List (component) of news stories where each story has:
        //Article title
        //Article subtitle
        //Article text content
        //1-2 thumbnail images
        //Location of Article post
//  A profile icon on the left that represents the person who posted it

var News = React.createClass({
    render: function() {

        var dataNews,
            articles;

        dataNews = {
            items: [
                {
                    profileIcon: 'profile-pictures.jpg',
                    title: 'Gov. McCrory involved in minor car accident in CA',
                    subtitle: 'Crash happened after Super Bowl',
                    textContent: 'SANTA CLARA, Calif. — (AP) -- Authorities say North Carolina Gov. Pat McCrory sustained no major injuries after the vehicle he was riding in was rear-ended shortly after the Super Bowl ended at Levis Stadium. California Highway Patrol Officer Ross Lee said the governor vehicle was traveling on State Route 237 just after 8 p.m. Sunday when it was hit from behind by a Mercedes. Lee said McCrory complained of pain but declined treatment.',
                    images: ['mccroryweb.jpg','super-bowl.jpg'],
                    pachImages: 'news',
                    authorLocation: 'Canada '
                },
                {
                    profileIcon: 'profile-pictures.jpg',
                    title: 'Gov. McCrory involved in minor car accident in CA',
                    subtitle: 'Crash happened after Super Bowl',
                    textContent: 'SANTA CLARA, Calif. — (AP) -- Authorities say North Carolina Gov. Pat McCrory sustained no major injuries after the vehicle he was riding in was rear-ended shortly after the Super Bowl ended at Levis Stadium. California Highway Patrol Officer Ross Lee said the governor vehicle was traveling on State Route 237 just after 8 p.m. Sunday when it was hit from behind by a Mercedes. Lee said McCrory complained of pain but declined treatment.',
                    images: ['mccroryweb.jpg','super-bowl.jpg'],
                    pachImages: 'news',
                    authorLocation: 'Canada '
                }

            ]
        };

        newsArticlesArr = dataNews.items.map(function(item, index) {
            return  <NewsArticle data={item} key={index}></NewsArticle>
        });

        return (
            <div >
                 {newsArticlesArr}
            </div>

        );
    }
});

module.exports = News;