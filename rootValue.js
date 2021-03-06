const Quotes = require("inspirational-quotes");

/**
 * prepares result map, with keys corresponding to typeDefs
 * @returns server answer
 */
function rootValue() {
	const today = new Date();
	const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SUN"];

	const getRandomDiceThrow = (sides) => Math.ceil(Math.random() * sides);

	const randomCoinToss = () => Math.random() > 0.5;
	const getRandomCoinTossesUntilTrue = () => {
		const result = [];

		do {
			result.push(randomCoinToss());
		} while (!result[result.length - 1]);

		return result;
	};

	return {
		greeting: "Hello!",
		interestingUrls: ["www.wsieci.pl", "www.dorzeczy.pl"],
		randomDiceThrow: getRandomDiceThrow(6),
		schroedingerCatGreeting: randomCoinToss() ? "Meow!" : null,
		luckyNumbers: [5, 7],
		pi: Math.PI,
		isTodayFriday: today.getDay() === 5,
		randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
		workDays: DAYS_OF_WEEK.slice(1, 6),
		today: DAYS_OF_WEEK[today.getDay()],
		randomQuote: Quotes.getQuote()
	};
}

module.exports = rootValue;