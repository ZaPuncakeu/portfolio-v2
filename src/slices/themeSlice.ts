import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ThemeState {
    theme: string
}

const initialState: ThemeState = {
    theme: window.sessionStorage.getItem('portfolio-anis-theme') || 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<string>) => {
            window.sessionStorage.setItem('portfolio-anis-theme', action.payload);
            state.theme = action.payload;
        }
    }
})

export const { changeTheme } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;