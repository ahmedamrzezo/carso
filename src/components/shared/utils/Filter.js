export class FilterService {

	constructor(by) {
		this.by = by;
		console.log(this.by);
	}

	filterType = {
		date: {}
	};

	buildFilter() {
		return {
			filter: this.filterType[this.by]
		};
	}
}