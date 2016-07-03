import cardsdb from './cardsdb'

const initialState = {
	maxID : 0,
	draggedCard : null,
	allCards : cardsdb,
	chainCards : []
}

export default {initialState}