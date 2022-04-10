const login = (req, res) => {
  res.render('login');
};
const signup = (req, res) => {
  res.render('signup');
};
const home = (req, res) => {
  res.render('home');
};
//Log out

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect('/');
  });
};

const services = (req, res) => {
  res.render('services');
};
module.exports = { login, signup, home, logout, services };
