import Image from "./components/Image";
import Product from "./components/Product";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="mainContent">
      <div className="card">
        <div className="cardTop">
          <Image 
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
        </div>

        <Product />

      </div>

      {/* cart */}
      <div className="card">
        <Cart />
      </div>
    </div>
  );
}
