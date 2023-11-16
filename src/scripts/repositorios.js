import { baseUrl } from './variables.js';

async function getRepositorios(userName) {
    const resposta = await fetch(`${baseUrl}/${userName}/repos`);
    return await resposta.json();
}

export { getRepositorios };
