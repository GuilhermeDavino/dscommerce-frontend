import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string,
    onDialogueAnswer: Function
}

export default function DialogConfirmation({message, onDialogueAnswer}: Props) {
    return (
        <div className="dsc-dialog-bg" onClick={() => onDialogueAnswer(false)}>
            <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="dsc-dialog-btn-container" >
                    <div onClick={() => onDialogueAnswer(false)}>
                        <ButtonInverse text="Não" />
                    </div>
                    <div onClick={() => onDialogueAnswer(true)}>
                        <ButtonPrimary text="Sim" />
                    </div>
                </div>
            </div>
        </div>
    );
}