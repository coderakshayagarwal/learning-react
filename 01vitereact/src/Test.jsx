
import App from './App'

// this function will return some random html code
// just to check if react can render the component form function
function RandomReturn () {
    return (
        <h1>This is Random Component</h1>
    );
}

// - This code will not work as we don't have React imported in this file
// const reactElement = React.createElement(
//     'a',
//     {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     'Click me to visit GOOGLE'
// )

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit Google'
};

const anotherElement = (
    <a href="http://google.com" target="_blank">Visit Google</a>
);

function Test () {
    return (
        // RandomReturn() - this is valid - we can pass this as a function also
        // anotherElement - to check if we can pass like this - this will work fine as we are sending element in right format
        <App />
    )
}

export default Test