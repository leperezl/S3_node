//192.168.68.110
const http= require('http');
const axios = require('axios')
const fs = require('fs')

const hostname = '192.168.68.110';
const port = 8081;

const html1= './table.html'
const html2= './tableProv.html'
let path 
let path2

fs.readFileSync(html1, 'utf8', function(err,data){
    path = data
});

fs.readFileSync(html2, 'utf8', function(err,data){
    path2 = data
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req === 'http://localhost:8081/api/proveedores'){
        getRequest(provlink)
        DataProv()
    }
    if (req === 'http://localhost:8081/api/clientes'){
      getRequest(clientlink)
      DataClient()
  }
    res.end('<h1>Hello World</h1>');
  });
  server.listen(8081);

const provlink = 'https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json';
const clientlink = 'https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json';
let target

const getRequest = async (link) => {
  try {
      const response = await axios.get('link');
      target = response;

  } catch (err) {

      console.error(err);
  }
};

const DataClient = () =>{
  target.forEach(element => {
    path2.replace('???', "<td><tr>element.idcliente</tr><tr>element.nombrecompania</tr><tr>element.nombrecontacto</tr></td>");
  })};

const DataProv= () =>{
  target.forEach(element => {
    path.replace('???', "<td><tr>element.idprooveedor</tr><tr>element.nombrecompania</tr><tr>element.nombrecontacto</tr></td>");
})};


