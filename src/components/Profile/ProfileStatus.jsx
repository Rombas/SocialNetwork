import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={() => {
                        this.setState({editMode: true})
                    }}> {this.props.status} </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={() => {
                        this.setState({editMode: false})
                    }} autoFocus={true} value={this.props.status}/>
                </div>
                }
            </div>

        )
    }
};

export default ProfileStatus;