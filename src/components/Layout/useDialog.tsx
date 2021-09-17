import {useState} from "react";

export function useDialog(dialogCreator: (closeDialog: CallableFunction) => JSX.Element | undefined): [JSX.Element | undefined, () => void] {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    let dialog = isDialogOpen ? dialogCreator(closeDialog) : undefined;

    return [dialog, () => setIsDialogOpen(true)];
}

export function useDialogWithParameter<T>(dialogCreator: (p:T , closeDialog: CallableFunction) => JSX.Element | undefined): [JSX.Element | undefined, (parameter: T) => void] {

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [parameter, setParameter] = useState<T>();

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    let dialog = isDialogOpen && parameter !== undefined ? dialogCreator(parameter, closeDialog) : undefined;

    return [dialog, (parameter: T) => {
        setParameter(parameter);
        setIsDialogOpen(true);
    }];
}