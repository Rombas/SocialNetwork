import React from "react";
import styles from './Forms.module.css'

export const required = value => (value || typeof value === 'number' ? undefined : 'Required')

export const Textarea = ({
                             input,
                             label,
                             type,
                             meta
                         }) => {
    return (<div>
        <textarea {...input} className={(meta.touched && meta.error ? styles.error : '')}></textarea>
        <div>
            {meta.touched && ((meta.error && <span className={styles.errorText}>{meta.error}</span>))}
        </div>
    </div>)
}

export const Input = ({
                             input,
                             label,
                             type,
                             meta
                         }) => {
    return (<div>
        <input {...input} placeholder={label} type={type} className={(meta.touched && meta.error ? styles.error : '')}></input>
        <div>
            {meta.touched && ((meta.error && <span className={styles.errorText}>{meta.error}</span>))}
        </div>
    </div>)
}
