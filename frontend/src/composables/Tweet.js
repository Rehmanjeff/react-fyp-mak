import axios from "axios"

const Tweet = () => {

    const token = localStorage.getItem('dynoAuthToken')
    const createTweet = async (tweet) => {

        try {

            let response = await axios.post('http://127.0.0.1:8000/social/api/get-tweet/tweet/', { text: tweet }, { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
        } catch (err) {

            return err;
        }
    };

    const userHomeFeed = async () => {

        try {

            let response = await axios.get('http://127.0.0.1:8000/social/api/tweet/', { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
        } catch (err) {

            return err;
        }
    };

    const userProfileTweets = async (username) => {

        try {

            if (username == '') {
                let response = await axios.get('http://127.0.0.1:8000/social/api/tweet/profile', { headers: {"Authorization" : `Bearer ${token}`} });
                return response;
            } else {
                let response = await axios.get('http://127.0.0.1:8000/social/api/tweet/profile/' + username + '/', { headers: {"Authorization" : `Bearer ${token}`} });
                return response;

            }
        } catch (err) {

            return err;
        }
    };

    const userLikedTweets = async (username) => {

        try {

           if (username == '') {
             let response = await axios.get('http://127.0.0.1:8000/social/api/tweet/profile/liked', { headers: {"Authorization" : `Bearer ${token}`} });
             return response;
           } else {
            let response = await axios.get('http://127.0.0.1:8000/social/api/tweet/profile/liked/' + username + '/', { headers: {"Authorization" : `Bearer ${token}`} });
             return response;
           }
        } catch (err) {

            return err;
        }
    };

    const toggleLikeTweet = async (id, action) => {

        try {

            if(action == 'like'){

                let response = await axios.post('http://127.0.0.1:8000/social/api/tweet-like/' + id + '/', {}, { headers: {"Authorization" : `Bearer ${token}`} });
                return response;
            }else if(action == 'unlike'){

                let response = await axios.delete('http://127.0.0.1:8000/social/api/tweet-like/' + id + '/', { headers: {"Authorization" : `Bearer ${token}`} });
                return response;
            }
        }catch(err){

            return err;
        }
    };

    const createTweetComment = async (id, comment) => {

        try {

            let response = await axios.post('http://127.0.0.1:8000/social/api/tweet-comment/'+id + '/', {comment: comment}, { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
        } catch (err) {

            return err;
        }
    };

    const tweetDetails = async (id) => {

        try {

            let response = await axios.get('http://127.0.0.1:8000/social/api/tweet/'+id, { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
        } catch (err) {

            return err;
        }
    };

    const quoteTweet = async (id, text) => {

        try {

            let response = await axios.post('http://127.0.0.1:8000/social/api/share-tweet/' + id + '/', { text: text }, { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
        } catch (err) {

            return err;
        }
    };

    return {
        createTweet,
        userHomeFeed,
        userProfileTweets,
        userLikedTweets,
        toggleLikeTweet,
        createTweetComment,
        tweetDetails,
        quoteTweet
    }
};

export default Tweet;