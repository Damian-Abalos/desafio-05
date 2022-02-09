//---------------------------------------------------Handlebars---------------------------------------------------//
// const express = require("express");
// app = express();
// const handlebars = require("express-handlebars");

// const listaProductos = [];
// let productosCargados;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.engine(
//     "hbs",
//     handlebars.engine({
//         extname: ".hbs",
//         defaultLayout: "index.hbs",
//         layoutsDir: __dirname + "/views/layouts",
//         partialsDir: __dirname + "/views/partials",
//     })
// );

// app.get("/", (req, res) => {
//     res.render("form.hbs");
// });

// app.post("/productos", (req, res) => {
//     let ultimoId;
//     let ultimoProducto = listaProductos[listaProductos.length - 1];

//     if (listaProductos.length == 0) {
//         ultimoId = 0;
//     } else {
//         ultimoId = ultimoProducto.id;
//     }

//     let title = req.body.title;
//     let price = req.body.price;
//     let thumbnail = req.body.thumbnail;
//     let producto = {
//         title: title,
//         price: price,
//         thumbnail: thumbnail,
//         id: ultimoId + 1,
//     };
//     listaProductos.push(producto);
//     res.redirect("/");
// });

// app.get("/productos", (req, res) => {
//     if (listaProductos.length > 0) {
//         productosCargados = listaProductos.map(function (producto) {
//             return `
//             <tr>
//                 <td>${producto.title}</td>             
//                 <td>${producto.price}</td>             
//                 <td><img style="max-width: 50px;" src="${producto.thumbnail}" alt=""></td>             
//             </tr>`;
//         });
//         res.render("productos.hbs", { productosCargados });
//     } else {
//         productosCargados = "<h2 class='text-center'>No hay productos</h2>";
//         res.render("productos.hbs", { productosCargados });
//     }
// });

// app.set("views", "./views");
// app.set("view engine", "hbs");

// app.use("/static", express.static("public"));

// app.listen(8080);

//---------------------------------------------------Pug---------------------------------------------------//
// const express = require("express");
// const app = express();

// const listaProductos = [];
// let productosCargados;

// app.get('/', (req, res)=>{
//     res.render('miForm.pug')
// });

// app.post('/productos', (req, res)=>{
//     // let ultimoId;
//     // let ultimoProducto = listaProductos[listaProductos.length - 1];

//     // if (listaProductos.length == 0) {
//     //     ultimoId = 0;
//     // } else {
//     //     ultimoId = ultimoProducto.id;
//     // }

//     // let title = req.body.title;
//     // let price = req.body.price;
//     // let thumbnail = req.body.thumbnail;
//     // let producto = {
//     //     title: title,
//     //     price: price,
//     //     thumbnail: thumbnail,
//     //     id: ultimoId + 1,
//     // };
//     listaProductos.push(req.body);
//     console.log(listaProductos);
//     res.redirect("/");
// });

// app.get('/productos', (req, res)=>{
//     if (listaProductos.length > 0) {
//         productosCargados = listaProductos.map(function (producto) {
//             return `
//             tr
//                 td=producto.title             
//                 td=producto.price           
//                 td=img(style="max-width: 50px;" src="producto.thumbnail")             
//             `;
//         });
//         res.render("misProductos.pug", { productos:productosCargados });
//     } else {
//         productosCargados = "h2='No hay productos'";
//         res.render("misProductos.pug", { productos:productosCargados });
//     }
// });

// app.set("views", "./views");
// app.set("view engine", "pug");

// app.listen(8080);
//---------------------------------------------------Ejs---------------------------------------------------//
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");

let listaProductos = [];

app.get('/', (req, res)=>{
    res.render('pages/index')
})

app.post('/productos', (req,res)=>{
    let ultimoId;
    let ultimoProducto = listaProductos[listaProductos.length - 1];

    if (listaProductos.length == 0) {
        ultimoId = 0;
    } else {
        ultimoId = ultimoProducto.id;
    }

    let title = req.body.title;
    let price = req.body.price;
    let thumbnail = req.body.thumbnail;
    let producto = {
        title: title,
        price: price,
        thumbnail: thumbnail,
        id: ultimoId + 1,
    };
    listaProductos.push(producto)
    console.log(listaProductos);
    res.redirect('/')
})

app.get('/productos', (req, res)=>{
    res.render('pages/productsPage', {listaProductos})
})

app.listen(8080);

