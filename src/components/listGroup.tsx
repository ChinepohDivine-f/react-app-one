function ListGroup() {
    const items = [
        'New York',
        'Buea',
    ]

  return (
    <> // react fragment
      <h1>My list</h1>
          <ul className="list-group">
              {items.map((item) => <li key={item}>{item}</li>)} its advisable to set a key for identification
         </ul>
    </>
  );
}

export default ListGroup;
