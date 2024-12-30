import React from 'react';
class Tower extends React.Component {

    render() {
        console.log(this.props);
        return (<div>
            {
                this.props.stack.getArray().map(
                    (num: Number) => <input disabled="true" value={num}/>)
            }
        </div>
    )};
}

export default Tower;