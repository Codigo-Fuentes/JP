
THE GOLD STANDARD

case "the-gold-standard":
setTimeout(() => {
  root.style.setProperty('--taglineColor', '#f4d90e')
  root.style.setProperty('--taglineOpacity', '1')
  root.style.setProperty('--background', '#161A1D')
  root.style.setProperty('--backgroundImage', this.state.qbBackgroundImage)
  root.style.setProperty('--logoFill', 'white')
  root.style.setProperty('--logoOpacity', '.3')
  root.style.setProperty('--buttonBackground', 'grey')
  root.style.setProperty('--buttonText', 'black')        
  root.style.setProperty('--headerBorder', '#b4b4b4')
  root.style.setProperty('--categories', 'white')
  root.style.setProperty('--cardBorders', '#b4b4b4')
  root.style.setProperty('--cardBackground', '#0f0f0f')
  root.style.setProperty('--cardFrontHover', '#565656')
  root.style.setProperty('--cardFrontText', '#f4d90e')
  root.style.setProperty('--cardBackText', 'white')
  root.style.setProperty('--cardBackLogo', '#f4d90e')
  root.style.setProperty('--cardFlippedBackground', 'white')
  root.style.setProperty('--cardCompleteLogo', '#f4d90e')
  }, 1000)
break;



 // else {
      //   this.handleRemainingBusiness();
      //   return (
          // <div id="game-header">
          //   <header>
          //     <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 145" className="logo one" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.handleClick}>
          //       <path id="entourage" d="M182.5 8.2c-.3.7-.6 6.2-.7 12.3l-.3 11-5 .5c-4.8.5-5 .6-5.3 3.7-.2 1.8-.5 3.3-.6 3.3-.2 0-2.1-1.8-4.3-3.9-5.2-5.2-12.9-7.5-22.9-6.9-8.1.5-17 4.2-20.3 8.4-1 1.3-2.1 2.4-2.4 2.4-.3 0-.7-1.9-.9-4.3l-.3-4.2H90.6l.3 10.2c.3 10.5-.7 13.1-2.7 7.3-1.5-4.3-9.3-12.2-15.3-15.4-7-3.9-14-5.6-22.9-5.6-18.4 0-31.8 7.7-39.1 22.6-2.8 5.6-3.3 7.8-3.7 16.3C6.8 74 7.1 77 8.8 82.7 13.6 98.3 24.9 107.9 42 111c16.1 2.9 36-3.6 44.7-14.5 1.5-1.9 3.2-3.5 3.7-3.5.4 0 .6 3.4.5 7.6l-.4 7.6 15.5.1h15.5l.5-24.7.5-24.8 2.8-2.4c3.9-3.4 11.5-3.4 15.4 0l2.8 2.4.5 24.7.5 24.7h30V49h7.6l-.7 20.7c-.5 15.2-.3 22 .6 25.3 1.6 5.9 7.2 11.2 13.6 13.1 5.6 1.6 24.4 1.6 28.7 0 2.5-1 2.7-1.5 2.7-6.7v-5.7l4.6 4.3c2.5 2.3 7.5 5.6 11.2 7.3 6.2 2.9 7.7 3.2 18.8 3.5 8.9.3 13.8 0 18.5-1.2 12-3.1 22.6-11.5 26.6-21.1 2-5.1 3.3-5.8 3.3-1.9 0 7.8 5.8 16.7 13.4 20.6 3 1.6 6.5 2.3 13.2 2.6 11.9.6 18-1.3 24.2-7.5l4.4-4.4-.4 5.1-.3 5.1 14.5.1 14.5.1V30.5h-30l-.5 24C362.4 84 362 85 351.1 85c-3.8 0-5.6-.6-7.8-2.4l-2.8-2.4-.5-24.9-.5-24.8h-30v11.8c0 6.4-.3 11.7-.6 11.7-.4 0-1.4-2-2.3-4.5-1-2.4-3.7-6.6-6.1-9.3-8-8.9-19.4-13.2-35-13.2-14.8 0-24.8 3.5-33.5 11.6-2.6 2.4-4.9 4.4-5.1 4.4-.3 0-.5-2.4-.4-5.3v-5.2L220 32l-6.5-.5-.2-12-.1-12-15.1-.3c-11.6-.2-15.3 0-15.6 1zm88 38.1l4 11.2 12.3.3c6.7.1 12.2.6 12.2 1s-4.1 3.8-9 7.7c-5 3.8-9 7.6-9 8.5 0 1.3 3.5 14.8 5.4 20.7.4 1.3.3 2.3-.2 2.3s-5.1-3.2-10.2-7c-5.1-3.9-9.7-7-10.1-7-.4 0-4.8 3.2-9.8 7-5.1 3.9-9.6 7-10.2 7-.6 0-.7-.9-.3-2.3 3.8-11.8 6.2-21.3 5.4-22.2-.5-.5-4.7-3.9-9.4-7.5s-8.6-6.8-8.6-7.3c0-.4 5.3-.7 11.9-.7 8.3 0 12.2-.4 12.9-1.3.5-.6 2.5-5.8 4.3-11.5 1.8-5.6 3.6-10.2 3.9-10.2.3 0 2.3 5.1 4.5 11.3zM56.9 48.6c1.9 1.4 5.1 6.9 5.1 8.9 0 .3-5.2.5-11.5.5-7.4 0-11.5-.4-11.5-1 0-2.1 3-6.9 5.2-8.4 2.9-2.1 9.7-2 12.7 0zM223 50.1c0 .6-.7 3.6-1.6 6.6-1.6 5.6-1.6 22.8.1 28 .6 2 .4 2.3-1.7 2.3-1.3 0-3.4-.7-4.6-1.6-2.1-1.5-2.2-2.1-2.2-19V49h5c3 0 5 .4 5 1.1zM90.8 81.4c.2 3.2.1 6.5-.2 7.2-.4.9-3.5-.1-11.6-3.7-11.2-4.9-14-5.7-14-4 0 .5-1.2 2.3-2.6 4-5 5.9-15.1 6.3-20.3.7-2.2-2.4-4.4-9-3.3-10.1.3-.3 12.1-.4 26.1-.3l25.6.3.3 5.9zM476.2 28c-8.2 1.1-14.8 3.4-19.4 6.5-2 1.4-3.9 2.5-4.2 2.5-.3 0-.6-1.9-.8-4.3l-.3-4.2-6 .2c-6.9.3-13.5 2.5-16 5.3s-3.3 2.5-3.7-1.1l-.3-3.2-14.5.1h-14.5v78.4h30l.5-22c.5-20.4.7-22.3 2.6-24.9 4.6-6.2 7.1-6.8 33.9-8.2 10.3-.6 11-.7 12.1-3 1.8-3.5 3.2-4.1 10.1-4.1 5.5 0 6.4.3 8.2 2.6 4.4 5.6 2.7 6.6-15.8 9.4-15.6 2.4-18.5 3.2-24.3 6.9-15.3 9.7-13.8 33.6 2.6 42.4 3.5 1.9 5.6 2.2 15.6 2.2 10.7 0 11.9-.2 17.5-2.9 7.4-3.7 8-3.7 8-.6v2.5l14.5-.4c8-.1 14.6-.4 14.8-.6.1-.1-.2-1.4-.8-2.9-1.2-3.2-1.4-20.6-.2-20.6.4 0 1.4 1.5 2 3.4 2 5.3 10.9 12.9 17.8 15.1 8.1 2.5 19.5 2.4 25.6-.3 2.5-1.1 4.9-2.5 5.2-3.1 1.9-3 2.8-.7 2.4 6.5-.3 7-.6 7.8-3.4 10.4-3.7 3.3-10.6 4.6-16.2 3.1-4.4-1.2-6.9-3.5-7.4-7-.3-2.3-.3-2.3-13.7-2.2-7.4.1-13.8.4-14.1.6-1.1.7.6 10.9 2.3 14.1 4.7 9.1 16.8 13.3 38 13.4 17.7 0 33.1-5.3 38.6-13.4 4.7-6.8 5.5-10.9 5.6-25.9 0-7.5.2-13.7.5-13.7s1.4 2.1 2.4 4.8c2.6 6.1 10.6 14.1 17.7 17.5 14.9 7 35.5 5.4 49.5-3.9 5.8-3.9 13.1-12.1 11.8-13.3-1.2-1-23-10.1-24.3-10.1-.6 0-1.8 1.4-2.6 3.1-2.1 4-9.3 7.3-14.1 6.5-1.8-.4-4.7-1.8-6.3-3.2-3.2-2.7-5.9-9-4.4-10.5.5-.5 12.8-1 27.3-1.1l26.5-.3.3-3.4c.2-1.9-.2-6.4-.8-10-3.9-22.7-21.1-35.3-46-33.8-15.9.9-27.8 7.9-33.5 19.4-1.6 3.4-3.3 6.2-3.7 6.2-.4.1-.6-5-.5-11.2l.2-11.2h-26l-.3 2.7c-.4 3.4-1.2 3.5-4.2.3-5.8-6.2-24-7.4-35.1-2.3-6.3 2.9-13.4 9.6-15.1 14.5-.7 1.8-1.5 3.3-2 3.3-.4 0-1.2-1.9-1.9-4.2-1.7-6.5-7.9-12.1-16-14.6-7.8-2.4-22.7-3.4-31.7-2.2zm181.2 21.2c1.5 1.3 2.9 3.8 3.2 5.5l.7 3.3h-11.2c-10.6 0-11.1-.1-11.1-2.1 0-1.2 1.5-3.6 3.4-5.5 2.9-2.9 4.1-3.4 7.9-3.4 3.3 0 5.3.6 7.1 2.2zm-84.2 2.5c3.1 2.8 4.8 7.6 4.8 14 0 11.7-3.4 17.1-11.3 18-9.3 1.1-13.7-4.3-13.7-16.4 0-8.6 2.5-14.3 7.1-16.6 4.1-2.1 10.2-1.7 13.1 1zm-78.1 26C493 85.2 487 90 479.6 90c-6.8 0-9.9-6.1-5.2-10.3 2.7-2.4 19.6-7.8 20.9-6.6.5.3.4 2.4-.2 4.6z"/>
          //     </svg>  
                /* <defs>
                  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3 3" result="glow"/>
                    <feMerge>
                      <feMergeNode in="glow"/>
                      <feMergeNode in="glow"/>
                      <feMergeNode in="glow"/>
                    </feMerge>
                  </filter>
                </defs>
                  <use filter="url(#glow)" fill="#ffc251" href="#entourage"/>
                 <use fill="orange" filter="url(#glow)" href="#entourage"/>
                 <use fill="orange" href="#entourage"/>
                  <text style="filter: url(#glow); fill: #0c9" x="175" y="55"> Simple Glow </text>
                  <text x="175" y="55" style="fill: white"> Simple Glow </text>
                  <g id="logo" fill="none" fill-rule="evenodd">
                    <g id="rage">
                      <use fill="orange" filter="url(#glow)" href="#entourage"/>
                      <use fill="#FFF" href="#entourage"/>
                  </g>
                </g>
              
                
                <defs>
                  <filter id="glow" width="100%" height="100%" x="0" y="0" filterUnits="userSpaceOnUse">
                    <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
                    <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5"/>
                    <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter2"/>
                    <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="7"/>
                    <feColorMatrix in="shadowBlurOuter2" result="shadowMatrixOuter2" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"/>
                    <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter3"/>
                    <feGaussianBlur in="shadowOffsetOuter3" result="shadowBlurOuter3" stdDeviation="10"/>
                    <feColorMatrix in="shadowBlurOuter3" result="shadowMatrixOuter3" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
                    <feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter4"/>
                    <feGaussianBlur in="shadowOffsetOuter4" result="shadowBlurOuter4" stdDeviation="1"/>
                    <feColorMatrix in="shadowBlurOuter4" result="shadowMatrixOuter4" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.69678442 0"/>
                    <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter5"/>
                    <feGaussianBlur in="shadowOffsetOuter5" result="shadowBlurOuter5" stdDeviation="8"/>
                    <feColorMatrix in="shadowBlurOuter5" result="shadowMatrixOuter5" values="0 0 0 0 0.314369351 0 0 0 0 0.8883757 0 0 0 0 0.759899616 0 0 0 0.649371603 0"/>
                    <feMerge>
                      <feMergeNode in="shadowMatrixOuter1"/>
                      <feMergeNode in="shadowMatrixOuter2"/>
                      <feMergeNode in="shadowMatrixOuter3"/>
                      <feMergeNode in="shadowMatrixOuter4"/>
                      <feMergeNode in="shadowMatrixOuter5"/>
                    </feMerge>
                  </filter>
                  <path id="path-1" d="M271.2 118.7c-2 .3-3.3-.4-3.3-2.1 0-.7.3-1.8.8-3l5.1-11.7c.8-2 3-6.9 6.7-7.4 2-.3 3.3.4 3.3 2.2 0 .6-.2 1.7-.7 2.9l-5.2 11.7c-.8 2-3 7-6.7 7.4zm-38.1-.5c-1 2-3.1 6-6.3 6.4-2 .3-3.4-.4-3.4-2.2 0-.6.3-1.7.8-2.9l5.2-11.7c.8-2 3-7 6.7-7.4 2-.3 3.3.4 3.3 2.1 0 .8-.3 1.7-.8 3l-5.5 12.7zm52-18l-5.4 12c-.9 2.3-3.6 7.9-8.5 8.5-2.7.4-4.7-.4-5.3-2.5-1.5 2-3.6 3.7-6 4-2.6.4-4.4-.4-5-2.5-1.4 2-3.5 3.6-5.8 4-3 .3-5-.4-5.5-2.6-1.6 2-3.6 3.8-6 4-2.7.4-4.5-.4-5-2.6-1.4 2-3.3 3.8-5.8 4.1-3 .4-5-.6-5.4-3a14.4 14.4 0 0 1-8.5 4.9c-6 .8-9.8-2.6-6.2-10.7l4-8.7c.9-2.2 3.5-7.8 8.2-8.4 4.1-.6 5.8 2.1 4.1 6.2l-.6 1.7c-.8 2-3.1 1.8-2.4 0l.7-1.7c.7-1.8 1.4-4.7-1.8-4.2-3.6.4-5.6 5.4-6.4 7.3l-3.7 8.4c-2.5 5.5-.7 8.7 4 8 4.8-.6 8.2-5.1 9.4-7.5l5.3-12c1-2.3 3.7-7.9 8.6-8.5 2.2-.3 4 .4 4.7 2l.7-1.7c.6-1.4 2.7-1 2 .6l-8 18.7a9.2 9.2 0 0 0-.8 3c0 1.8 1 2.4 3 2.2 3.9-.6 6-5.7 6.6-7.1l7.5-17.4-2 .2c-1.5.2-1-1.9.6-2l2.3-.4 3.5-8c.6-1.5 2.7-1 2 .5l-3 7.2 3.6-.5c1.4-.2.7 2-.7 2.1l-4 .6-7.8 18.2a9.2 9.2 0 0 0-.8 3c0 1.7 1.4 2.3 3.6 2 4-.5 6-5.7 6.7-7v-.1l8-18.7c.6-1.5 2.7-1 2 .6l-8 18.7a9.1 9.1 0 0 0-.8 3c0 1.7 1 2.3 3 2.1 4-.5 6-5.7 6.6-7.1L272 101c.9-2.2 3.6-7.9 8.5-8.5 3.3-.4 5.5.8 5.5 3.9 0 1.1-.3 2.3-1 3.8zM267.8 90c-1.2.1-1.8-.7-1.6-1.8.2-1 1.2-2.1 2.2-2.3 1.1-.1 2 .7 1.7 1.8a3 3 0 0 1-2.3 2.3zM200 105c2-.2 3.4.5 3.4 2.2 0 .7-.3 1.8-.8 3l-5.2 11.7c-.8 2-3 6.9-6.7 7.4-2 .2-3.3-.4-3.3-2.2 0-.6.3-1.7.8-2.9l5.1-11.8c.8-1.9 3-6.8 6.7-7.3m-8.5 6.4c1-2.2 3.6-7.8 8.5-8.4 3.3-.5 5.5.7 5.5 3.8 0 1.2-.3 2.4-1 3.8l-5.3 12.1c-.9 2.2-3.6 7.8-8.5 8.5-3.3.4-5.5-.8-5.5-3.9 0-1.1.3-2.3 1-3.8l5.3-12zm116.5-4c.6-1.2 2.3-.8 1.8.5-1 2.8-4.1 8-8.5 8.6-3.1.4-5-.7-5-3.8 0-1.2.2-2.4.9-3.9l5.2-12c.5-1.1.8-2.3.8-3 0-1.6-1.4-2.5-3.3-2-3.2.6-5.3 4.2-6.3 6.2L288 111c-1 2.4-4.2 8-8.8 8.6-1.5.2-1.4-1.8 0-2 3.6-.4 5.6-4.7 6.7-7.1l8.1-18.8c.5-1.3 2.4-1 2.1.3 1.1-1 2.3-1.8 3.7-2 3.3-.7 5.5.7 5.5 3.8 0 1.2-.3 2.3-1 3.8l-5.2 12a9.2 9.2 0 0 0-.8 3c0 1.7 1 2.4 3 2.1 4-.5 6-5.8 6.6-7.1z"/>
                  <path id="path-2" d="M140.1 143.6c-6.2.9-12.5-.9-12.5-5 0-3.6 3.7-6.3 9.7-7.1 6.4-.9 12.2 2 18.1 6.2a34.2 34.2 0 0 1-15.3 6m5.2-19.8c-8.8-3-12.8-11.5-8.7-21a27.3 27.3 0 0 1 33.1-14.5c3.7 1.4 8 3.7 10.6 7l-4.4 10.2-5 12-1.4 2.8a30 30 0 0 1-24.2 3.5m36.3-26.5l.8 1.8c.2.6.5.7.9.7.5 0 1.1-.7 1-1.2V98c-.4-1-.9-2.2-1.5-3 2.7-5.8 5.6-10.5 8.5-11 1.8-.1 2.6 1.2 2.6 4-.1 9.2-9.3 22.7-21.4 30.6l.3-.6 5-12 3.8-8.6m28.3 36.2c-1-.5-2.4.8-1 1.7 1.6 1.2 2.9 2.7 2.6 5.9-.7 5.2-6 11.4-15 12.6-15.6 2-26.7-8.4-37.5-16.3 4.4-3.7 8.4-8.7 11.9-15.4 14.1-8 25-23.5 25.1-34.3 0-4-1.4-6.3-4.4-6-4 .6-7.3 5.4-10.2 11.4a25.4 25.4 0 0 0-10.5-6.8 29.8 29.8 0 0 0-36.2 16c-4.6 10.5-.4 20.4 9.5 23.6 7.9 2.7 16.1 1.3 23.6-2.2a44 44 0 0 1-10.5 12.5c-6.4-4.6-12.8-8-20-7-5.4.7-12 4-12 9.6 0 5.5 6.8 8 14.8 6.9 5.7-.7 11.6-2.8 17-6.9l1.8 1.4c10.3 7.8 21.2 17.8 37.5 15.7 10.6-1.4 16.5-8.8 17.2-14.8.3-3.4-.9-6.2-3.7-7.6"/>
                  <path id="path-3" d="M210.7 66.2c0 7.8 6.3 16 20.5 14.3 13.6-1.8 21-13.6 21-20.3 0-2.1-.6-3.8-1.5-5.3 2 .8 4.2 1.4 6.7 1 5-.6 8.2-5.1 8.2-8.7 0-2-.7-3.5-2.5-4.4-1.3-.6-2.6 1.5-1.1 2 1 .6 1.5 1.5 1.5 2.7 0 2.5-2.3 5.8-6 6.3-4 .5-7.8-1.9-12-2.8-1.2-.4-2.5-.5-4.2-.4h-.4c-3 .5-6.3 2.6-8 5.7-1.2 2 .6 2.6 1.6 1.3a8.6 8.6 0 0 1 6.4-4.8h3.3c5.4 1 5.7 6.5 5.7 7.7 0 6-6.8 16.3-18.7 17.9-12.4 1.5-18.5-5.4-18.5-12.5 0-7.4 7.1-15.1 15.2-16.5h.7c.8-.2 1.1-.8 1.1-1.3s-.3-1-1.1-.8h-.5c-6.7.7-9.8-3.5-9.8-7.3 0-6.7 6.3-12.6 14.6-13.7C241 25.3 246 30 246 35c0 3.8-2.8 7.5-7.2 8.1-3.4.4-6.5-1.3-6.5-4.5 0-1 .4-1.7.8-2.4 1-1.1-.6-2-1.7-.9-.9 1.2-1 2.1-1 3.4 0 4.6 3.4 7 8.4 6.4 5.6-.7 9.1-5.6 9.1-10.5 0-5.7-6-11.3-15.1-10.1-9.4 1.2-16.7 8.2-16.7 15.8 0 3.6 2.3 7.5 6.7 8.8-7 3.3-12.2 10.6-12.2 17.2"/>
                  <path id="path-4" d="M131.8 46.4c.8-2 3-6.9 6.7-7.4 2-.2 3.3.4 3.3 2.2 0 .7-.3 1.7-.8 2.9l-5.2 12-.3.7c-1 2.1-3.1 6-6.4 6.4-1.9.3-3.3-.4-3.3-2.1 0-.7.3-1.8.8-3l5.2-11.7zm-17 2.2c.9-1.9 2.9-6.8 6.5-7.3 3.2-.4 2.5 2.4 1.8 4.2-1.7 4.3-3.7 6.6-7 7-1 .2-2.3-.1-2.7-.4l1.5-3.5zm71.9-9.5c.8-1.9 2.8-6.8 6.4-7.3 3.2-.4 2.5 2.4 1.8 4.2-1.7 4.3-3.7 6.6-7 7-1 .2-2.3-.1-2.7-.5l1.5-3.4zM129 65.2c2.6-.3 4.5-2.1 5.9-4 .5 2.1 2.3 3 5 2.6 2.4-.3 4.5-2 6-4 .5 2 2.5 2.9 5.3 2.5 2.5-.3 4.4-2.2 5.8-4 .5 2 2.3 3 5 2.6 2.4-.3 4.4-2 6-4 .4 2 2.2 2.9 4.9 2.5 2.8-.4 5.2-2.8 6.7-5.2.9 2.8 3.6 3.9 7.3 3.4 5-.7 9.5-5 11.2-9 .6-1.4-1.2-1.7-1.8-.6-1.2 2.4-4.6 7-9.4 7.5-4.7.7-6.5-2.5-4-8l1.2-3c.9.7 2.3 1 3.7.8 4.2-.6 7-3.4 9.3-9.2 1.6-4.1 0-6.9-4.1-6.3-4.8.6-7.4 6.2-8.3 8.4l-3.9 8.7a18 18 0 0 0-1 3.2c-.1 0-.2 0-.2.2-.6 1.3-2.7 6.6-6.7 7.1-1.9.3-3-.4-3-2.1 0-.7.3-1.8.8-3l15.5-35.8c.7-1.6-1.4-2-2-.6l-15.5 35.8c-.6 1.4-2.7 6.6-6.7 7.1-1.8.3-3-.4-3-2 0-.7.4-1.8.9-3l8-18.8c.7-1.6-1.4-2-2-.6l-8 18.7-.4.8c-1 2-3.1 6-6.3 6.4-2 .2-3.4-.4-3.4-2.2 0-.6.3-1.7.8-2.9l8.2-18.7c.6-1.6-1.5-2-2-.6l-8.2 18.7c-.6 1.5-2.7 6.7-6.7 7.2-1.9.2-3-.4-3-2.2 0-.6.4-1.7.9-3l15.4-35.8c.7-1.6-1.4-2-2-.6L143.2 39c-.7-1.6-2.5-2.3-4.7-2-4.9.6-7.6 6.3-8.6 8.5l-5.3 12c-1.2 2.4-4.6 7-9.3 7.6-4.8.6-6.6-2.6-4.2-8l1.3-3c1 .6 2.4.9 3.7.7 4.3-.6 7-3.4 9.3-9.2 1.6-4.1 0-6.9-4.1-6.3-4.8.6-7.3 6.2-8.3 8.4l-3.9 8.7a18 18 0 0 0-1 3.2l-.2.2c-.6 1.3-2.7 6.6-6.7 7.1-1.9.3-3-.4-3-2.1 0-.7.4-1.8.9-3l5.2-12c.7-1.4 1-2.6 1-3.8 0-3-2.3-4.3-5.5-3.9-1.3.2-2.5 1-3.7 2l7.3-16.6c.8-1.7-1.5-2-2-.6L85.9 62.7c-1.2 2.3-4.6 6.9-9.4 7.5-4.7.6-6.5-2.5-4-8l3.7-8.4c.8-2 2.8-6.9 6.4-7.4 3.1-.4 2.5 2.4 1.8 4.2l-.8 1.7c-.7 1.8 1.6 2.1 2.4 0l.7-1.6c1.6-4.1 0-6.8-4.1-6.3-4.8.6-7.4 6.2-8.3 8.4l-3.9 8.8c-3.6 8 0 11.4 6.1 10.6 5-.7 9.5-5 11.2-9l5.5-12.6c1-2 3.4-6 6.6-6.5 2-.2 3.3.5 3.3 2.2 0 .6-.3 1.8-.8 3l-5.3 12c-.6 1.4-.9 2.6-.9 3.8 0 3 2 4.3 5.1 3.8 2.9-.3 5.2-2.7 6.8-5.1.8 2.7 3.6 3.8 7.3 3.3 3.2-.5 6.3-2.4 8.5-4.9.4 2.5 2.4 3.4 5.3 3z"/>
                  <path id="path-5" d="M70.4 25.6c3.7-.5 6.6 1.6 6.6 5 0 2-1.6 5-4.7 5.6-1.6.2-1.6 2.2 0 2 4.4-.7 6.9-5 6.9-8 0-5.2-4.7-7.2-8.9-6.6-5 .6-11.8 5.8-11.8 13.6 0 7.4 4.5 13.5 4.5 20.5 0 13.4-11.5 22.6-21.7 24-10 1.2-19.1-4.5-19.1-14.8 0-9.4 6.7-18.6 17.2-20C48 45.8 52 49.7 52 55.3c0 2-.8 4.1-2.5 5.9-1.4 1.5.2 2.5 1.5 1.3 2-2.2 3.2-5 3.2-7.5 0-6.6-4.8-11.6-14.6-10.3A23 23 0 0 0 20 67.2c0 11.5 9.6 18.1 21.3 16.6 11.2-1.5 23.8-11.5 23.8-26.4 0-8-4.4-13.3-4.4-20.5 0-6.4 5.5-10.8 9.7-11.3"/>
                </defs>
                <g id="logo" fill="none" fill-rule="evenodd">
                  <g id="rage">
                  <use fill="orange" filter="url(#glow)" href="#entourage"/>
                  <use fill="#FFF" href="#entourage"/>
                  </g>
                </g>
                 <g id="schedule-location" fill="none" fill-rule="evenodd">
                  <g id="ocation">
                    <use fill="#000" filter="url(#glow)"  href="#path-1"/>
                    <use fill="#FFF" href="#path-1"/>
                  </g>
                  <g id="L">
                    <use fill="#000" filter="url(#glow)" href="#path-2"/>
                    <use fill="#FFF" href="#path-2"/>
                  </g>
                  <g id="et">
                    <use fill="#000" filter="url(#glow)" href="#path-3"/>
                    <use fill="#FFF" href="#path-3"/>
                  </g>
                  <g id="chedule">
                    <use fill="#000" filter="url(#glow)" href="#path-4"/>
                    <use fill="#FFF" href="#path-4"/>
                  </g>
                  <g id="S">
                    <use fill="#000" filter="url(#glow)" href="#path-5"/>
                    <use fill="#FFF" href="#path-5"/>
                  </g>
                </g> */}
        //       <p className="tagLine postGame">&nbsp; {this.state.tagLine} &nbsp;</p>
        //     </header>
        //   </div>
        // )
    //   }
    // }


      /* OLD DEFAULT THEME */
/* 
  --background: blue;
  --backgroundImage: url(../img/classic3.jpg);
  --backgroundImageOpacity: .7;
  --logoFill: black;
  --logoOpacity: .15;
  --logoTransition: '1s linear';
  --taglineColor: rgb(255, 128, 128);
  --taglineOpacity: 1;
  --taglineShadow: 1px 1px black;
  --themeButtonsDisplay: '';
  --themeButtonsOpacity: 1;
  --ornamentalVisibility: hidden;
  --buttonBackground: hsl(0, 0%, 60%);
  --buttonText: black;
  --headerBorder: black;
  --categories: black;
  --cardBorders: black;
  --cardBackground: black;
  --cardFrontHover: black;
  --cardFrontText: rgb(255, 128, 128);
  --frontTextShadow: 4px 4px gray;
  --cardBackText: white;
  --cardBackLogo: black;
  --cardFlippedBackground: black;
  --cardCompleteLogo: black;
  --tester: 0 0 10px yellow, 0 0 20px red, 0 0 30px hsl(22, 100%, 39%), 0 0 40px hsl(22, 100%, 39%), 0 0 50px hsl(22, 100%, 39%), 0 0 60px hsl(22, 100%, 39%), 0 0 70px hsl(22, 100%, 39%);
  --tester2: .5px .5px orange, 0 0 10px yellow, 0 0 20px red, 0 0 30px hsl(22, 100%, 39%), 0 0 40px hsl(22, 100%, 39%), 0 0 50px hsl(22, 100%, 39%), 0 0 60px hsl(22, 100%, 39%), 0 0 70px hsl(22, 100%, 39%); */
 
  /* SEXY THEME */
/* 
  --background: white;
  --backgroundImage: url(../img/light0.jpg);
  --backgroundImageOpacity: .7;
  --logoFill: black;
  --logoOpacity: .5;
  --logoBackFill: #ff8080;
  --logoFrontFill: white;
  --logoTransition: '1s linear';
  --taglineColor: #ff8080;
  --taglineOpacity: 1;
  --taglineShadow: 1px 1px black;
  --themeButtonsDisplay: '';
  --themeButtonsOpacity: 1;
  --ornamentalVisibility: hidden;
  --buttonBackground: hsl(0, 0%, 60%);
  --buttonText: black;
  --headerBorder: black;
  --categories: black;
  --categoriesShadow: 1px .1px var(--salmonILike);
  --cardBorders: black;
  --cardBackground: black;
  --cardBackgroundOpacity: .9;
  --cardFrontHover: black;
  --cardFrontText: #ff8080;
  --frontTextShadow: 2px 2px white !important;
  --cardBackText: white;
  --cardBackLogo: white;
  --cardFlippedBackground: black;
  --cardCompleteLogo: black; */

  /* CLASSIC THEME */

  /* --background:white;
  --backgroundImage: url(../img/classic4.png);
  --backgroundImageOpacity: .1;
  --backgroundBlendMode: multiply;
  --logoFill: white;
  --logoOpacity: .4;
  --logoBackFill: rgb(253, 192, 45);
  --logoFrontFill: rgb(253, 192, 45);
  --logoTransition: '1s linear';
  --taglineColor: rgb(253, 192, 45);
  --taglineOpacity: 1;
  --taglineShadow: none;
  --themeButtonsDisplay: '';
  --themeButtonsOpacity: 1;
  --ornamentalVisibility: hidden;
  --buttonBackground: hsl(0, 0%, 60%);
  --buttonText: black;
  --headerBorder: 4px solid rgb(14, 35, 228);
  --categories: white;
  --cardBorders: black;
  --cardBackgroundFront: rgb(14, 35, 228);

  --cardBackgroundBack: rgb(14, 35, 228);
  --cardBackgroundOpacity: .7;
  --cardFrontHover: rgba(4, 15, 141, .7);
  --cardFrontText: rgb(253, 192, 45);
  --frontTextShadow: none;
  --backTextShadow: none;
  --cardBackText: white;
  --cardBackLogo: white;
  --cardFlippedBackground: hsl(180, 100%, 50%);
  --cardCompleteLogo: black; */

  /* HYDE THEME */

  /* --background: #0ff;
  --backgroundImage: url(../img/hyde7.png);
  --backgroundImageOpacity: .7;
  --backgroundBlendMode: multiply;
  --logoFill: #0ff;
  --logoOpacity: .2;
  --logoBackFill: hsla(180, 100%, 50%, .3);
  --logoFrontFill: hsla(180, 100%, 50%, 1);
  --logoTransition: '1s linear';
  --taglineColor: hsl(2, 100%, 69%);
  --taglineOpacity: 1;
  --taglineShadow: .5px .5px yellow, 0 0 10px yellow, 0 0 20px red, 0 0 30px hsl(22, 100%, 39%), 0 0 40px hsl(22, 100%, 39%), 0 0 50px hsl(22, 100%, 39%), 0 0 60px hsl(22, 100%, 39%), 0 0 70px hsl(22, 100%, 39%);
  --themeButtonsDisplay: '';
  --themeButtonsOpacity: 1;
  --ornamentalVisibility: hidden;
  --buttonBackground: hsl(0, 0%, 60%);
  --buttonText: black;
  --headerBorder: #00ffff;
  --categories: #267F7F;
  --categoriesShadow: 1px 1px black;
  --cardBorders: black;
  --cardBackgroundFront: hsl(0, 0%, 100%, .1);
  --cardBackgroundBack: rgb(27, 27, 27);
  --cardBackgroundOpacity: .7;
  --cardFrontHover: hsla(180, 100%, 50%, .9);
  --cardFrontText: hsl(22, 100%, 69%);
  --frontTextShadow: .5px .5px orange, 0 0 10px yellow, 0 0 20px red, 0 0 30px hsl(22, 100%, 39%), 0 0 40px hsl(22, 100%, 39%), 0 0 50px hsl(22, 100%, 39%), 0 0 60px hsl(22, 100%, 39%), 0 0 70px hsl(22, 100%, 39%);
  --backTextShadow: 0 0 10px yellow, 0 0 20px red, 0 0 30px hsl(22, 100%, 39%), 0 0 40px hsl(22, 100%, 39%), 0 0 50px hsl(22, 100%, 39%), 0 0 60px hsl(22, 100%, 39%), 0 0 70px hsl(22, 100%, 39%);
  --cardBackText: hsla(180, 100%, 50%, 1);
  --cardBackLogo: white;
  --cardFlippedBackground: hsl(180, 100%, 50%);
  --cardCompleteLogo: black; */

  /* CURRENT DEFAULT */