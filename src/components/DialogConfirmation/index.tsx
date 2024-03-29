import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
    id: number,
    message: string,
    onDialogueAnswer: Function
}

export default function DialogConfirmation({id, message, onDialogueAnswer}: Props) {
    return (
        <div className="dsc-dialog-bg" onClick={() => onDialogueAnswer(false, id)}>
            <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="dsc-dialog-btn-container" >
                    <div onClick={() => onDialogueAnswer(false, id)}>
                        <ButtonInverse text="Não" />
                    </div>
                    <div onClick={() => onDialogueAnswer(true, id)}>
                        <ButtonPrimary text="Sim" />
                    </div>
                </div>
            </div>
        </div>
    );
}