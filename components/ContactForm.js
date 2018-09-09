var ContactForm = React.createClass({
    displayName: 'ContactForm',

    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function render() {
        return React.createElement(
            'form',
            { className: 'contactForm' },
            React.createElement('input', { type: 'text', placeholder: 'Imi\u0119' }),
            React.createElement('input', { type: 'text', placeholder: 'Nazwisko' }),
            React.createElement('input', { type: 'email', placeholder: 'Email' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Dodaj kontakt'
            )
        );
    }
});