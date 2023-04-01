export const getGifs = async (query, numb) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        query
    )}&limit=${numb}&api_key=MprG0Rdr7hnrTw3e4RvoDJyuGof69RkG`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img, index) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url,
        };
    });

    return gifs;
};
