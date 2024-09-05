// const bcrypt = require('bcrypt');

const UserController = {
    login: async (req, res) => {
        console.log(req.email);
    },
    // create: async (req, res) => {
    //     console.log("UserController route create");
    //     const {
    //         name,
    //         email,
    //         password,
    //         confirmPassword,
    //         terms
    //     } = req.body;

    //     console.log(email);
    //     console.log(password);
    //     console.log(confirmPassword);
    //     console.log(terms);
    //     if (!name || !email ||!password ||!confirmPassword ||!terms) {
    //         return res.render('signup', {
    //             layout: 'signupLayout',
    //             error: 'Please fill in all fields'
    //         });
    //     }

    //     // validate email format
    //     const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if (!emailRegex.test(email)) {
    //         console.log('email is not valid');
    //         return res.render('signup', {
    //             layout: 'signupLayout',
    //             error: 'Please enter a valid email'
    //         });
    //     }

    //     if (terms !== 'on') {
    //         console.log('terms are not checked');
    //         return res.render('signup', {
    //             layout: 'signupLayout',
    //             error: 'You must agree to the terms and conditions'
    //         });
    //     }
    //     if (password !== confirmPassword) {
    //         console.log('passwords do not match');
    //         return res.render('signup', {
    //             layout: 'signupLayout',
    //             error: 'Passwords do not match'
    //         });
    //     }

    //     const existUser = await models.Account.findOne({
    //         where: {
    //             email,
    //         }
    //     });
    //     if (existUser) {
    //         console.log('user already exists');
    //         return res.render('signup', {
    //             layout: 'signupLayout',
    //             error: 'Email already exists'
    //         });
    //     }
    //     const hashedPassword = await bcrypt.hash(password, 10);
    //     const newUser = await models.User.create({
    //         email,
    //         name,
    //         avatar: '/assets/avatar_full.jpg',
    //     });
    //     await models.Account.create({
    //         email,
    //         password: hashedPassword,
    //     });

    //     const newWorkspace = await models.workspace.create({
    //         name: 'WorkspaceExample',
    //         description: 'Default workspace',
    //         manager: newUser.id,
    //     });

    //     await models.workspace_member.create({
    //         member_id: newUser.id,
    //         workspace_id: newWorkspace.id,
    //         role: "Owner",
    //     });
    //     req.session.workspace = newWorkspace;
    //     req.session.user = newUser;
    //     console.log('New account created');
    //     res.redirect('/dashboardworkspace/' + newWorkspace.id + '/new');
    // },
    // login: async (req, res) => {
    //     const {
    //         email,
    //         password
    //     } = req.body;
    //     const account = await models.Account.findOne({
    //         where: {
    //             email,
    //         }
    //     });
    //     if (!account) {
    //         return res.render('login', {
    //             layout: 'loginLayout',
    //             error: 'Invalid email'
    //         });
    //     }
    //     const isPasswordCorrect = await bcrypt.compare(password, account.password);
    //     if (!isPasswordCorrect) {
    //         return res.render('login', {
    //             layout: 'loginLayout',
    //             error: 'Invalid password'
    //         });
    //     }

    //     const user = await models.User.findOne({
    //         where: {
    //             email,
    //         }
    //     });
    //     req.session.user = user;
    //     res.redirect('/dashboard');
    // }
}

module.exports = UserController;
