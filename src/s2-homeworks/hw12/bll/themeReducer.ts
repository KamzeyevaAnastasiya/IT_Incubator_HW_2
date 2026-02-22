const initState = {
    themeId: 1,
}

type StateType = typeof initState

export const themeReducer = (state = initState, action: ActionsType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {
                ...state, themeId: action.id
            }
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number | string) => ({
    type: 'SET_THEME_ID',
    id: Number(id)
} as const)

type ActionsType = ReturnType<typeof changeThemeId>
