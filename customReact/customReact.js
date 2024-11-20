function customRender(element, container) {
    const domElement = document.createElement(element.type);
    
    domElement.innerHTML = element.children;
    
    // Passing props by name - not a good approach, as element can have different properties
    /*
        domElement.setAttribute('href', element.props.href);
        domElement.setAttribute('target', element.props.target);
    */
   
    // Better Approach - loop through props and set the given props from element
    for (const prop in element.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, element.props[prop]);
    }

    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit Google'
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
