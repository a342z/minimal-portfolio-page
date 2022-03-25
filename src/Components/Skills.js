import "./Skills.css";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <section >
      <div className="container p-5 d-flex flex-column ">
        <h1 className="text-center mb-3">Skills</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div class="d-flex pt-5 justify-content-center">
          {/* <div className=" col-sm-4">
            <h4>Main Skills</h4>
            <h6>BackEnd</h6>
            <h6>FrontEnd</h6>
          </div> */}
          <div className=" col-sm-6">
            <ProgressBar title={"HTML"} percentage={"70%"} />
            <ProgressBar title={"CSS"} percentage={"25%"} />
            <ProgressBar title={"JavaScript"} percentage={"85%"} />
            <ProgressBar title={"Node Js"} percentage={"60%"} />
            <ProgressBar title={"React"} percentage={"10%"} />
            <ProgressBar title={"Angular"} percentage={"55%"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
