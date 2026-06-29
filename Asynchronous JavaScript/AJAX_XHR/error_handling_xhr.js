let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        let data = JSON.parse(xhr.responseText);
        console.log("Success:", data);
    } else {
        console.log("HTTP Error:", xhr.status);
    }
};

xhr.onerror = function() {
    console.log("Network Error - server tak nahi pahucha");
};

xhr.ontimeout = function() {
    console.log("Timeout - server ne response nahi diya");
};

xhr.timeout = 5000; // 5 second timeout

xhr.send();
