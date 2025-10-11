export default function ButtonEvents() {
  function handleDoubleClick() {
    window.open("1.jpeg", "Eyewear", "width=700", "height=800");
  }

  function handleContext(){
    alert("Right click is not allowed in this page");
    document.oncontextmenu= function(){
        return false;
    }
  }
  return (
    <div className="container" onContextMenu={handleContext}>
      <img
        src="./1.jpeg"
        width="100"
        height="100"
        onDoubleClick={handleDoubleClick}
      />
      <p>Double click to view large</p>
    </div>
  );
}
