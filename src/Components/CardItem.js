import "./CardItem.css";

function CardItem(props) {
  return (
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div class="box-part text-center">
        <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>

        <div class="title">
          <h4>{props.title}</h4>
        </div>

      </div>
    </div>
  );
}

export default CardItem;
