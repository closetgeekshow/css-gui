import "./hello.pc.css";
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

const _Hello = (props, ref) => {
    return React.createElement("div", {
        "className": "_Hello-6cbc41d9-5" + (props.$$scopeClassName ? " " + props.$$scopeClassName : ""),
        "key": "6cbc41d9-5",
        "ref": ref
    }, 
        props.children
    );
};
_Hello.displayName = "Hello";
let Hello = React.memo(React.forwardRef(_Hello));
export { Hello };

