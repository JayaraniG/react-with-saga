import React from 'react';
//import { FormGroup, FormControl } from 'react-bootstrap';

const
    FullscreenModal = (props) => {
        if (props.shouldDisplay) {
            return (
                <div className="fullscreen-modal-overlay">
                    <div className="fullscreen-modal animated bounceInDown">
                        {props.children}
                    </div>
                </div>
            )
        }

        return null;
    };

export default FullscreenModal;