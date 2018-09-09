var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <form className='contactForm'>
                <input type='text' placeholder='Imię'></input>
                <input type='text' placeholder='Nazwisko'></input>
                <input type='email' placeholder='Email'></input>
                <button type='submit'>Dodaj kontakt</button>
            </form>
        )
    },
})
