import React from 'react';
import * as audio from './audio';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {view: 'points', completed: false};
    }

    clickHandler(event) {
        if (this.state.view === 'points') {
            audio.play("flip");
            setTimeout(() => {
            if (this.state.view === "question") {
                   audio.play("countdown");
                }
            }, 1800);
            this.setState({view: 'question', flipping: true});
        } else if (this.state.view === 'question') {
            audio.stop("countdown");
            this.setState({view: 'answer'});
        } else {
            audio.play("flipBack");
            this.setState({view: 'points', completed: true, flipping: true});
        }
    }

    getLabelBack() {
        return {__html: this.state.view === 'question' ? this.props.question.question : this.props.question.answer};
    }

    transitionEndHandler(event) {
        if (event.propertyName === 'width') {
            this.setState({flipping: false});
        }
    }

    render() {
        let style = {
                width: this.props.width + 'px',
                height: this.props.height + 'px',
                transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
                WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
            },
            front = this.state.completed ? 
            <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 145" id="logo-card-back" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.handleClick}>
                          <path d="M182.5 8.2c-.3.7-.6 6.2-.7 12.3l-.3 11-5 .5c-4.8.5-5 .6-5.3 3.7-.2 1.8-.5 3.3-.6 3.3-.2 0-2.1-1.8-4.3-3.9-5.2-5.2-12.9-7.5-22.9-6.9-8.1.5-17 4.2-20.3 8.4-1 1.3-2.1 2.4-2.4 2.4-.3 0-.7-1.9-.9-4.3l-.3-4.2H90.6l.3 10.2c.3 10.5-.7 13.1-2.7 7.3-1.5-4.3-9.3-12.2-15.3-15.4-7-3.9-14-5.6-22.9-5.6-18.4 0-31.8 7.7-39.1 22.6-2.8 5.6-3.3 7.8-3.7 16.3C6.8 74 7.1 77 8.8 82.7 13.6 98.3 24.9 107.9 42 111c16.1 2.9 36-3.6 44.7-14.5 1.5-1.9 3.2-3.5 3.7-3.5.4 0 .6 3.4.5 7.6l-.4 7.6 15.5.1h15.5l.5-24.7.5-24.8 2.8-2.4c3.9-3.4 11.5-3.4 15.4 0l2.8 2.4.5 24.7.5 24.7h30V49h7.6l-.7 20.7c-.5 15.2-.3 22 .6 25.3 1.6 5.9 7.2 11.2 13.6 13.1 5.6 1.6 24.4 1.6 28.7 0 2.5-1 2.7-1.5 2.7-6.7v-5.7l4.6 4.3c2.5 2.3 7.5 5.6 11.2 7.3 6.2 2.9 7.7 3.2 18.8 3.5 8.9.3 13.8 0 18.5-1.2 12-3.1 22.6-11.5 26.6-21.1 2-5.1 3.3-5.8 3.3-1.9 0 7.8 5.8 16.7 13.4 20.6 3 1.6 6.5 2.3 13.2 2.6 11.9.6 18-1.3 24.2-7.5l4.4-4.4-.4 5.1-.3 5.1 14.5.1 14.5.1V30.5h-30l-.5 24C362.4 84 362 85 351.1 85c-3.8 0-5.6-.6-7.8-2.4l-2.8-2.4-.5-24.9-.5-24.8h-30v11.8c0 6.4-.3 11.7-.6 11.7-.4 0-1.4-2-2.3-4.5-1-2.4-3.7-6.6-6.1-9.3-8-8.9-19.4-13.2-35-13.2-14.8 0-24.8 3.5-33.5 11.6-2.6 2.4-4.9 4.4-5.1 4.4-.3 0-.5-2.4-.4-5.3v-5.2L220 32l-6.5-.5-.2-12-.1-12-15.1-.3c-11.6-.2-15.3 0-15.6 1zm88 38.1l4 11.2 12.3.3c6.7.1 12.2.6 12.2 1s-4.1 3.8-9 7.7c-5 3.8-9 7.6-9 8.5 0 1.3 3.5 14.8 5.4 20.7.4 1.3.3 2.3-.2 2.3s-5.1-3.2-10.2-7c-5.1-3.9-9.7-7-10.1-7-.4 0-4.8 3.2-9.8 7-5.1 3.9-9.6 7-10.2 7-.6 0-.7-.9-.3-2.3 3.8-11.8 6.2-21.3 5.4-22.2-.5-.5-4.7-3.9-9.4-7.5s-8.6-6.8-8.6-7.3c0-.4 5.3-.7 11.9-.7 8.3 0 12.2-.4 12.9-1.3.5-.6 2.5-5.8 4.3-11.5 1.8-5.6 3.6-10.2 3.9-10.2.3 0 2.3 5.1 4.5 11.3zM56.9 48.6c1.9 1.4 5.1 6.9 5.1 8.9 0 .3-5.2.5-11.5.5-7.4 0-11.5-.4-11.5-1 0-2.1 3-6.9 5.2-8.4 2.9-2.1 9.7-2 12.7 0zM223 50.1c0 .6-.7 3.6-1.6 6.6-1.6 5.6-1.6 22.8.1 28 .6 2 .4 2.3-1.7 2.3-1.3 0-3.4-.7-4.6-1.6-2.1-1.5-2.2-2.1-2.2-19V49h5c3 0 5 .4 5 1.1zM90.8 81.4c.2 3.2.1 6.5-.2 7.2-.4.9-3.5-.1-11.6-3.7-11.2-4.9-14-5.7-14-4 0 .5-1.2 2.3-2.6 4-5 5.9-15.1 6.3-20.3.7-2.2-2.4-4.4-9-3.3-10.1.3-.3 12.1-.4 26.1-.3l25.6.3.3 5.9zM476.2 28c-8.2 1.1-14.8 3.4-19.4 6.5-2 1.4-3.9 2.5-4.2 2.5-.3 0-.6-1.9-.8-4.3l-.3-4.2-6 .2c-6.9.3-13.5 2.5-16 5.3s-3.3 2.5-3.7-1.1l-.3-3.2-14.5.1h-14.5v78.4h30l.5-22c.5-20.4.7-22.3 2.6-24.9 4.6-6.2 7.1-6.8 33.9-8.2 10.3-.6 11-.7 12.1-3 1.8-3.5 3.2-4.1 10.1-4.1 5.5 0 6.4.3 8.2 2.6 4.4 5.6 2.7 6.6-15.8 9.4-15.6 2.4-18.5 3.2-24.3 6.9-15.3 9.7-13.8 33.6 2.6 42.4 3.5 1.9 5.6 2.2 15.6 2.2 10.7 0 11.9-.2 17.5-2.9 7.4-3.7 8-3.7 8-.6v2.5l14.5-.4c8-.1 14.6-.4 14.8-.6.1-.1-.2-1.4-.8-2.9-1.2-3.2-1.4-20.6-.2-20.6.4 0 1.4 1.5 2 3.4 2 5.3 10.9 12.9 17.8 15.1 8.1 2.5 19.5 2.4 25.6-.3 2.5-1.1 4.9-2.5 5.2-3.1 1.9-3 2.8-.7 2.4 6.5-.3 7-.6 7.8-3.4 10.4-3.7 3.3-10.6 4.6-16.2 3.1-4.4-1.2-6.9-3.5-7.4-7-.3-2.3-.3-2.3-13.7-2.2-7.4.1-13.8.4-14.1.6-1.1.7.6 10.9 2.3 14.1 4.7 9.1 16.8 13.3 38 13.4 17.7 0 33.1-5.3 38.6-13.4 4.7-6.8 5.5-10.9 5.6-25.9 0-7.5.2-13.7.5-13.7s1.4 2.1 2.4 4.8c2.6 6.1 10.6 14.1 17.7 17.5 14.9 7 35.5 5.4 49.5-3.9 5.8-3.9 13.1-12.1 11.8-13.3-1.2-1-23-10.1-24.3-10.1-.6 0-1.8 1.4-2.6 3.1-2.1 4-9.3 7.3-14.1 6.5-1.8-.4-4.7-1.8-6.3-3.2-3.2-2.7-5.9-9-4.4-10.5.5-.5 12.8-1 27.3-1.1l26.5-.3.3-3.4c.2-1.9-.2-6.4-.8-10-3.9-22.7-21.1-35.3-46-33.8-15.9.9-27.8 7.9-33.5 19.4-1.6 3.4-3.3 6.2-3.7 6.2-.4.1-.6-5-.5-11.2l.2-11.2h-26l-.3 2.7c-.4 3.4-1.2 3.5-4.2.3-5.8-6.2-24-7.4-35.1-2.3-6.3 2.9-13.4 9.6-15.1 14.5-.7 1.8-1.5 3.3-2 3.3-.4 0-1.2-1.9-1.9-4.2-1.7-6.5-7.9-12.1-16-14.6-7.8-2.4-22.7-3.4-31.7-2.2zm181.2 21.2c1.5 1.3 2.9 3.8 3.2 5.5l.7 3.3h-11.2c-10.6 0-11.1-.1-11.1-2.1 0-1.2 1.5-3.6 3.4-5.5 2.9-2.9 4.1-3.4 7.9-3.4 3.3 0 5.3.6 7.1 2.2zm-84.2 2.5c3.1 2.8 4.8 7.6 4.8 14 0 11.7-3.4 17.1-11.3 18-9.3 1.1-13.7-4.3-13.7-16.4 0-8.6 2.5-14.3 7.1-16.6 4.1-2.1 10.2-1.7 13.1 1zm-78.1 26C493 85.2 487 90 479.6 90c-6.8 0-9.9-6.1-5.2-10.3 2.7-2.4 19.6-7.8 20.9-6.6.5.3.4 2.4-.2 4.6z"/>
                       </svg> : 
            <span className='points'>{this.props.question.points}</span>,
            className = 'flipper';

        if (this.state.view !== 'points') {
            className = className + ' flipped';
        }
        if (this.state.flipping) {
            className = className + ' flipping';
        }
        if (this.props.start === true) {
        return (
            <div style={style} className={className} onClick={this.clickHandler.bind(this)} onTransitionEnd={this.transitionEndHandler.bind(this)}>
                <div className='card'>
                    <div className='front'>
                        {front}
                    </div>
                    <div className='back'>
                        <span dangerouslySetInnerHTML={this.getLabelBack()}/>
                        <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 145" id="logo-card-back" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.handleClick}>
                          <path d="M182.5 8.2c-.3.7-.6 6.2-.7 12.3l-.3 11-5 .5c-4.8.5-5 .6-5.3 3.7-.2 1.8-.5 3.3-.6 3.3-.2 0-2.1-1.8-4.3-3.9-5.2-5.2-12.9-7.5-22.9-6.9-8.1.5-17 4.2-20.3 8.4-1 1.3-2.1 2.4-2.4 2.4-.3 0-.7-1.9-.9-4.3l-.3-4.2H90.6l.3 10.2c.3 10.5-.7 13.1-2.7 7.3-1.5-4.3-9.3-12.2-15.3-15.4-7-3.9-14-5.6-22.9-5.6-18.4 0-31.8 7.7-39.1 22.6-2.8 5.6-3.3 7.8-3.7 16.3C6.8 74 7.1 77 8.8 82.7 13.6 98.3 24.9 107.9 42 111c16.1 2.9 36-3.6 44.7-14.5 1.5-1.9 3.2-3.5 3.7-3.5.4 0 .6 3.4.5 7.6l-.4 7.6 15.5.1h15.5l.5-24.7.5-24.8 2.8-2.4c3.9-3.4 11.5-3.4 15.4 0l2.8 2.4.5 24.7.5 24.7h30V49h7.6l-.7 20.7c-.5 15.2-.3 22 .6 25.3 1.6 5.9 7.2 11.2 13.6 13.1 5.6 1.6 24.4 1.6 28.7 0 2.5-1 2.7-1.5 2.7-6.7v-5.7l4.6 4.3c2.5 2.3 7.5 5.6 11.2 7.3 6.2 2.9 7.7 3.2 18.8 3.5 8.9.3 13.8 0 18.5-1.2 12-3.1 22.6-11.5 26.6-21.1 2-5.1 3.3-5.8 3.3-1.9 0 7.8 5.8 16.7 13.4 20.6 3 1.6 6.5 2.3 13.2 2.6 11.9.6 18-1.3 24.2-7.5l4.4-4.4-.4 5.1-.3 5.1 14.5.1 14.5.1V30.5h-30l-.5 24C362.4 84 362 85 351.1 85c-3.8 0-5.6-.6-7.8-2.4l-2.8-2.4-.5-24.9-.5-24.8h-30v11.8c0 6.4-.3 11.7-.6 11.7-.4 0-1.4-2-2.3-4.5-1-2.4-3.7-6.6-6.1-9.3-8-8.9-19.4-13.2-35-13.2-14.8 0-24.8 3.5-33.5 11.6-2.6 2.4-4.9 4.4-5.1 4.4-.3 0-.5-2.4-.4-5.3v-5.2L220 32l-6.5-.5-.2-12-.1-12-15.1-.3c-11.6-.2-15.3 0-15.6 1zm88 38.1l4 11.2 12.3.3c6.7.1 12.2.6 12.2 1s-4.1 3.8-9 7.7c-5 3.8-9 7.6-9 8.5 0 1.3 3.5 14.8 5.4 20.7.4 1.3.3 2.3-.2 2.3s-5.1-3.2-10.2-7c-5.1-3.9-9.7-7-10.1-7-.4 0-4.8 3.2-9.8 7-5.1 3.9-9.6 7-10.2 7-.6 0-.7-.9-.3-2.3 3.8-11.8 6.2-21.3 5.4-22.2-.5-.5-4.7-3.9-9.4-7.5s-8.6-6.8-8.6-7.3c0-.4 5.3-.7 11.9-.7 8.3 0 12.2-.4 12.9-1.3.5-.6 2.5-5.8 4.3-11.5 1.8-5.6 3.6-10.2 3.9-10.2.3 0 2.3 5.1 4.5 11.3zM56.9 48.6c1.9 1.4 5.1 6.9 5.1 8.9 0 .3-5.2.5-11.5.5-7.4 0-11.5-.4-11.5-1 0-2.1 3-6.9 5.2-8.4 2.9-2.1 9.7-2 12.7 0zM223 50.1c0 .6-.7 3.6-1.6 6.6-1.6 5.6-1.6 22.8.1 28 .6 2 .4 2.3-1.7 2.3-1.3 0-3.4-.7-4.6-1.6-2.1-1.5-2.2-2.1-2.2-19V49h5c3 0 5 .4 5 1.1zM90.8 81.4c.2 3.2.1 6.5-.2 7.2-.4.9-3.5-.1-11.6-3.7-11.2-4.9-14-5.7-14-4 0 .5-1.2 2.3-2.6 4-5 5.9-15.1 6.3-20.3.7-2.2-2.4-4.4-9-3.3-10.1.3-.3 12.1-.4 26.1-.3l25.6.3.3 5.9zM476.2 28c-8.2 1.1-14.8 3.4-19.4 6.5-2 1.4-3.9 2.5-4.2 2.5-.3 0-.6-1.9-.8-4.3l-.3-4.2-6 .2c-6.9.3-13.5 2.5-16 5.3s-3.3 2.5-3.7-1.1l-.3-3.2-14.5.1h-14.5v78.4h30l.5-22c.5-20.4.7-22.3 2.6-24.9 4.6-6.2 7.1-6.8 33.9-8.2 10.3-.6 11-.7 12.1-3 1.8-3.5 3.2-4.1 10.1-4.1 5.5 0 6.4.3 8.2 2.6 4.4 5.6 2.7 6.6-15.8 9.4-15.6 2.4-18.5 3.2-24.3 6.9-15.3 9.7-13.8 33.6 2.6 42.4 3.5 1.9 5.6 2.2 15.6 2.2 10.7 0 11.9-.2 17.5-2.9 7.4-3.7 8-3.7 8-.6v2.5l14.5-.4c8-.1 14.6-.4 14.8-.6.1-.1-.2-1.4-.8-2.9-1.2-3.2-1.4-20.6-.2-20.6.4 0 1.4 1.5 2 3.4 2 5.3 10.9 12.9 17.8 15.1 8.1 2.5 19.5 2.4 25.6-.3 2.5-1.1 4.9-2.5 5.2-3.1 1.9-3 2.8-.7 2.4 6.5-.3 7-.6 7.8-3.4 10.4-3.7 3.3-10.6 4.6-16.2 3.1-4.4-1.2-6.9-3.5-7.4-7-.3-2.3-.3-2.3-13.7-2.2-7.4.1-13.8.4-14.1.6-1.1.7.6 10.9 2.3 14.1 4.7 9.1 16.8 13.3 38 13.4 17.7 0 33.1-5.3 38.6-13.4 4.7-6.8 5.5-10.9 5.6-25.9 0-7.5.2-13.7.5-13.7s1.4 2.1 2.4 4.8c2.6 6.1 10.6 14.1 17.7 17.5 14.9 7 35.5 5.4 49.5-3.9 5.8-3.9 13.1-12.1 11.8-13.3-1.2-1-23-10.1-24.3-10.1-.6 0-1.8 1.4-2.6 3.1-2.1 4-9.3 7.3-14.1 6.5-1.8-.4-4.7-1.8-6.3-3.2-3.2-2.7-5.9-9-4.4-10.5.5-.5 12.8-1 27.3-1.1l26.5-.3.3-3.4c.2-1.9-.2-6.4-.8-10-3.9-22.7-21.1-35.3-46-33.8-15.9.9-27.8 7.9-33.5 19.4-1.6 3.4-3.3 6.2-3.7 6.2-.4.1-.6-5-.5-11.2l.2-11.2h-26l-.3 2.7c-.4 3.4-1.2 3.5-4.2.3-5.8-6.2-24-7.4-35.1-2.3-6.3 2.9-13.4 9.6-15.1 14.5-.7 1.8-1.5 3.3-2 3.3-.4 0-1.2-1.9-1.9-4.2-1.7-6.5-7.9-12.1-16-14.6-7.8-2.4-22.7-3.4-31.7-2.2zm181.2 21.2c1.5 1.3 2.9 3.8 3.2 5.5l.7 3.3h-11.2c-10.6 0-11.1-.1-11.1-2.1 0-1.2 1.5-3.6 3.4-5.5 2.9-2.9 4.1-3.4 7.9-3.4 3.3 0 5.3.6 7.1 2.2zm-84.2 2.5c3.1 2.8 4.8 7.6 4.8 14 0 11.7-3.4 17.1-11.3 18-9.3 1.1-13.7-4.3-13.7-16.4 0-8.6 2.5-14.3 7.1-16.6 4.1-2.1 10.2-1.7 13.1 1zm-78.1 26C493 85.2 487 90 479.6 90c-6.8 0-9.9-6.1-5.2-10.3 2.7-2.4 19.6-7.8 20.9-6.6.5.3.4 2.4-.2 4.6z"/>
                       </svg>
                    </div>
                </div>
            </div>
        );
        }
        else return (<div></div>)
  }

};

export default Card;