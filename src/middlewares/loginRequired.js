import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required']
    })
  }

  const [, token] = authorization.split(' ')

  try {
    const date = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = date;
    req.userId = id;
    req.userEmail = email;
    return next();

  } catch (e) {
    console.log(e);
    return res.status(401).json({
      errors: ['Token inválido ou expirado']
    })
  }
}