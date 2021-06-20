import React, {useState} from 'react'

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const updateStatusArea = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                    <span onDoubleClick={() => {
                        setEditMode(true)
                    }}> {status ? status : 'There is no status'} </span>
            </div>
            }
            {editMode &&
            <div>
                <input onBlur={() => {
                    setEditMode(false);
                    props.updateUserStatus(status)
                }} autoFocus={true} onChange={updateStatusArea} value={status}/>
            </div>
            }
        </div>

    )
}

export default ProfileStatusWithHooks;