import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiHome, mdiChevronLeft } from '@mdi/js';

const BackToHome = () => {
	return (
		<div className="container-fluid">
			<div className="mt-3">
				<Link to="/" className="btn btn-link btn-sm font-weight-bold" title="Back to Homepage">
					<Icon path={mdiChevronLeft} size={1} />
					<Icon path={mdiHome} size={1} />
				</Link>
			</div>
		</div>
	);
};

export default BackToHome;
