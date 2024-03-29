import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string,
    onDialogueClose: Function
}

export default function DialogInfo({message, onDialogueClose}: Props) {
    return (
        <div className="dsc-dialog-bg" onClick={() => onDialogueClose()}>
            <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="dsc-dialog-btn" onClick={() => onDialogueClose()}>
                    <ButtonPrimary text="Ok" />
                </div>
            </div>
        </div>
    );
}