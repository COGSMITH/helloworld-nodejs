// require('http').createServer((req,res)=>{ res.writeHead(200); res.end('HELLOWORLD'); }).listen(80,'0.0.0.0');
const port = process.env.PORT||process.argv[2]||'_'; const host = process.env.HOST||process.argv[3]||'0.0.0.0';
const msg = function (req) { let msg = 'HELLOWORLD'; msg += ': '+require('os').hostname().toUpperCase()+' @ '+host+':'+port+' @ '; if (req) { msg += req.headers.host.toUpperCase()+' @ '; }; msg += new Date().toISOString(); return msg; };
if (port!='_') { const server = require('http').createServer((req,res) => { res.writeHead(200); res.end(msg(req)+"\n"); }); server.listen(port,host); }
console.log(msg());