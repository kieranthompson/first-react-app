import React from "react";

class Forms extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type='text' name='city' placeholder='City...'/>
                    <input type='text' name='country' placeholder='Country...'/>
                    <input type='submit' value='Get Weather' />
                </form>
            </div>
        )
    }
}
export default Forms;