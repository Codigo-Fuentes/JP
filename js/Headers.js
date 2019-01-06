import React from 'react';

class Headers extends React.Component {

    render() {

        let style = {
                width: this.props.headerWidth
            },
            headers = [];

        this.props.data.forEach((category, index) => headers.push(<span className='header' style={style} key={index}>{category.category}</span>));
        if (this.props.start === true) {
        return (
            <div className='headers'>
                {headers}
            </div>
        );
        }
        else return (<div></div>)
    }   

};

export default Headers;
