"use strict";

export default class Utils {
	//noinspection TsLint
	/**
	 * From jQuery (https://github.com/jzaefferer/jquery-validation/blob/master/src/core.js#L1349)
	 * @param url
	 * @returns {boolean}
	 */
	public static isValidUrl(url: string): boolean {
		return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url);
	}

	public static isValidGit(value: string): boolean {
		return Utils.isValidUrl(value) && value.indexOf(".git") !== -1;
	}

	public static formatXml(xml: string): string {
		const reg: RegExp = /(>)\s*(<)(\/*)/g;
		const wsexp: RegExp = / *(.*) +\n/g;
		const contexp: RegExp = /(<.+>)(.+\n)/g;
		xml = xml.replace(reg, "$1\n$2$3").replace(wsexp, "$1\n").replace(contexp, "$1\n$2");
		let formatted: string = "";
		const lines: string[] = xml.split("\n");
		let indent: number = 0;
		let lastType: string = "other";
		// 4 types of tags - single, closing, opening, other (text, doctype, comment) - 4*4 = 16 transitions
		//noinspection TsLint
		const transitions: { [key: string]: number } = {
			"single->single": 0,
			"single->closing": -1,
			"single->opening": 0,
			"single->other": 0,
			"closing->single": 0,
			"closing->closing": -1,
			"closing->opening": 0,
			"closing->other": 0,
			"opening->single": 1,
			"opening->closing": 0,
			"opening->opening": 1,
			"opening->other": 1,
			"other->single": 0,
			"other->closing": -1,
			"other->opening": 0,
			"other->other": 0,
		};

		for (const line of lines) {
			const ln: string = line.trim();
			const single: boolean = Boolean(ln.match(/<.+\/>/)); // is this line a single tag? ex. <br />
			const closing: boolean = Boolean(ln.match(/<\/.+>/)); // is this a closing tag? ex. </a>
			const opening: boolean = Boolean(ln.match(/<[^!].*>/)); // is this even a tag (that's not <!something>)
			const type: string = single ? "single" : closing ? "closing" : opening ? "opening" : "other";
			const fromTo: string = lastType + "->" + type;
			lastType = type;
			let padding: string = "";

			indent += transitions[fromTo];
			for (let j = 0; j < indent; j++) {
				padding += "\t";
			}
			if (fromTo === "opening->closing") {
				formatted = formatted.substr(0, formatted.length - 1) + ln + "\n";
			} else { // substr removes line break (\n) from prev loop
				formatted += padding + ln + "\n";
			}
		}

		return formatted;
	}
}
