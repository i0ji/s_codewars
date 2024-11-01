export const draw = (deck: string[]): string[] => {
    printDeck(deck, true); // Using unicode characters
    printDeck(deck, false); // Using regular characters

    const drawnCards: string[] = [];

    return drawnCards;