import merge from "lodash.merge";
import {Options} from "../interfaces/Options";

export function parseOption(
	rawOptions: Record<string, any>
): Options{
	let optionMap: Partial<Options> = {};

	if(rawOptions.hasOwnProperty('ejsData'))
		optionMap.ejsData = rawOptions.ejsData;

	return merge<
		Options,
		Partial<Options>
	>(
		{
			ejsData: {}
		},
		optionMap
	);
}