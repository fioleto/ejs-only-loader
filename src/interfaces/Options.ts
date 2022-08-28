import {WebpackThis} from "./WebpackThis";

export interface Options{
	ejsData: Record<string, any> | {
		(this: WebpackThis): Record<string, any>
	}
}