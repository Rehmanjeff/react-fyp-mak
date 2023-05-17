import { ref } from "vue";

const CommonFunctions = () => {

    function copyToClipboard(text){
        
        const textArea = document.createElement('textarea');
        textArea.value = text;

        // Append the textarea element to the DOM
        document.body.appendChild(textArea);

        // Select the text within the textarea
        textArea.select();

        // Execute the copy command
        document.execCommand('copy');

        // Remove the textarea element from the DOM
        document.body.removeChild(textArea);
    }

    function domainWithProtocol(){

        const protocol = window.location.protocol;
        const hostname = window.location.hostname;
        const port = window.location.port;

        let currentDomainWithProtocol = `${protocol}//${hostname}`;
        if(port){
            currentDomainWithProtocol += `:${port}`;
        }

        return currentDomainWithProtocol
    }

    return {
        copyToClipboard,
        domainWithProtocol
    };
};

export default CommonFunctions;
