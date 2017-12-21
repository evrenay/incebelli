var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render("franceishe");
});
router.post('/',function (req,res) {
    var data = req.body;
    console.log(data);
    var ad = req.body.ad;
    var soyad = req.body.soyad;
    var email = req.body.email;
    var tel = req.body.tel;
    var comment = req.body.comment;
 if(ad=="" || soyad=="" || email =="" || tel =="" || comment ==""){
        res.write(html5)
    }
    else {
     var transporter = nodemailer.createTransport({
         service: 'yandex',
         host: 'smtp.yandex.com.tr',
         port: 465,
         secure: true,
         auth: {
             user: 'info@incebelli.net',
             pass: '123654...'
         }
     });
     var mailOptions = {
         from: "info@incelli.net",
         to: "birol@incebelli.net",
         subject: 'Franchise Başvuru Formu',
         html : "Ad   : "+ad+
                "Soyad: "+soyad+
                "Email: "+email+
                "tel:   "+tel+
                "ek:    "+comment

     };
     transporter.sendMail(mailOptions, function(error, info){
         if (error) {
             return res.send("<h1>Mail Gönderilirken bir hata oluştu.</h1>");
         }
         else {
             res.write(html5);

         }
     });
 }
});

module.exports = router;