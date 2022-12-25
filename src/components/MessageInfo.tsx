import React from 'react';
import classNames from 'classnames';

type Props = {
    message: string;
    action: (e: string) => void;
    danger?: boolean;
};
const MessageInfo = ({ message, action, danger = false }: Props) => {
    if (message === '') return null;
    const classname = classNames(
        'alert px-20 py-8 d-flex justify-content-between',
        {
            'alert-danger': danger,
            'alert-primary': !danger,
        },
    );
    return (
        <div className={classname} role="alert">
            {message}
            <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => action('')}
            />
        </div>
    );
};

export default MessageInfo;
