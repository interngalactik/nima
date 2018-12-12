import { h, Component } from 'preact';
import style from './style';

export default class Residents extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time }) {
		return (
			<div class={style.main__container}>
				<h1>Resident: {user}</h1>
				<p>This is the user profile for a resident named { user }.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>
			</div>
		);
	}
}