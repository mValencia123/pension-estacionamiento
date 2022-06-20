
export const useFetch = (url,metod,data) => {
    const body = {
        method: metod,
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
    };

    metod !== "GET" ? body["body"] = JSON.stringify({data}) : null;
    const fetching = async  () => {
        const res = await fetch(url,body);
        const d = await res.json();
        return d;
    }

    return fetching();

    // return response;
}