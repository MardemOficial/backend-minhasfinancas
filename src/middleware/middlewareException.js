
const middlewareException = (err, req, res, next) => {
  console.error(err.message);
  res.status(err.statusCode || 500).send({ message: err.message });    
};

export default middlewareException;