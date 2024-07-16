export enum EInputType {
    TEXT = "text",
    EMAIL = 'email',
    PASSWORD = "password",
    FILE = "file",
    CHECKBOX = "checkbox",
    RADIO = "radio",
    DATE = "date",
    TEXTAREA = "textarea",
    NUMBER = 'number',
    Tel = 'tel'
}

type TInputType = 'text' | 'email' | 'password' | 'file' |'checkbox' | 'radio' | 'date' | 'number' | 'tel'
export type TFormField<T> = ({
    type: TInputType;
} | {
    type: 'select';
    option: {
        label: string;
        value: string;
    }[]
}) & {
    label: string;
    name: keyof T;
    placeholder?: string;
    required: boolean;
    description?: string
}