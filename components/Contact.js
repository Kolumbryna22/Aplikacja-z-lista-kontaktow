var Contact = React.createClass({
    displayName: 'Contact',

    propTypes: {
        item: React.PropTypes.object.isRequired
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'contactItem' },
            React.createElement('img', { src: 'images/contactIcon.png', alr: 'Contact' }),
            React.createElement(
                'p',
                { className: 'contactLabel' },
                this.props.item.firstName
            ),
            React.createElement(
                'p',
                { className: 'contactLabel' },
                this.props.item.lastName
            ),
            React.createElement(
                'a',
                { className: 'contactEmail', href: '/mailto: /' + this.props.item.email },
                this.props.item.email
            )
        );
    }
});