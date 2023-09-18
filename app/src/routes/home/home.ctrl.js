const output = {
  index: (req, res) => {
    res.redirect('/index');
  },
  home: (req, res) => {
    res.render('index');
  },
};

module.exports = output;
