const express = require('express');
const app = express();

app.post, (request, response) => {
    var arr =request.query.data;
    var len = arr.length;
    var numbers = [];
    var alphabets = [];
    for(var i =0;i<len;i++)
    {
        if(isNaN(arr[i]))
        alphabets.push(arr[i]);
        else
        numbers.push(arr[i]);
    }

    response.write(JSON.stringify({"is_success": "True",
    "user_id": "Aashish_singh_16122000",
    "count": len,
    "email": "1905149@kiit.ac.in",
    "roll_number": "1905149",
    "numbers": numbers,
    "alphabets": alphabets}));
    response.end();
    response.send();
});

app.listen(3000, () => console.log('running on http://127.0.0.1:3000 ...'))
