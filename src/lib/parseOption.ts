import merge from "lodash.merge";
import {Options} from "../interfaces/Options";

export function parseOption(rawOptions: Options): Options{
	return merge<
		Options,
		Record<string, string | boolean | null | Record<string, any>>
	>(
		{
			ejsData: {},
			enableRmWhitespace: false
		},
		{
			ejsData: rawOptions.hasOwnProperty("ejsData") ?
				rawOptions.ejsData : {},
			enableRmWhitespace: (
				rawOptions.hasOwnProperty("enableRmWhitespace") &&
				typeof rawOptions.enableRmWhitespace === 'boolean'
			) ? rawOptions.enableRmWhitespace : false
		}
	);
}