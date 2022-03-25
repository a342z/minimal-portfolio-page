import "./Portfolio.css";
import CardItem from "./CardItem";
function Portfolio() {
  return (
    <section className="section-bg">
      <div className="container p-5 d-flex flex-column ">
        <h1 className="text-center mb-3">Portfolio</h1>

        <div class="row">
          <CardItem title="E-Commerce"></CardItem>
          <CardItem title="Events System"></CardItem>
          <CardItem title="Portfolio"></CardItem>
          <CardItem title="CMS"></CardItem>
          <CardItem title="ITI"></CardItem>
          <CardItem title="Chat app"></CardItem>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
