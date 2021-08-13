import BASE_URL from "./url";

class Http {
    static instance = new Http();


    get_all_transaction_username = async () => {
        try {
        let request = await fetch(`${BASE_URL}/transactions/user/`);
        let response = await request.json();
        return response;
        } catch (err) {
        console.log('http get method error', err);
        throw Error(err);
        }
    };
    get_all = async () => {
        try {
            let request = await fetch(`${BASE_URL}/scores/all/`);
            let response = await request.json();
            return response;
        } catch (err) {
            console.log('http get error', err);
            throw Error(err);
        }
    };

    get = async userId => { 
        try {
            let request = await fetch(`${BASE_URL}/_id:${userId}/`);
            let response = await request.json();
            return response;
        } catch (err) {
            console.log('http get method err', err);
            throw Error(err);
        }
    };

    post = async user => { 
        try {
            let request = await fetch(`${BASE_URL}/new/`, {
                method: 'POST',
                body: JSON.stringify(user),
            });
            let response = await request.json();
            return response;
        } catch (err) {
            console.log('http post method err', err);
            throw Error(err);
        }
    };
    put = async (transactionId, body) => { 
        try {
            let request = await fetch(`${BASE_URL}/_id:${transactionId}/`, {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body),
            });
            let response = await request.json();
            return response;
        } catch (err) {
            console.log('http put method err', err);
            throw Error(err);
        }
    };
    remove = async userId => { 
        try {
            let request = await fetch(`${BASE_URL}/_id:${userId}/`, {
                method: 'DELETE',
            });
            let response = await request.json();
            return response;
        } catch (err) {
            console.log('http delete method err', err);
            throw Error(err);
        }
    };
}

export default Http;