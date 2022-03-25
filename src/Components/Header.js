

function Header() {
  return (
    <section style={{ backgroundImage: `url(/images/bg2.jpg) `,
    backgroundSize: 'cover'

    }}>
      <div className="container p-5">
        <div className="col-sm-4">
          <h1>Abdulrahman Zaki</h1>
          <h4>Full stack Web developer</h4>

          <button className="button mt-3">Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Header;
