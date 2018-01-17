//@flow
export type Meta = {
    focus?: boolean,
    touched?: boolean,
}

export type Changeable = Meta & {
    value: string,
}