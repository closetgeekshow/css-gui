import "./Demo.pc.css";
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

const _Demo = (props, ref) => {
    return React.createElement("div", {
        "className": "_Demo-f3996059-7" + (props.$$scopeClassName ? " " + props.$$scopeClassName : ""),
        "key": "f3996059-7",
        "ref": ref
    }, 
        "Hello from Paperclip!"
    );
};
_Demo.displayName = "Demo";
let Demo = React.memo(React.forwardRef(_Demo));
export { Demo };

