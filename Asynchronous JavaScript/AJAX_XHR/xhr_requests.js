// XMLHttpRequest - purana tarika

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");

xhr.onload = function() {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        console.log(data.name);
    }
};

xhr.send();

// readyState
// 0 - UNSENT
// 1 - OPENED
// 2 - HEADERS_RECEIVED
// 3 - LOADING
// 4 - DONE

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};
