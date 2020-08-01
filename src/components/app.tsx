import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";
import Flights from "../routes/flights";
import Result from "../routes/result";
import Header from "./header";

import { ThemeProvider } from "emotion-theming";
import theme from "../style/theme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Router onChange={handleRoute}>
                <Route path="/" component={Home} />
                <Route path="/flights" component={Flights} />
                <Route path="/result" component={Result} />
                <Home default />
            </Router>
        </ThemeProvider>
    );
};

export default App;
