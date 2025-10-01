export default function DataBinding() {
  //number binding using variious js method to convert number into string or faction
  var price1 = 230000;
  var price2 = 848000;
  return (
    <div>
      <h2>Data Binding</h2>
      <p>price1 : {price1.toFixed(2)};</p>
      <p>
        price2:{" "}
        {price2.toLocaleString("en-in", { style: "currency", currency: "INR" })}
      </p>
    </div>
  );
}
