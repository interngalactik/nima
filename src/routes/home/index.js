import { h, Component} from 'preact';
import style from './style';

export default class Home extends Component {
  render() {
    return(
      <div class={style.main__container}>
        <div class={style.home__header}>
          {/* <img src="assets/images/nima_cover.jpg" /> */}
          <span id={style.header__overlay}></span>
          <div class={style.header__content}>
            <div class={style.first__part}>
              <div class={style.header__text}>
                <h1>Nima Sanctuary</h1>
                <h2>A safe heaven for farm animals</h2>
              </div>
            </div>
            <div class={style.secont__part}>
              <div class={style.header__buttons}>
                <div class={style.header__text}>
                  <h2>The first of its kind in Romania</h2>
                </div>
                {/* <button>HOW TO HELP</button> */}
                <a href="https://www.paypal.me/nimasanctuary" target="__blank" id={style.donate__btn}>DONATE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}