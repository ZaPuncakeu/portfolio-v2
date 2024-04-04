import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface LanguageState {
    language: string
}

const initialState: LanguageState = {
    language: window.localStorage.getItem('portfolio-anis-language') || navigator.language.split('-')[0] || 'fr'
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
            window.localStorage.setItem('portfolio-anis-language', action.payload);
        }
    }
})

export const { changeLanguage } = languageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLanguage = (state: RootState) => state.language.language;

export default languageSlice.reducer;