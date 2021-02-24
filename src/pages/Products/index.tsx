import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { TranslateFunction } from 'react-localize-redux';

import { Container } from 'react-bootstrap';
import FilterableProductTable from 'containers/products/FilterableProductTable';

interface Props {
	translate: TranslateFunction;
}

class Attendance extends React.Component<Props> {
	render() {
		return (
			<Container>
				<h1>Attendance</h1>
				<FilterableProductTable />
			</Container>
		);
	}
}

export default baseConnect(Attendance, () => { return {}; }, () => { return {}; });

