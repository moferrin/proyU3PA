const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const morgan = require('morgan');
var nodemailer = require("nodemailer")
const app = express();
const pdf = require('html-pdf');

const cort = require('cors');

const {mongoose} = require('./database');

const bodyParser = require('body-parser'); 
 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cort({origin:"*"}))
app.use('/tecnico', require('./routes/tecnico.routes'));
app.use('/yesavage', require('./routes/yesavage.routes'));
app.use('/formulario', require('./routes/formulario'));
app.use('/adulto', require('./routes/adulto.routes'));
app.use('/TestBarthel', require('./routes/Barthel'));
app.use('/TestLawton', require('./routes/Lawton'));
app.use('/Minimental', require('./routes/Minimental'));
app.use('/supervisor', require('./routes/supervisor.routes.js'));


/*BARTHEL*/
function crearPdf(content){
  pdf.create(content).toFile('html-pdf.pdf', function(err, res) {
    if (err){
        console.log(err);
    } else {
        console.log(res);
    }
});
}

app.post("/correo", function(req, response){
  var from = req.body.from
  var to = req.body.to
  var subject = req.body.subject
  var message = "Tes Barthel "+ req.body.idEncabezado
  var tiempo_total = req.body.tiempo_total
  const content =`
  <!doctype html>
  <html>
  <link
     href="https://fonts.googleapis.com/icon?family=Material+Icons"
     rel="stylesheet"
     />
  <!-- bootstrap -->
  <link
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
     rel="stylesheet"
     integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
     crossorigin="anonymous"
     />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  <script
     src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
     integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
     crossorigin="anonymous"
     ></script>
  <script
     src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
     integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
     crossorigin="anonymous"
     ></script>
  <script
     src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
     integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+"
     crossorigin="anonymous"
     ></script>
     <div  class="form-group"><label >1. COMER</label> <br> `+req.body.p1_comer+`</div>
     <div  class="form-group"><label >2. TRASLADARSE ENTRE LA SILLA Y LA CAMA.</label><br> `+req.body.p2_retrasladarse+`</div>
     <div  class="form-group"><label >3. ASEO PERSONAL.</label><br> `+req.body.p3_aseo+` </div>
     <div  class="form-group"><label >4. USO DEL RETRETE (ESCUSADO, INODORO).</label><br> `+req.body.p4_uso_retrete+` </div>
     <div  class="form-group"><label >5. BAÑARSE/DUCHARSE.</label><br> `+req.body.p5_banarse+` </div>
     <div  class="form-group"><label >6. DESPLAZARSE.</label><br> `+req.body.p6_desplazarse+` </div>
     <div  class="form-group"><label >7. SUBIR Y BAJAR ESCALERAS.</label><br> `+req.body.p7_escaleras+` </div>
     <div  class="form-group"><label >8. VESTIRSE O DESVERTIRSE</label><br> `+req.body.p8_vestirse+` </div>
     <div  class="form-group"><label >9. CONTROL DE HECES.</label><br> `+req.body.p9_control_heces+`  </div>
     <div  class="form-group"><label >10. CONTROL DE ORINA.</label><br> `+req.body.p10_control_orina+` </div>
  </html>
  `;

  crearPdf(content);
 
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'omarferrin2016@gmail.com',
        pass: 'koqackyenipccwpa'
      }
  })

  var mailOptions = {
      from: from,
      to:to,
      subject:subject,
      text:message,
      attachments: [
        {
            filename: 'html-pdf.pdf',
            path: __dirname + '/html-pdf.pdf',
            cid: 'uniq-html.pdf'
        }
    ]
  }

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          console.log(error)
      } else {
          //console.log("Email Sent: " + info.response)
      }
      response.json(info.response);
  })
})

/*LAWTON*/
function crearPdfL(content){
   pdf.create(content).toFile('html-pdfL.pdf', function(err, res) {
     if (err){
         console.log(err);
     } else {
         console.log(res);
     }
 });
 }
 
 app.post("/correoL", function(req, response){
   var from = req.body.from
   var to = req.body.to
   var subject = req.body.subject
   var message = "Tes Lawton "+ req.body.idEncabezado
   const content =`
   <!doctype html>
   <html>
   <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
      />
   <!-- bootstrap -->
   <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
      crossorigin="anonymous"
      />
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
   <script
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
      ></script>
   <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"
      ></script>
   <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
      integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+"
      crossorigin="anonymous"
      ></script>
      <div  class="form-group"><label >1. CAPACIDAD PARA USAR EL TELEFONO.</label> <br> `+req.body.lb_p1+`</div>
      <div  class="form-group"><label >2. HACER COMPRAS.</label><br> `+req.body.lb_p2+`</div>
      <div  class="form-group"><label >3. PREPARACIÓN DE LA COMIDA.</label><br> `+req.body.lb_p3+` </div>
      <div  class="form-group"><label >4. CUIDADO DE LA CASA.</label><br> `+req.body.lb_p4+` </div>
      <div  class="form-group"><label >5. LAVADO DE LA ROPA.</label><br> `+req.body.lb_p5+` </div>
      <div  class="form-group"><label >6. USO DE MEDIOS DE TRANSPORTE.</label><br> `+req.body.lb_p6+` </div>
      <div  class="form-group"><label >7. RESPONSABILIDAD RESPECTO A SU MEDICACIÓN.</label><br> `+req.body.lb_p7+` </div>
      <div  class="form-group"><label >8. HACER COMPRAS</label><br> `+req.body.lb_p8+` </div>
      <div  class="form-group"><label >PUNTAJE TOTAL.</label><br> `+req.body.puntaje_total+`  </div>
   </html>
   `;

   crearPdfL(content);
  
   var transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: 'omarferrin2016@gmail.com',
         pass: 'koqackyenipccwpa'
       }
   })
 
   var mailOptions = {
       from: from,
       to:to,
       subject:subject,
       text:message,
       attachments: [
         {
             filename: 'html-pdfL.pdf',
             path: __dirname + '/html-pdfL.pdf',
             cid: 'uniq-htmlL.pdf'
         }
     ]
   }
 
   transporter.sendMail(mailOptions, function(error, info){
       if (error) {
           console.log(error)
       } else {
           //console.log("Email Sent: " + info.response)
       }
       response.json(info.response);
   })
 })


/*YESABAJE*/
 function crearPdfY(content){
   pdf.create(content).toFile('html-pdfY.pdf', function(err, res) {
     if (err){
         console.log(err);
     } else {
         console.log(res);
     }
 });
 }
 
 app.post("/correoY", function(req, response){
   var from = req.body.from
   var to = req.body.to
   var subject = req.body.subject
   var message = "Tes Yesabage "+ req.body.idEncabezado
   const content =`
   <!doctype html>
   <html>
   <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
      />
   <!-- bootstrap -->
   <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
      crossorigin="anonymous"
      />
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
   <script
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
      ></script>
   <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"
      ></script>
   <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
      integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+"
      crossorigin="anonymous"
      ></script>
      <div  class="form-group"><label >1. ¿Está Ud. básicamente satisfecho con su vida?.</label> <br> `+req.body.ey_p1_satisfecho+`</div>
      <div  class="form-group"><label >2. ¿Ha disminuido o abandonado muchos de sus intereses o actividades previas?.</label><br> `+req.body.ey_p2_actividades+`</div>
      <div  class="form-group"><label >3. ¿Siente que su vida está vacía?.</label><br> `+req.body.ey_p3_vacio+` </div>
      <div  class="form-group"><label >4. ¿Se siente aburrido frecuentemente?.</label><br> `+req.body.ey_p4_aburrido+` </div>
      <div  class="form-group"><label >5. ¿Está Ud. de buen ánimo la mayoría del tiempo?.</label><br> `+req.body.ey_p5_animo+` </div>
      <div  class="form-group"><label >6. ¿Está preocupado o teme que algo malo le va a pasar?.</label><br> `+req.body.ey_p6_preocupado+` </div>
      <div  class="form-group"><label >7. ¿Se siente feliz la mayor parte del tiempo?.</label><br> `+req.body.ey_p7_feliz+` </div>
      <div  class="form-group"><label >8. ¿Se siente con frecuencia desamparado?</label><br> `+req.body.ey_p8_desamparado+` </div>
      <div  class="form-group"><label >9. ¿Prefiere Ud. quedarse en casa a salir a hacer cosas nuevas?.</label><br> `+req.body.ey_p9_cosas+`  </div>
      <div  class="form-group"><label >10. ¿Siente Ud. que tiene más problemas con su memoria que otras personas de su edad?.</label><br> `+req.body.ey_p10_memoria+`  </div>
      <div  class="form-group"><label >11. ¿Cree Ud. que es maravilloso estar vivo?.</label><br> `+req.body.ey_p11_estar_vivo+`  </div>
      <div  class="form-group"><label >12. ¿Se siente inútil o despreciable como está Ud. actualmente?.</label><br> `+req.body.ey_p12_inutil_despreciable+`  </div>
      <div  class="form-group"><label >13. ¿Se siente lleno de energía?.</label><br> `+req.body.ey_p13_energia+`  </div>
      <div  class="form-group"><label >14. ¿Se encuentra sin esperanza ante su situación actual?.</label><br> `+req.body.ey_p14_esperanza_actual+`  </div>
      <div  class="form-group"><label >15. ¿Cree Ud. que las otras personas están en general mejor que Usted?.</label><br> `+req.body.ey_p15_cree_mejor+`  </div>
      <div  class="form-group"><label >Puntaje total.</label><br> `+req.body.ey_puntaje_total+`  </div>
   </html>
   `;

   crearPdfY(content);
  
   var transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: 'omarferrin2016@gmail.com',
         pass: 'koqackyenipccwpa'
       }
   })
 
   var mailOptions = {
       from: from,
       to:to,
       subject:subject,
       text:message,
       attachments: [
         {
             filename: 'html-pdfY.pdf',
             path: __dirname + '/html-pdfY.pdf',
             cid: 'uniq-htmlY.pdf'
         }
     ]
   }
 
   transporter.sendMail(mailOptions, function(error, info){
       if (error) {
           console.log(error)
       } else {
           console.log("Email Sent: " + info.response)
       }
       response.json(info.response);
   })
 })

app.listen(app.get('port'), () => {
  console.log('Server started on port ' + app.get('port'));
});
