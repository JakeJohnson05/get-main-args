#!/usr/bin/env node
'use strict';

export const getMainArgs = (): string[] => {
	let i = -1;
	const result: string[] = [];
	const mainArgs: string[] = process.argv.slice(2);
	while (++i < mainArgs.length) {
		if (mainArgs[i] === '--') {
			break;
		}

		result.push(mainArgs[i]);
	}

	return result;
};
