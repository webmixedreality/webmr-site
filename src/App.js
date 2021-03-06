import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const REGISTRY_URL = 'http://zeovr.io:9000';

class Link extends Component {
  constructor() {
    super();

    this.state = {
      hover: false,
    };
  }

  render() {
    return <a
      href={this.props.link}
      style={{
        display: 'flex',
        width: '160px',
        height: '160px',
        margin: '10px',
        backgroundColor: !this.state.hover ? '#000' : '#e81e62',
        color: '#FFF',
        fontSize: '13px',
        flexDirection: 'column',
        textDecoration: 'none',
        cursor: 'pointer',
        // transform: !this.state.hover ? 'none' : 'scale(1.1, 1.1)',
      }}
      onMouseOver={() => this.setState({hover: true})}
      onMouseOut={() => this.setState({hover: false})}
    >
      <div style={{
        flexGrow: 1,
      }}/>
      <div style={{
        padding: '10px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>
        {this.props.link}
      </div>
    </a>;
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      links: [],
    };

    fetch(REGISTRY_URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(new Error('invalid status code: ' + res.status));
        }
      })
      .then(links => {
        this.setState({links});
      })
      .catch(err => {
        console.warn(err.stack);
      });
  }

  render() {
    return (
      <div className="App" id="page-top" itemScope itemType="http://schema.org/ItemPage" style={{display: 'flex', flexDirection: 'column'}}>
        <nav className="siteNav" id="main-nav" itemScope itemType="http://schema.org/SiteNavigationElement" style={{position: 'absolute', display: 'flex', width: '100%', padding: '0 30px', alignItems: 'center', zIndex: 2}}>
          <div style={{display: 'flex', height: '100px', marginRight: 'auto', alignItems: 'center'}}>
            <a className="navbar-brand js-scroll-trigger" href="/">
              <img height={80} src="assets/images/logo.png" alt="Exokit Browser"/>
            </a>
            <div className="navOptions" id="navbarResponsive" style={{display: 'flex', height: '100%'}}>
              <ul className="navList">
                <li className="navItem" itemProp="name">
                  <meta itemProp="description" content="Install Exokit" />
                  <meta itemProp="potential////Action" content="https://exokitbrowser.com#install" />
                  <a className="nav-link js-scroll-trigger" href="#install" itemProp="url">Install</a>
                </li>
                <li className="navItem" itemProp="name">
                  <meta itemProp="description" content="Documentation and FAQ" />
                  <a className="nav-link" href="//docs.webmr.io" itemProp="url">Docs</a>
                </li>
                <li className="navItem" itemProp="name">
                  <meta itemProp="description" content="GitHub Repository" />
                  <a className="nav-link" href="https://github.com/webmixedreality/exokit" itemProp="url">Github</a>
                </li>
                <li className="navItem" itemProp="name">
                  <meta itemProp="description" content="Twitch Channel" />
                  <a className="nav-link" href="https://www.twitch.tv/avaer" itemProp="url">Twitch</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navItem badgeItem" itemProp="name">
            <meta itemProp="description" content="Join Our Slack" />
            <a className="slack-badge nav-link" href="https://exoslack.now.sh" itemProp="url">Join the Slack</a>
          </div>
        </nav>

        <div style={{display: 'flex', position: 'absolute', width: '100%', height: '100vh', paddingTop: '100px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 1}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
            <div style={{display: 'flex', padding: '30px', backgroundColor: '#000', color: '#FFF', flexDirection: 'column'}}>
              <h1 style={{margin: 0, fontSize: '24px', fontWeight: 300}}>A new browser approaches</h1>
            </div>
            <div style={{display: 'flex', padding: '10px 30px', backgroundColor: '#F8F8F8', flexDirection: 'column'}}>
              <p style={{color: '#333'}}>
                <b><i>Exokit n.</i></b><br/>
                Cannot draw a web page; draws layers of reality.<br/>
                VR, Leap Motion, Magic Leap, keyboard. Faster than Chrome.<br/>
                <a href="//twitch.tv/avaer" className="hoverable">Made live on Twitch</a><br/>
              </p>
                <div className='row'>
                  <div className='col-4'>
                      <a id="apple-download-button" className="download-button" href="//get.webmr.io/macos">
                          <div className='row'>
                              <div className='col-12'><img src={'assets/images/apple.png'}/></div>
                              <div className='col-12'>macOS</div>
                          </div>
                      </a>
                  </div>
                    <div className='col-4'>
                        <a id="windows-download-button" className="download-button" href="//get.webmr.io/windows">
                            <div className='row'>
                                <div className='col-12'><img src={'assets/images/windows.png'}/></div>
                                <div className='col-12'>Windows</div>
                            </div>
                        </a>
                    </div>
                    <div className='col-4'>
                        <a id="linux-download-button" className="download-button" href="//get.webmr.io/linux">
                            <div className='row'>
                                <div className='col-12'><img src={'assets/images/linux.png'}/></div>
                                <div className='col-12'>Linux</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div style={{position: 'relative', width: '100%', height: '100vh', overflow: 'hidden'}}>
          <video id="hero-video" autoPlay playsInline muted loop style={{width: '100%', height: '100%', objectFit: 'cover'}}>
            <source src="/assets/video/hero.mp4"/>
          </video>
        </div>

        <section style={{display: 'flex', backgroundImage: 'linear-gradient(to right, #00f260, #0575e6)', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1 style={{display: 'flex', margin: '70px 0', padding: '15px', backgroundColor: '#000', color: '#FFF', fontWeight: 300}}>Made for exokit</h1>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', width: '720px', flexWrap: 'wrap'}}>
              {this.state.links.map(link => <Link link={link} key={link} />)}
            </div>
          </div>
        </section>

        {/* <section className="titleSection" id="exokit-header" itemScope itemType="http://schema.org/WebPageElement">
          <div id="particles-js"></div>
          <h1 itemProp="description">
            <span>E<span className="xo-pink">x</span><span className="xo-orange">o</span>kit is a brand new, fast, post-screen era web browser.</span>
          </h1>
          <div className="startLinks" id="titleStartLinks">
            <a className="getStarted" href="//docs.webmr.io" itemProp="potentialAction">Get Started</a>
            <a className="getStarted invert" href="https://github.com/webmixedreality/exokit" itemProp="potentialAction">GitHub</a>
          </div>
          <a href="#hero" className="js-scroll-trigger"><div className="more"></div></a>
        </section>

        <section className="hero main" id="hero" itemScope itemType="http://schema.org/WebPageElement">
          <meta itemProp="name" content="Exokit Runs on Magic Leap" />
          <div className="heroText">
            <div className="heroTagline">
              <h1 itemProp="description">Build and experience AR websites today</h1>
            </div>
          </div>
          <div className="heroImage" itemScope itemType="http://schema.org/ImageObject">
            <meta itemProp="name" content="Magic Leap Runs Exokit" />
            <meta itemProp="url" content="https://exokitbrowser.com/images/ml-lightwear.jpg" />
          </div>
        </section>

        <section className="supporting" id="mlSection" itemScope itemType="http://schema.org/WebPageElement">
          <div className="supportingTitle" itemProp="name"><h2>Magic Leap — or legacy VR.<br/>Or your grandpa’s 2D screens.</h2></div>
          <div itemProp="description">
            <p className="supportingDetails" itemScope itemType="http://schema.org/WebPageElement">
              Under the hood, everything is plain OpenGL, so Exokit plays nicely with Windows, Linux, macOS, iOS, Android, and even Magic Leap.
            </p>
            <p className="">It supports all the standard browser APIs and accepts keyboard, mouse, and mixed-reality input.</p>
          </div>
        </section>

        <section className="intro main" id="speed" itemScope itemType="http://schema.org/VideoObject">
          <meta itemProp="description" content="Demo of Exokit running zeovr.io at over 60 fps" />
          <meta itemProp="thumbnailUrl" content="https://exokitbrowser.com/images/zeo_thumb.png" />
          <meta itemProp="uploadDate" content="2018-04-15" />
          <meta itemProp="name" content="Zeo (Minecraft Clone) on Exokit" />
          <meta itemProp="url" content="https://exokitbrowser.com/video/zeo_xo.mp4" />
          <div className="introImage">
            <div className="vidWrapper">
              <video id="zeo" playsInline muted loop>
                <source src="/assets/video/zeo_xo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
              <div className="videoOverlay" id="zeoOverlay"></div>
            </div>
          </div>
          <div className="introText">
            <div className="introTagline">
              <h1>E<span className="xo-pink">x</span><span className="xo-orange">o</span>kit is built for speed</h1>
            </div>
          </div>
        </section>

        <section className="supporting introSupporting" id="fpsSection" itemScope itemType="http://schema.org/WebPageElement">
          <div className="supportingTitle" itemProp="description"><h2>A browser for the post-2D world</h2></div>
          <div className="triptych">
              <div>
                <h4 className="xo-pink">Experiences</h4>
                <span>Exokit uses native code for high-performance rendering. The rest is pure JavaScript.</span>
              </div>
            <div>
              <h4 className="xo-pink">Experimentation</h4>
              <span>Exokit is totally open-source, and unlike other browsers, isn't held back by the need to support legacy APIs.</span>
            </div>
            <div>
              <h4 className="xo-pink">Evolution</h4>
              <span>The end result is a browser that can move as quickly as the web does, and that can be changed by editing a .js file.</span>
            </div>
          </div>
        </section>

        <section className="detail main" itemScope itemType="http://schema.org/WebPageElement">
          <div className="detailText">
            <div className="detailTagline">
              <h1>JS + HTML<br/>=<br/>AR Websites</h1>
            </div>
          </div>
          <div className="detailImage"></div>
        </section>

        <section className="supporting detailSupporting" id="install" itemScope itemType="http://schema.org/WebPageElement">
          <div className="supportingTitle"><h2>Install with npm.<br/>Build mixed reality websites with JS.</h2></div>
          <pre id="installCode"><span></span>npm install -g exokit</pre>
          <p className="margin60">With Exokit, you can code robust AR and VR experiences using your favorite flavor of JavaScript, just like you code a website.</p>
          <div className="startLinks">
            <a className="getStarted" href="//docs.webmr.io">Get Started</a>
            <a className="getStarted invert" href="https://github.com/webmixedreality/exokit">GitHub</a>
          </div>
        </section>

        <footer itemScope itemType="http://schema.org/WebPageElement" id="footer">
          &#169; Copyright 2018 WebMR
        </footer>

        <script src="/assets/vendor/jquery/jquery.min.js"></script>
        <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <script src="/assets/vendor/jquery-easing/jquery.easing.min.js"></script>

        <script src="/assets/js/new-age_4_16.min.js"></script>
        <script src="/assets/js/ui_4_15.js"></script>
        <script src="/assets/vendor/particles.min.js"></script>
        <script>{`
          const particlesConfig = {
            "particles": {
              "number": {
                "value": 200,
                "density": {
                  "enable": true,
                  "value_area": 300
                }
              },
              "color": {
                "value": "#dd6f84"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 6,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 496,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": false,
                  "mode": "repulse"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 0.5
                  }
                },
                "bubble": {
                  "distance": 80,
                  "size": 6,
                  "duration": 0.3,
                  "opacity": 0.6,
                  "speed": 3
                },
                "repulse": {
                  "distance": 63.73689410115041,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": false
          };
          if (window.innerWidth >= 768) {
            particlesJS('particles-js', particlesConfig);
          }
        `}</script> */}
      </div>
    );
  }
}

export default App;
