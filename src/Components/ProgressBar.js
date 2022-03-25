import "./ProgressBar.css";

function ProgressBar(props) {
  return (
    <>
      <div class="row">
        <div class="col-sm-666"> 
          <div class="progress_bar fadeIn">
            <div class="progress_holder">
              <div class="progress_bar_title">{props.title}</div>
              <div class="progress_number">{props.percentage}</div>
            </div>
            <div class="progress_bar_holder">
              <div
                class="progress_bar_content"
                style={{ width: props.percentage, background: "#000000" }}
                data-score="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
