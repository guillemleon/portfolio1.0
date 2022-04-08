import ReactDOM from "react-dom"

// normalize CSS across browsers
import "./src/normalize.scss"
// custom CSS styles
import "./src/style.scss"

export function replaceHydrateFunction() {
    return (element, container, callback) => {
        ReactDOM.render(element, container, callback)
    }
}
