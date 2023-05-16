import axios from "axios"

const Search = () => {

    const proceedSearch = async (token, search) => {

        try {

            let response = await axios.get('http://127.0.0.1:8000/social/api/tweet-search/' + search, { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
        }catch(err){

            return err;
        }
    };

    return {
        proceedSearch
    }
};

export default Search;