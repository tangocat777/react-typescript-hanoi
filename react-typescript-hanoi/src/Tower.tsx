import React from 'react';
class Tower extends React.Component {

    render() {
        return (<span className="col-4">
            {
                this.props.stack.getArray().map(
                    (num: Number) => <div><input disabled={true} value={num}/></div>)
            }
        </span>
    )};
}

export default Tower;