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

            // TODO: send email with details

            if (stop) break;
            res.redirect('/submitted');
            break;
        }
        default: {
            res.status(404); // Not found
            break;
        }
    }
}