export async function getLinksSaved(key) {
    const myLinks = await localStorage.getItem(key);
    let linksSaves = JSON.parse(myLinks) || [];
    return linksSaves;
}

export async function saveLink(key, newLink) {
    let linksStored = await getLinksSaved(key);
    const hasLink = linksStored.some((link) => link.id === newLink.id);

    if (hasLink) {
        console.log('Esse link já existe na sua lista');
        return;
    }

    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link salvo com sucesso!');
}

export function deleteLink(links, id) {
    let myLinks = links.filter((item) => {
        return item.id !== id;
    });

    localStorage.setItem('linksEncurtados', JSON.stringify(myLinks));

    return myLinks;
}
