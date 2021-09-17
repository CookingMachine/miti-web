import * as React from "react";
import {Alert, Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import BlockUi from "react-block-ui";
import {CSSProperties, useEffect, useState} from "react";


interface Props {
    title: string,
    closeDialog: CallableFunction,
    asyncOperation: () => Promise<void>,
    allowOk: boolean,
    children: any,
    hideOk?: boolean,
    style?: CSSProperties;
    customClassName?: string,
    footer?: any,
    childError?: string | undefined,
    tip?: any,
    okButtonText?: string,
    multilineErrors?: boolean,
    size?: string,
    loadingMessage?: any;
}

const OkCancelModal = ({
    title,
    allowOk,
    children,
    hideOk,
    closeDialog, customClassName,
    style,
    asyncOperation,
    footer,
    childError,
    tip,
    okButtonText = 'OK',
    multilineErrors,
    size,
    loadingMessage,
}: Props) => {

    const [isOperationInProgress, setOperationInProgress] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isOpen, setIsOpen] = useState(true);

    useEffect(()=>{
        setErrorMessage(childError ?? "")
    }, [childError]);

    const _closeDialog = () => {
        if (!isOperationInProgress) {
            setIsOpen(false);
            setTimeout(closeDialog, 300); 
        }
    };

    const toggle = () => _closeDialog();

    const _executeOperation = async () => {
        setErrorMessage("");
        setOperationInProgress(true);
        try {
            await asyncOperation();
            setOperationInProgress(false);
            _closeDialog();
        } catch (e) {
            setOperationInProgress(false);
            setErrorMessage(e.toString());
        }
    };

    const errorMessageStyle: { whiteSpace: "pre-wrap" } | undefined = multilineErrors ? { whiteSpace: "pre-wrap" } : undefined;

    return (
        <Modal style={style} isOpen={isOpen} toggle={toggle} className={customClassName} size={size}>
            <ModalHeader className="long-text-modal-header">
               
            </ModalHeader>
            <ModalBody>
                <BlockUi blocking={isOperationInProgress} message={loadingMessage}>
                    {errorMessage ? <Alert color="danger" style={errorMessageStyle}>{errorMessage}</Alert> : null}
                    {children}
                </BlockUi>
            </ModalBody>
            <ModalFooter>
                <div style={{flex: "1 0 50%"}}>
                    {footer}
                </div>
                <Button color="default" disabled={isOperationInProgress} onClick={toggle}>
                    Cancel
                </Button>
                {!hideOk && (
                    <Button color="primary" disabled={isOperationInProgress || !allowOk} onClick={() => _executeOperation()}>
                        {okButtonText}
                    </Button>
                )}
            </ModalFooter>
        </Modal>
    )
};

export default OkCancelModal