import {WebpackThis} from "./interfaces/WebpackThis";
import {parseOption} from "./lib/parseOption";
import {render} from "ejs";
import {resolve, parse} from "path";

module.exports = function(
	this: WebpackThis,
	source: string
): void{
	try{
		const options = parseOption.call(
			this,
			this.getOptions()
		);

		const compiledSource = render(
			source,
			options.ejsData,
			{
				rmWhitespace: false,
				filename: resolve(
					this.resourcePath
				),
				root: parse(
					resolve(
						this.resourcePath
					)
				).dir
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