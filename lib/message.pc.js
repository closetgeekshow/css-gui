import "./message.pc.css";
import * as React from "react";

const omit = (obj, keys) => {
    const newObj = {};
    for (const key in obj) {
        if (!keys.includes(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};

const _Message = (props, ref) => {
    return React.createElement("div", {
        "className": "_Message-4934de95-9" + (props.$$scopeClassName ? " " + props.$$scopeClassName : ""),
        "key": "4934de95-9",
        "ref": ref
    }, 
        props.children
    );
};
_Message.displayName = "Message";
let Message = React.memo(React.forwardRef(_Message));
export { Message };

