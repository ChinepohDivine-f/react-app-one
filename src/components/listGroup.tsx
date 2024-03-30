function ListGroup() {
    const items = [
        'New York',
        'Buea',
    ]
    const getMessage = () => {
        return items.length === 0 ? <p>No item Found</p> : null;
}

  return (
    <> // react fragment
          <h1>My list</h1>
          {getMessage}
          <ul className="list-group">
              {items.map((item) => <li key={item}>{item}</li>)} its advisable to set a key for identification
         </ul>
    </>
  );
}

export default ListGroup;
