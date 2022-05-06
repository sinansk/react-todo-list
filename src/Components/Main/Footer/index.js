import React from "react";
import "./styles.css";

function Footer( { todo } ) {


    // const complated = todo.filter(item => {
    //     if (item.done === true) {
        
    //     }
    // })

    return (
        <div className="footer">
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

export default Footer;