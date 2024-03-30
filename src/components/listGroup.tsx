function ListGroup() {
    const items = [
        'New York',
        'Buea',
    ]

  return (
    <> // react fragment
      <h1>My list</h1>
          <ul className="list-group">
              {items.map((item) => <li>{item}</li>)}
         </ul>
    </>
  );
}

export default ListGroup;
