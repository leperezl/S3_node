//192.168.68.110
//Author: Luis Eduardo Perez 201714355  
// Web 2021-2
const http= require('http');
const axios = require('axios')
const fs = require('fs')

const hostname = '192.168.68.110';
const port = 8081;

const html1= './table.html'
const html2= './tableProv.html'


let path =fs.readFileSync(html1, 'utf8', function files(err,data){
    return data
});

let path2 = fs.readFileSync(html2, 'utf8', function(err,data){
    return data
});

http.createServer(async function(req, res){
    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html');
    //console.log(req.url)
    if (req.url === '/api/clientes'){
      let targetclient= await getRequest(clientlink)   
      let finalhtmlclient=DataClient(targetclient)
      res.write(finalhtmlclient)
    }
    if (req.url === '/api/proveedores'){     
      const targetprov = await getRequest(provlink)
      let finalhtmlprov =DataProv(targetprov)
      res.write(finalhtmlprov)
    }
    //res.end('<h1>Hello World</h1>');
  }).listen(8081);

const provlink = 'https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json';
const clientlink = 'https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json';
let targetclient 
let targetprov

async function getRequest(link) {
      const response = await axios.get(link);
      return response.data;
};

const DataClient = (dat) =>{
  let tableData=""
  dat.forEach(element => {
    tableData += "<tr><td>"+element.idCliente+"</td><td>"+element.NombreCompania+"</td><td>"+element.NombreContacto+"</td></tr>"
  })
  return path.replace('???', tableData);
};

const DataProv = (dat) =>{

  let tableData= ""
  dat.forEach(element => {
    tableData += "<tr><td>"+element.idproveedor+"</td><td>"+element.nombrecompania+"</td><td>"+element.nombrecontacto+"</td></tr>"
  })
  return path2.replace('???', tableData);
  
};

