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

    function formatDate(date){

        const [year, month, day] = date.split('-')
        const [realDay, time] = day.split('T')
        const formatedDate = realDay+' - '+month+' - '+year

        return formatedDate
    }

    function formatDateTime(datetimeStr) {
        const datetime = new Date(datetimeStr);
        const month = datetime.toLocaleString('en-US', { month: 'long' });
        const day = datetime.getDate();
        const year = datetime.getFullYear().toString().substr(-2);
        const hour = datetime.toLocaleString('en-US', { hour: 'numeric', hour12: false });
        const minute = datetime.toLocaleString('en-US', { minute: 'numeric' });
        const formattedDateTime = `${month} ${day}, ${year} - ${hour}:${minute}`;
        return formattedDateTime;
    }
  
  
    function formatTimeAgo(dateString) {
        const date = new Date(dateString);
        const currentDate = new Date();
    
        const diffInMilliseconds = currentDate - date;
        const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    
        if (diffInHours < 1) {
        const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
        return `${diffInMinutes} ${diffInMinutes === 1 ? 'min' : 'mins'} ago`;
        } else if (diffInHours < 24) {
        return `${diffInHours} ${diffInHours === 1 ? 'hr' : 'hrs'} ago`;
        } else {
        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
        }
    }

    return {
        copyToClipboard,
        domainWithProtocol,
        formatDate,
        formatDateTime,
        formatTimeAgo
    };
};

export default CommonFunctions;
