function isLogin(req, res, next) {
  if (req.session.UserId) {
    next()
    return
  }
  res.redirect('/login?error=Login First');
}

function isUser(req, res, next) {
  console.log(req.session)
  if (req.session.role == "User") {
    next()
    return
  }
  res.redirect('/login?error=Login First');
}

module.exports = { isLogin, isUser }