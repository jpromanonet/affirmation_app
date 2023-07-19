const data = await fetch('https://8xvc6u036c.execute-api.us-east-2.amazonaws.com/items').then((response) =>
    response.json()
);

const Affirmation = () => {
    return <h3>{JSON.stringify(data[0].Text)}</h3>;
  };
        
  export default Affirmation;
  