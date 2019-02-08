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
	
	renderFooter = (forDesktop) => (
		<footer>
			<div class={style.icons}>
				{ forDesktop && <h1>Find us on:</h1> }
				<div class={style.contact}>
					<a href="mailto:contact@sanctuarnima.ro">
						<img src="assets/icons/mail.png" />
					</a>
					<a href="tel:+40764166966">
						<img src="assets/icons/phone.png" />
					</a>
					<a href="https://goo.gl/maps/17qtt1LKnMs" target="__blank">
						<img src="assets/icons/location.png" />
					</a>
					<a href="https://www.facebook.com/NimaSanctuary/">
						<img src="assets/icons/facebook.png" target="__blank" />
					</a>
					<a href="https://www.instagram.com/nimasanctuary/" target="__blank">
						<img src="assets/icons/instagram.png" />
					</a>
					<a href="https://www.youtube.com/channel/UCvPstz0mFSA5HubBD0sHmJw" target="__blank">
						<img src="assets/icons/youtube.png" />
					</a>
					<a href="https://www.paypal.me/nimasanctuary" target="__blank">
						<img src="assets/icons/paypal.png" />
					</a>
				</div>
			</div>
		</footer>
		
	)

	render({ mq }, { showSideBar }) {
  	if (mq.matches) {
  		return (
  			<div>
  				<div class={style.mobile__header}>
  					<Link className={style.logo} href="/">
  						<img src="assets/icons/android-chrome-192x192.png" />
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
  							<div class={style.more__to__come}>More to come.<br /> Make sure you follow us!</div>
  							{/* <nav>
									<Link activeClassName={style.active} onClick={this.toggleSidebar} href="/about">About Us</Link>
									<Link activeClassName={style.active} onClick={this.toggleSidebar} href="/residents">Meet the Residents</Link>
									<Link activeClassName={style.active} onClick={this.toggleSidebar} href="/campaigns">Campaigns</Link>
									<Link activeClassName={style.active} onClick={this.toggleSidebar} href="/get-involved">Get Involved</Link>
              	</nav> */}
  							{ this.renderFooter() }
  						</header>
  						:
  						null
  				}
  			</div>
  		);
		}

  	return (
  		<header class={style.header}>
  			<Link activeClassName={style.active} className={style.logo} href="/">
  				<img src="assets/images/nima_logo.png" />
  			</Link>
  			{/* <nav>
							<Link activeClassName={style.active} href="/about">About Us</Link>
							<Link activeClassName={style.active} href="/residents">Meet the Residents</Link>
							<Link activeClassName={style.active} href="/campaigns">Campaigns</Link>
							<Link activeClassName={style.active} href="/get-involved">Get Involved</Link>
        </nav> */}
  			{ this.renderFooter(true) }
  		</header>
  	);
    
	}
}
