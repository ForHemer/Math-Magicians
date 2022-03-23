const Quote = () => {
  const quote = 'Mathematics is not about numbers equations, computations, or algorithms. It is about undersatanding.';
  const author = '-William paul Thurston';
  return (
    <div className="quote-container">
      <p>
        <span className="theQuote">{quote}</span>
        <span className="theAuthor">{author}</span>
      </p>
    </div>
  );
};

export default Quote;
