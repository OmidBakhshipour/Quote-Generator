async function getQuotes() {
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    try {
        const response = await axios.get(apiUrl);
        console.log(response.data);

    } catch (error) {
        console.log('No quotes!', error);
    }
}

getQuotes();