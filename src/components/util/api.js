const APIUrl = 'www.reddit.com';
const subReddit = 'webdev';

const getResults = async () => {

    //const response = await fetch(`${APIUrl}${subReddit}.json`);
    const response = await fetch(`https://www.reddit.com/r/${subReddit}.json`);
    const json = await response.json();
    console.log(json);
    return json.children.map((child)=>child.data());
};

export default getResults;