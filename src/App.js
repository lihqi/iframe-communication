import React from "react";

import "./App.css";
var eventBus = {
    eventList: {},
    $on: function(event, cb) {
        if (!event) return;
        this.eventList[event] = cb;
    },
    $emit: function(event, param) {
        if (!event || !this.eventList[event]) return;
        // 只执行一个并且只执行一次
        this.eventList[event](param);
    }
    // $off: function(event, cb) {
    //   if (event) {
    //     delete this.eventList[event];
    //   } else {
    //     this.eventList = {};
    //   }
    // }
};
var arr = [1, 2, 3, 4];
window.eventBus = eventBus;
// eventBus.$on("change", function(param) {
//     console.log(param);
// });
function App() {
    var handler = item => {
        eventBus.$emit("change", item);
    };
    return (
        <div className="App">
            <header className="App-header">
                {arr.map(item => {
                    return (
                        <div
                            key={item}
                            onClick={() => {
                                handler(item);
                            }}
                        >
                            按钮{item}
                        </div>
                    );
                })}
            </header>
            <iframe
                src="/pageF"
                width="200"
                height="200"
                title="ri"
                border="none"
            />
        </div>
    );
}

export default App;
