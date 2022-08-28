import {WebpackThis} from "./interfaces/WebpackThis";
import {parseOption} from "./lib/parseOption";
import {render} from "ejs";
import {resolve} from "path";

module.exports = function(
	this: WebpackThis,
	source: string
): void{
	try{
		const options = parseOption(
			this.getOptions()
		);

		const compiledSource = render(
			source,
			options.ejsData,
			{
				rmWhitespace: false,
				root: resolve(
					this.resourcePath
				)
			}
		);

		this.callback(
			null,
			compiledSource
		);
		return;
	}catch(error: unknown){
		if(error instanceof Error){
			this.callback(
				error
			);
			return;
		}

		this.callback(
			new Error(
				String(error)
			)
		);
		return;
	}
}