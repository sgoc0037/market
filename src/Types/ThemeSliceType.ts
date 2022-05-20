
export interface mainThemeType {
    id: number
    name: string
    img?: Blob
} 

export interface productsSliceType {
    themeType: Array<mainThemeType>
    nature: Array<mainThemeType>
    games: Array<mainThemeType>
    streets: Array<mainThemeType>
}