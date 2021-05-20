import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    updateStatusArea = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={() => {
                        this.setState({editMode: true})
                    }}> {this.state.status ? this.state.status : 'There is no status'} </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={() => {
                        this.setState({editMode: false});
                        this.props.updateUserStatus(this.state.status)
                    }} autoFocus={true} onChange={this.updateStatusArea} value={this.state.status}/>
                </div>
                }
            </div>

        )
    }
}

export default ProfileStatus;