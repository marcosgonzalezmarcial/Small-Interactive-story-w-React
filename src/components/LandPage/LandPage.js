import MyContainer from "./MyContainer";
import MyHeaderContainer from "./MyHeaderContainer";
import MyHeader from "./MyHeader";
import MyMain from "./MyMain";
import MyTextArea from "./MyTextArea";
import ConfirmButtonArea from "./ConfirmButtonArea";
import MyButton from "./MyButton";

export default function LandPage(props) {
  return (
    <MyContainer className="container primerHijodeApp">
      <MyHeaderContainer className="Header segundoHijodeApp1">
        <MyHeader>Historia interactiva</MyHeader>
      </MyHeaderContainer>
      <MyMain className="segundoHijodeApp2">
        <MyTextArea className="text-area">
          Este es el prototipo de una aplicación tipo tutorial para una empresa.
          Te invitamos a conocer su funcionalidad clickando el siguiente botón:
        </MyTextArea>
        <ConfirmButtonArea className="confirm-button tercerHijodeApp">
          <MyButton onClick={props.setSession}>¿Te animás?</MyButton>
        </ConfirmButtonArea>
      </MyMain>
    </MyContainer>
  );
}
