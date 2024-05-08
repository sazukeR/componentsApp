import prompt from "react-native-prompt-android";


 interface Options {
   title: string;
   subTitle?: string;
   buttons: PrompptButton[];
   propmptType?: "plain-text" | "secure-text";
   placeholder?: string;
   defaultValue?:  string;
 }

 interface PrompptButton {
   text: string;
   onPress: () => void;
   style?: "cancel" | "default" | "destructive";
 }

 export const showPrompt = ({   
   title,
   subTitle,
   buttons,
   propmptType = "plain-text",
   placeholder,
   defaultValue,
 }: Options) => {






 prompt(
  title,
  subTitle,
  buttons,
  {
    type: propmptType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeholder,
  },
);
}