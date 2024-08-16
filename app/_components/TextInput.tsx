import { styled } from "@linaria/react";
import { FC } from "react";

const FormRow = styled.div`
  position: relative;

  & input:not(:placeholder-shown) ~ label,
  & input:focus-visible ~ label,
  & textarea:not(:placeholder-shown) ~ label,
  & textarea:focus-visible ~ label {
    top: 0.6rem;
    translate: 0 0;
    font-size: 1.2rem;
  }
`;

const StyledTextInput = styled.input`
  width: 100%;

  padding: 2rem 1.2rem 0.4rem 1.2rem;
  background-color: var(--color-gray-100);
  color: var(--color-gray-800);
  box-shadow: inset 0 -2px 0 0 transparent;
  transition: all 0.2s;

  &:focus {
    outline: none;
    box-shadow: inset 0 -2px 0 0 var(--color-primary-600);
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 9.6rem;

  padding: 2.4rem 1.2rem 0.4rem 1.2rem;
  background-color: var(--color-gray-100);
  color: var(--color-gray-800);
  box-shadow: inset 0 -2px 0 0 transparent;
  transition: all 0.2s;

  &:focus {
    outline: none;
    box-shadow: inset 0 -2px 0 0 var(--color-primary-600);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 1.6rem;
  left: 1.2rem;
  translate: 0 0;
  color: var(--color-gray-600);
  line-height: 1;
  transition: all 0.2s;
  pointer-events: none;
`;

interface TextInputProps {
  fieldName: string;
  inputType?: "input" | "textarea";
  className?: string;
  style?: {};
  [x: string]: any;
}

const TextInput: FC<TextInputProps> = ({
  fieldName,
  inputType = "input",
  ...props
}) => {
  return (
    <FormRow>
      {inputType === "input" ? (
        <StyledTextInput id={fieldName} placeholder="" {...props} />
      ) : (
        <StyledTextArea id={fieldName} placeholder="" {...props} />
      )}
      <Label htmlFor={fieldName}>{fieldName}</Label>
    </FormRow>
  );
};

export default TextInput;
