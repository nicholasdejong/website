# Personal Website
Welcome to the repository for my personal website.
The website is built with React and NextJS. I initially wanted to build it with Rust (making use of `tide`), but then tried Svelte, found it lacking the power I wanted, and now here we are.

My to-do list for my website:
- [ ] Add photos for backgrounds
- [ ] Add a blog (preferably written in markdown, hence the `.md` support)
- [ ] Add the portfolio page
- [ ] Add the about me page
- [ ] Add the contact page
- [ ] Finish, Document and include my first project (big!!)

Note: this website uses an email service to allow client users to contact me. 
The credentials for this service are stored as environment variables in a file called `.env`.
You must add this file (along with your own values for `FROM`, `PASS` and `TO`) to the root of the project in order to replicate this service.

Since I prefer not to display my email address, I simulate the process of the client user sending me an email by sending myself an email with the client's message.

The environment variables are as follows: 
- `FROM`: The email address responsible for sending the email
- `PASS`: The password for this email address. Note that an app password (from Google) may be required instead of the account password.
- `TO`: The recipient's email address.