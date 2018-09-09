var Contact = React.createClass({
    displayName: 'Contact',

    propTypes: {
        item: React.PropTypes.object.isRequired
    },

    render: function render() {
        return React.createElement('div', { className: 'contactItem' }, React.createElement('img', {
            className: 'contactImage',
            src: 'images/contactIcon.png',
            alt: 'Contact'
        }), React.createElement('p', { className: 'contactLabel' }, 'Imię: ' + this.props.item.firstName), React.createElement('p', { className: 'contactLabel' }, 'Nazwisko: ' + this.props.item.lastName), React.createElement('a', { className: 'contactEmail', href: 'mailto: ' + this.props.item.email }, this.props.item.email));
    }
});