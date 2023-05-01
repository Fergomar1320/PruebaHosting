import React from 'react'


class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('/api/restaurants/1')
            .then((res) => res.json())
            .then((data) => this.setState({data}));
            console.log(this.state.data);
    }

    render() {
        return (
            <div>
                <h3>Nombre</h3>
                <h5>{!this.state.data ? "Loading..." : this.state.data.name}</h5>
                <h3>Direccion</h3>
                <h5>{!this.state.data ? "Loading..." : this.state.data.address}</h5>
                <h3>Teléfono</h3>
                <h5>{!this.state.data ? "Loading..." : this.state.data.phone}</h5>
                <h3>Sitio Web</h3>
                <h5>{!this.state.data ? "Loading..." : this.state.data.website}</h5>
            </div>
        );
    }
}

export default Restaurant;