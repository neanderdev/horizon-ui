"use client";

import "./style.css";

import { FormEvent } from "react";

export default function Home() {
  function handleLogin(event: FormEvent) {
    event.preventDefault();

    console.log('login');
  }

  return (
    <main className="container">
      <section className="form">
        <div>
          <div className="header-form">
            <div className="header-form-info">
              <h2>Sign In</h2>

              <span>Enter your email and password to sign in!</span>
            </div>

            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_101_9040)">
                  <path d="M19.7874 10.225C19.7874 9.56668 19.7291 8.94168 19.6291 8.33334H10.2124V12.0917H15.6041C15.3624 13.325 14.6541 14.3667 13.6041 15.075V17.575H16.8207C18.7041 15.8333 19.7874 13.2667 19.7874 10.225Z" fill="#4285F4" />

                  <path d="M10.2126 20C12.9126 20 15.1709 19.1 16.8209 17.575L13.6043 15.075C12.7043 15.675 11.5626 16.0417 10.2126 16.0417C7.60427 16.0417 5.39593 14.2833 4.60427 11.9083H1.2876V14.4833C2.92926 17.75 6.30427 20 10.2126 20Z" fill="#34A853" />

                  <path d="M4.60407 11.9083C4.39574 11.3083 4.2874 10.6667 4.2874 9.99999C4.2874 9.33333 4.40407 8.69166 4.60407 8.09166V5.51666H1.2874C0.604068 6.86666 0.212402 8.38333 0.212402 9.99999C0.212402 11.6167 0.604068 13.1333 1.2874 14.4833L4.60407 11.9083Z" fill="#FBBC05" />

                  <path d="M10.2126 3.95833C11.6876 3.95833 13.0043 4.46667 14.0459 5.45834L16.8959 2.60833C15.1709 0.991667 12.9126 0 10.2126 0C6.30427 0 2.92926 2.25 1.2876 5.51667L4.60427 8.09167C5.39593 5.71667 7.60427 3.95833 10.2126 3.95833Z" fill="#EA4335" />
                </g>

                <defs>
                  <clipPath id="clip0_101_9040">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              Sign in with Google
            </button>
          </div>

          <div className="separator">
            <hr />

            <span>or</span>

            <hr />
          </div>

          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="email">Email<span>*</span></label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="mail@simmmple.com"
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password<span>*</span></label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Min. 8 characters"
                required
                minLength={8}
              />
            </div>

            <div className="forgot-and-checkout">
              <div className="checkout-wrapper">
                <input id="keep-me-logged-in" name="keep-me-logged-in" type="checkbox" />

                <label htmlFor="keep-me-logged-in">Keep me logged in</label>
              </div>

              <a href="">
                Forget password?
              </a>
            </div>

            <button type="submit">
              Sign In
            </button>
          </form>

          <span>
            Not registered yet?

            <a href="">
              Create an Account
            </a>
          </span>
        </div>

        <footer>
          <p>
            © 2022 Horizon UI. All Rights Reserved. Made with love by <span>Simmmple!</span>
          </p>
        </footer>
      </section>

      <section className="info">
        <div>
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 280 280" fill="none">
              <path d="M69.0231 186.199H210.362V247.65H69.0231V186.199Z" fill="white" />

              <path d="M215.278 199.103C215.278 178.894 207.315 159.512 193.14 145.222C178.965 130.932 159.739 122.903 139.693 122.903C119.646 122.903 100.421 130.932 86.2455 145.222C72.0705 159.512 64.107 178.894 64.107 199.103L139.693 199.103H215.278Z" fill="white" />

              <path fillRule="evenodd" clipRule="evenodd" d="M140 218.153C183.272 218.153 218.351 183.075 218.351 139.803C218.351 96.5306 183.272 61.4517 140 61.4517C96.7278 61.4517 61.6489 96.5306 61.6489 139.803C61.6489 183.075 96.7278 218.153 140 218.153ZM140 279.605C217.211 279.605 279.802 217.013 279.802 139.803C279.802 62.5917 217.211 0 140 0C62.789 0 0.197266 62.5917 0.197266 139.803C0.197266 217.013 62.789 279.605 140 279.605Z" fill="white" />
            </svg>

            <svg width="280" height="51" viewBox="0 0 280 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_101_9059)">
                <path d="M255.649 13.6677V28.6195C255.649 31.6293 253.652 33.6358 250.656 33.6358C247.661 33.6358 245.664 31.6293 245.664 28.6195V13.6677H240.504V28.6195C240.504 34.0241 244.565 38.1666 250.656 38.1666C256.747 38.1666 260.808 34.0241 260.808 28.6195V13.6677H255.649ZM264.819 37.7783H269.978V13.6677H264.819V37.7783Z" fill="white" />

                <path fillRule="evenodd" clipRule="evenodd" d="M267.874 5.3491H242.03C237.912 5.3491 234.575 8.71801 234.575 12.8738V38.9593C234.575 43.115 237.912 46.4839 242.03 46.4839H267.874C271.992 46.4839 275.329 43.115 275.329 38.9593V12.8738C275.329 8.71801 271.992 5.3491 267.874 5.3491ZM242.03 0.834305C235.442 0.834305 230.102 6.22458 230.102 12.8738V38.9593C230.102 45.6085 235.442 50.9987 242.03 50.9987H267.874C274.462 50.9987 279.803 45.6085 279.803 38.9593V12.8738C279.803 6.22458 274.462 0.834305 267.874 0.834305H242.03Z" fill="white" />

                <path d="M51.3862 38.006H68.4988V45.5156H51.3862V38.006Z" fill="white" />

                <path d="M69.0941 39.5843C69.0941 37.1146 68.1299 34.746 66.4136 32.9997C64.6974 31.2534 62.3697 30.2723 59.9425 30.2723C57.5154 30.2723 55.1877 31.2534 53.4714 32.9997C51.7552 34.746 50.791 37.1146 50.791 39.5843H69.0941Z" fill="white" />

                <path fillRule="evenodd" clipRule="evenodd" d="M59.9798 41.9104C65.219 41.9104 69.4662 37.6236 69.4662 32.3356C69.4662 27.0476 65.219 22.7608 59.9798 22.7608C54.7407 22.7608 50.4935 27.0476 50.4935 32.3356C50.4935 37.6236 54.7407 41.9104 59.9798 41.9104ZM59.9798 49.42C69.3281 49.42 76.9064 41.7711 76.9064 32.3356C76.9064 22.9001 69.3281 15.2511 59.9798 15.2511C50.6315 15.2511 43.0532 22.9001 43.0532 32.3356C43.0532 41.7711 50.6315 49.42 59.9798 49.42ZM168.012 41.9104C173.252 41.9104 177.499 37.6236 177.499 32.3356C177.499 27.0476 173.252 22.7608 168.012 22.7608C162.773 22.7608 158.526 27.0476 158.526 32.3356C158.526 37.6236 162.773 41.9104 168.012 41.9104ZM168.012 49.42C177.36 49.42 184.939 41.7711 184.939 32.3356C184.939 22.9001 177.36 15.2511 168.012 15.2511C158.664 15.2511 151.086 22.9001 151.086 32.3356C151.086 41.7711 158.664 49.42 168.012 49.42Z" fill="white" />

                <path d="M0.197266 49.4163H8.06155V30.5182H28.7832V49.4163H36.7098V2.48593H28.7832V23.5259H8.06155V2.48593H0.197266V49.4163ZM99.4251 15.0847C95.3062 15.0847 92.0607 16.4705 90.313 20.1871V15.4627H83.2604V49.4163H90.7498V30.2032C90.7498 24.9117 93.8702 21.888 98.4891 21.888H102.546V15.0847H99.4251ZM106.964 10.9901H114.454V2.48593H106.964V10.9901ZM106.964 49.4163H114.454V15.4627H106.964V49.4163ZM118.794 49.4163H146.382V42.6129H128.906L146.32 21.6361V15.4627H119.606V22.266H136.458L118.794 43.2429V49.4163ZM206.345 14.7068C202.163 14.7068 198.669 16.4075 196.796 19.5572V15.4627H189.743V49.4163H197.233V29.2583C197.233 24.6597 200.104 21.699 204.41 21.699C208.655 21.699 211.525 24.6597 211.525 29.2583V49.4163H219.015V27.3685C219.015 19.9352 213.835 14.7068 206.345 14.7068Z" fill="white" />
              </g>

              <defs>
                <clipPath id="clip0_101_9059">
                  <rect width="279.605" height="50.1644" fill="white" transform="translate(0.197266 0.835114)" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="info-site">
            <span>Learn more about Horizon UI on</span>

            <a href="">horizon-ui.com</a>
          </div>
        </div>

        <footer>
          <div className="links">
            <a href="">Marketplace</a>

            <a href="">License</a>

            <a href="">Terms of Use</a>

            <a href="">Blog</a>
          </div>

          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <g clipPath="url(#clip0_101_9074)">
                <path d="M9.95703 18C12.733 18 15.2684 16.737 16.9481 14.6675C17.1966 14.3613 16.9256 13.9141 16.5416 13.9872C12.1751 14.8188 8.16522 11.4709 8.16522 7.06303C8.16522 4.52398 9.52444 2.18914 11.7335 0.931992C12.074 0.738211 11.9884 0.221941 11.6015 0.150469C11.059 0.0504468 10.5086 8.21369e-05 9.95703 0C4.98914 0 0.957031 4.02578 0.957031 9C0.957031 13.9679 4.98281 18 9.95703 18Z" fill="white" />
              </g>

              <defs>
                <clipPath id="clip0_101_9074">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </footer>
      </section>
    </main>
  )
}
