var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            React.createElement('form', {className: 'contactForm'},
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Imię',
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Nazwisko',
                }),
                React.createElement('input', {
                    type: 'email',
                    placeholder: 'Email',
                }),
                React.createElement('button', {type: 'submit'}, 'Dodaj kontakt')
            )
        )
    },
})
