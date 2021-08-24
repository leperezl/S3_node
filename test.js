const axios = require('axios')

let target;
const clientlink = 'https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json';
async function getRequest(link) {

    const response = await axios.get(link);
    console.log(response.data)
    return response.data;
};
getRequest(clientlink)
//const res = await getRequest(provlink);
//then(console.log(res));

