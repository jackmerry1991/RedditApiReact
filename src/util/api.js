const axios = require('axios')


const APIUrl = 'https://www.reddit.com';



export const getResults = async (subReddit) => {

    const response = await fetch(`${APIUrl}/r/${subReddit}.json`);
    const data = await response.json();
    return data.data.children;
};


export const getPosts = async (permalink) => {
    console.log(`${APIUrl}/${permalink}.json`);

    const response = await fetch(`${APIUrl}/${permalink}.json`);
    console.log(`${APIUrl}${permalink}`)
    let data = await response.json();
    console.log(data)
    return data;
};

export const getSubReddits = async () => {
    const response = await fetch(`${APIUrl}/subreddits.json`);
    const data = await response.json();
    return data.data.children;
   
};

