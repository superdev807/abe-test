import { APPS_BY_ID, APPS_BY_NAME } from "~/utils/constants";

export const createAllGamesWithBlanks = games => {
    const allGamesHash = {};
    const allGames = [];
    games.forEach(game => {
        // TODO: Blackjack is not for MVP
        if (game.GameId !== APPS_BY_NAME.MV_BLACKJACK.id) {
            allGamesHash[game.GameId] = true;
            allGames.push(game);
        }
    });

    Object.values(APPS_BY_ID).forEach(app => {
        if (!allGamesHash[app.GameId]) {
            allGamesHash[app.GameId] = true;
            allGames.push(app);
        }
    });

    return allGames;
};
