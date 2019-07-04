import React from "react";
import ReactDOM from "react-dom";
var eventBus;
if (window.parent && window.parent.eventBus) {
    eventBus = window.parent.eventBus;
}

if (eventBus) {
    eventBus.$on("change", function(param) {
        console.log(param);
    });
}

function App() {
    return (
        <div className="App">
            <header className="App-header">reactfgerwwerewr</header>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
