import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const createWrapperAndAppendToBody = (wrapperId: string) => {
    if(!document) return null;
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

function ReactPortal({ children, wrapperId}: {
    children: React.ReactElement;
    wrapperId: string;
}) {

    const [ wrapperElement, setWrapperElement ] = useState<HTMLElement>();

    // seems to act before the DOM is "repainted", TODO: have to find more doc on this subject
    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

        if(!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }

        setWrapperElement(element!);

        return () => {
            if(systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    }, [wrapperId]);

    // wrapperElement will be null on the first render
    if(!wrapperElement) return null;
    // with the verfication above, typescript doesn't scream for the type of wrapperElement after 
    return createPortal(children, wrapperElement)
}

export default ReactPortal;