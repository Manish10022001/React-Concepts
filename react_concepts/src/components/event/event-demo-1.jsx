//passing custom arguments so used {()=>} instead of default event
export default function EventDemo() {
  function InsertClick(name, price, cities) {
    document.write(`
        Name : ${name}\n
        Price: ${price}\n
        Cities: ${cities}
            `);
  }
  return (
    <button
      id="btnInsert"
      onClick={() => {
        InsertClick("TV",2334343,["a",'b','c']);
      }}
      className="btn btn-primary mt-3"
    >
      Insert
    </button>
  );
}
