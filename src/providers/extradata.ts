import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Extradata {
	pdf: any;

	constructor() {
		console.log('Hello Extradata Provider');
	}

	buildPdf(canva, title, canvatype) {
		this.pdf = { 
			pageOrientation: 'landscape',
			content: [
				{ text: String(canvatype.title), style: 'header' },
				{ text: String(title), style: 'subheader'},
				{
					style: 'itemsTable',
					table: {
						height: '1000px',
						widths: ['*','*','*','*','*', '*','*','*','*','*'],
						body: [
							[{ colSpan:2, rowSpan:2,  text: String(canvatype.case1)+"\n"+String(canva.case1), style: 'borderleft' }, {},
							 { colSpan:2, text: String(canvatype.case3)+"\n"+String(canva.case3), style: 'itemsTableHeader' }, {},
							 { colSpan:2, rowSpan:2, text: String(canvatype.case9)+"\n"+String(canva.case9), style: 'itemsTableHeader' }, {},
							 { colSpan:2, text: String(canvatype.case6)+"\n"+String(canva.case6), style: 'itemsTableHeader' }, {},
							 { colSpan:2, rowSpan:2, text: String(canvatype.case2)+"\n"+String(canva.case2), style: 'itemsTableHeader' }, {}],

							[{},{}, { colSpan:2, text: String(canvatype.case5)+"\n"+String(canva.case5), style: 'itemsTableHeader' },{},{},{},
							 { colSpan:2, text: String(canvatype.case4)+"\n"+String(canva.case4), style: 'itemsTableHeader' },{},{},{}],

							[{ colSpan:5, text: String(canvatype.case7)+"\n"+String(canva.case7), style: 'itemsTableHeader' },{},{},{},{},
							 { colSpan:5, text: String(canvatype.case8)+"\n"+String(canva.case8), style: 'itemsTableHeader' },{},{},{},{}],
						]
					}
				}
			],							

			styles: {
				header: {
					fontSize: 20,
					bold: true,
					margin: [0, 0, 0, 10],
					alignment: 'center'
				},
				subheader: {
					fontSize: 16,
					bold: true,
					margin: [0, 20, 0, 5]
				},
				itemsTable: {
					margin: [0, 5, 0, 15]
				},
				itemsTableHeader: {
					bold: true,
					fontSize: 10,
					color: 'black',
					height: 1000
				},
				totalsTable: {
					height: 100,
					bold: true,
					margin: [0, 0, 0, 0]
				},
				borderright: {
					'border-right': '1px'
				}
			}
		};

		return this.pdf;
	}
}