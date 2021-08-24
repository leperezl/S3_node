const axios = require('axios')

let target;
const provlink = 'https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json';
async function getRequest(link) {

    const response = await axios.get(link);
    console.log(response.data)
    return response.data;
};

const res = await getRequest(provlink);
then(console.log(res));

