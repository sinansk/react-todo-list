import React from "react";
import "./styles.css";

function Status() {
    return (
        <div className="status">
            <p> Items Left</p>
            <ul>
                <li><button>All</button></li>
                <li><button>Active</button></li>
                <li><button>Complated</button></li>
            </ul>
            <button>Clear All</button>
        </div>
    )
}

export default Status;