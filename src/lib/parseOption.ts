import merge from "lodash.merge";
import {Options} from "../interfaces/Options";
import {WebpackThis} from "../interfaces/WebpackThis";

export function parseOption(
	this: WebpackThis,
	rawOptions: Record<string, any>
): Options{
	let optionMap: Partial<Options> = {};

	if(rawOptions.hasOwnProperty('ejsData')){
		if(typeof rawOptions.ejsData === 'function')
			optionMap.ejsData = rawOptions.ejsData.call(this);
		else
			optionMap.ejsData = rawOptions.ejsData;
	}

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