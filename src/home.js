let Home = React.createClass({
    render: function () {
        var socials = [
            {link: 'https://github.com/aligos', icon: 'github'},
            {link: 'http://linkedin.com/in/aligos', icon: 'linkedin'},
            {link: 'https://speakerdeck.com/aligos', icon: 'slideshare'},
            {link: 'http://twitter.com/aligos', icon: 'twitter'},
            {link: 'http://facebook.com/matt.aligos', icon: 'facebook'},
        ]
        return (
            <div className="about">
                <img src="http://i.imgur.com/8OUm9am.jpg?1"/>
                <h1 className="jumbo-title">I create web apps & mobile apps.</h1>
                <p className="jumbo-desc">Rahmat ALigos JavaScript Fans</p>

                <div className="social">
                    {socials.map((item) => (<a href={item.link}><i className={`fa fa-${item.icon}`}></i></a>))}
                </div>
            </div>
        );
    },
});
