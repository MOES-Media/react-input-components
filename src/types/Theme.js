//@flow
export type Color = {
    default: string,
    active: string,
    hover: string,
}

export type Text = {
    buttonText: string,
}

export type ColorConfig = {
    key: string,
    value: Color,
}

export type TextConfig = {
    key: string,
    value: Text,
}