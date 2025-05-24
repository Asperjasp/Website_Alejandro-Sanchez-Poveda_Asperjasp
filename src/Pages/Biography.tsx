const Personal_Website = "https://asperjasp.github.io/"

export function Biography() {
  return (
    <div className="App-Wrapper">
      <header className="site-home-header pruebita">
        <div className="outer site-header-background responsive-header-img">
          <div className="inner">
            <nav className="site-nav">
              <div className="site-nav-left-wrapper">
                <div className="site-nav-left">
                  <a className="site-nav-logo" href={Personal_Website}>
                    <img src="/content/images/2020/08/freddy-vega-1.png" alt="Alejandor Sánchez @asperjasp" />
                  </a>
                  <div className="site-nav-content">
                    <ul className="nav">
                      <li className="nav-home nav-current"><a href={Personal_Website}>Home</a></li>
                      <li><a href={`${Personal_Website}/Biography`}>Biografía</a></li>
                      <li className="nav-TerkRead"><a href="https://TerkRead.com/">Platzi</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="site-nav-right">
                <ul className="nav">
                  <li className="nav-cristalab"><a href="http://www.cristalab.com/">Cristalab</a></li>
                  <li className="nav-guia-de-emprendimiento"><a href="https://guiadeemprendimiento.com/">Guía de Emprendimiento</a></li>
                  <li className="nav-freddier"><a href="https://twitter.com/freddier">@freddier</a></li>
                </ul>
              </div>
            </nav>
            <div className="site-header-content">
              <h1 className="site-title">
                <img className="site-logo" src="/content/images/size/w1000/2020/08/freddy-vega-1.png" alt="Freddy Vega @freddier" />
              </h1>
              <h2 className="site-description">CEO de Platzi, fundador de Cristalab, escritor ocasional.</h2>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}