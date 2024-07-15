import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
    auth: {
        user: process.env.FROM,
        pass: process.env.PASS
    }
});

export default function handler(req, res) {
    switch (req.method) {
        case 'POST': {
            let stop = false;
            console.log(req.body);
            let required = ['name', 'email', 'subject', 'message'];
            for (let key of required) {
                if (!(key in req.body)) {
                    res.redirect(401, '/submitted'); // Unauthorized
                    stop = true;
                    break;
                }
            }

            if (stop) break;

            // I use two personal emails to simulate their sending an email.
            let mailOptions = {
                from: process.env.FROM,
                to: process.env.TO,
                subject: `[Website]: ${req.body.subject}`,
                text: 
               `[Name]: ${req.body.name}
                [Email]: ${req.body.email}
                [Message]: ${req.body.message}`
            }

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    res.redirect(500, '/submitted?failed');
                    console.log(`Error sending mail: ${err}`);
                } else {
                    console.log(`Email sent: ${info.response}`);
                }
            });

            res.redirect('/submitted');
            break;
        }
        default: {
            res.status(404); // Not found
            break;
        }
    }
}