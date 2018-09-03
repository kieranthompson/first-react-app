import React from "react";

import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";

const API_KEY = "062ead5fcd80768d8a3fe297316f242c"

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async(event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);

        if(city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: undefined
            })
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the values..."
            })
        }
    }

    render() {
        return(
            <div>
                <Titles />
                <Forms getWeather={this.getWeather}/>
                <Weather temperature={this.state.temperature}
                         city={this.state.city}
                         country={this.state.country}
                         humidity={this.state.humidity}
                         description={this.state.description}
                         error={this.state.error}
                />
            </div>
        );
    }
}

export default App;
