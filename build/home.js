'use strict';

var Home = React.createClass({
    displayName: 'Home',

    render: function render() {
        var socials = [{ link: 'https://github.com/aligos', icon: 'github' }, { link: 'http://linkedin.com/in/aligos', icon: 'linkedin' }, { link: 'https://speakerdeck.com/aligos', icon: 'slideshare' }, { link: 'http://twitter.com/aligos', icon: 'twitter' }, { link: 'http://facebook.com/matt.aligos', icon: 'facebook' }];
        return React.createElement(
            'div',
            { className: 'about' },
            React.createElement(
                'img',
                { src: 'img/header.png' }
            ),
            React.createElement(
                'h1',
                { className: 'jumbo-title' },
                'I create web & mobile apps.'
            ),
            React.createElement(
                'p',
                { className: 'jumbo-desc' },
                'Aligos - JavaScript Fans'
            ),
            React.createElement(
                'div',
                { className: 'social' },
                socials.map(function (item) {
                    return React.createElement(
                        'a',
                        { href: item.link },
                        React.createElement('i', { className: 'fa fa-' + item.icon })
                    );
                })
            )
        );
    }
});
