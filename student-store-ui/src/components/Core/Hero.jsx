import cart from "../../assets/cart.png";

export default function Hero() {
  return (
    <section className="hero is-success">
      <div className="hero-body">
        <div className="columns">
          <div className="intro column is-half">
            <p className="title">Welcome to Student Store!</p>
            <p className="subtitle">
              Your one stop shop for all your needs. Feel free to stock up on
              whatever you want by placing items in your shopping cart and
              checking out!
            </p>
          </div>
          <div className="column is-1" />
          <div className="column is-2">
            <img className="hero-img" src={cart} height="100" />
          </div>
        </div>
      </div>
    </section>
  );
}
