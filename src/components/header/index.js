import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import withMediaMatcher from '../../lib/withMediaMatcher';
import style from './style';


@withMediaMatcher('(max-width: 767px)')
export default class Header extends Component {

  state = {
    showSideBar: false
  }

  toggleSidebar = () => {
    this.setState({
      showSideBar: !this.state.showSideBar
    });
    console.log(this.state.showSideBar);
  }

  render({ mq }, { showSideBar }) {
    if (mq.matches) {
      return (
        <div>
          <div class={style.mobile__header}>
            <Link className={style.logo} href="/">
              <img src="assets/images/nima_logo.png" />
            </Link>
            <span class={style.toggle} onClick={this.toggleSidebar}>
              <img src="assets/icons/menu.png" />
            </span>
          </div>
          {
            showSideBar ?
            <header class={style.header}>
              <span class={style.toggle} onClick={this.toggleSidebar}>
                <img src="assets/icons/close.png" />
              </span>
              <Link activeClassName={style.active} onClick={this.toggleSidebar} className={style.logo} href="/">
                <img src="assets/images/nima_logo.png" />
              </Link>
              <nav>
                <Link activeClassName={style.active} onClick={this.toggleSidebar} href="/about">About Us</Link>
                <Link activeClassName={style.active} onClick={this.toggleSidebar} href="/residents">Meet the Residents</Link>
                <Link activeClassName={style.active} onClick={this.toggleSidebar} href="/campaigns">Campaigns</Link>
                <Link activeClassName={style.active} onClick={this.toggleSidebar} href="/get-involved">Get Involved</Link>
              </nav>
              <footer>
                <div class={style.icons}>
                  <div class={style.contact}>
                    <a href="/">
                      <img src="assets/icons/mail.png" />
                    </a>
                    <a href="/">
                      <img src="assets/icons/phone.png" />
                    </a>
                    <a href="/">
                      <img src="assets/icons/location.png" />
                    </a>
                  </div>
                  <div class={style.contact}>
                    <a href="/">
                      <img src="assets/icons/facebook.png" />
                    </a>
                    <a href="/">
                      <img src="assets/icons/instagram.png" />
                    </a>
                    <a href="/">
                      <img src="assets/icons/youtube.png" />
                    </a>
                  </div>
                  <div class={style.contact}>
                    <a href="/">
                      <img src="assets/icons/paypal.png" />
                    </a>
                </div>
                </div>
              </footer>
            </header>
            :
            null
          }
        </div>
      )
    } else {
      return (
        <header class={style.header}>
          <Link activeClassName={style.active} className={style.logo} href="/">
            <img src="assets/images/nima_logo.png" />
          </Link>
          <nav>
            <Link activeClassName={style.active} href="/about">About Us</Link>
            <Link activeClassName={style.active} href="/residents">Meet the Residents</Link>
            <Link activeClassName={style.active} href="/campaigns">Campaigns</Link>
            <Link activeClassName={style.active} href="/get-involved">Get Involved</Link>
          </nav>
          <footer>
            <h1>Find us</h1>
            <div class={style.contact}>
              <a href="/">
                <img src="assets/icons/mail.png" />
              </a>
              <a href="/">
                <img src="assets/icons/phone.png" />
              </a>
              <a href="/">
                <img src="assets/icons/location.png" />
              </a>
            </div>
            <div class={style.contact}>
              <a href="/">
                <img src="assets/icons/facebook.png" />
              </a>
              <a href="/">
                <img src="assets/icons/instagram.png" />
              </a>
              <a href="/">
                <img src="assets/icons/youtube.png" />
              </a>
            </div>
            <div class={style.contact}>
              <a href="/">
                <img src="assets/icons/paypal.png" />
              </a>
            </div>
          </footer>
        </header>
      )
    }
  }
}
